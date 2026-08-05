import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";

import Button from "@/components/ui/Button";
import { practiceAreas } from "@/data/practiceAreas";
import { whatsappLink } from "@/data/office";

import { contactSchema, type ContactFormValues } from "./schema";

type Status = "idle" | "loading" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const inputClasses = `
  w-full
  rounded-2xl
  border
  border-slate-200
  bg-white
  px-5
  py-4
  text-slate-900
  outline-none
  transition
  placeholder:text-slate-400
  focus:border-[#B48A47]
  focus:ring-4
  focus:ring-[#B48A47]/10
`;

function buildWhatsappMessage(values: Partial<ContactFormValues>) {
  return [
    "Olá! Gostaria de falar sobre meu caso.",
    values.name && `Nome: ${values.name}`,
    values.area && `Área: ${values.area}`,
    values.message && `Mensagem: ${values.message}`,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [lastValues, setLastValues] = useState<Partial<ContactFormValues>>(
    {}
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setLastValues(values);
    setStatus("loading");

    if (!WEB3FORMS_ACCESS_KEY) {
      // Sem chave configurada: não há como enviar e-mail.
      setStatus("error");
      return;
    }

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo contato pelo site — ${values.name}`,
          from_name: "Site Alex Moreira Advogados",
          name: values.name,
          email: values.email,
          phone: values.phone,
          area: values.area,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="
          flex
          flex-col
          items-center
          gap-4
          rounded-3xl
          border
          border-emerald-200
          bg-emerald-50
          p-10
          text-center
        "
      >
        <CheckCircle2 size={40} className="text-emerald-600" />

        <h3 className="text-xl font-semibold text-slate-900">
          Mensagem enviada com sucesso!
        </h3>

        <p className="text-slate-600">
          Obrigado pelo contato. Retornaremos o mais breve possível.
        </p>

        <Button variant="outline" onClick={() => setStatus("idle")}>
          Enviar outra mensagem
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Nome completo
          </label>

          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Seu nome"
            className={inputClasses}
            {...register("name")}
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-600">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Telefone / WhatsApp
          </label>

          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(51) 90000-0000"
            className={inputClasses}
            {...register("phone")}
          />

          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          E-mail
        </label>

        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="voce@exemplo.com"
          className={inputClasses}
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="area"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Área de interesse
        </label>

        <select
          id="area"
          defaultValue=""
          className={inputClasses}
          {...register("area")}
        >
          <option value="" disabled>
            Selecione uma área
          </option>

          {practiceAreas.map((area) => (
            <option key={area.title} value={area.title}>
              {area.title}
            </option>
          ))}

          <option value="Outro assunto">Outro assunto</option>
        </select>

        {errors.area && (
          <p className="mt-2 text-sm text-red-600">{errors.area.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Mensagem
        </label>

        <textarea
          id="message"
          rows={5}
          placeholder="Conte um pouco sobre o seu caso..."
          className={`${inputClasses} resize-none`}
          {...register("message")}
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          className="
            flex
            items-start
            gap-3
            rounded-2xl
            border
            border-amber-200
            bg-amber-50
            p-4
            text-sm
            text-amber-800
          "
        >
          <AlertCircle size={20} className="mt-0.5 shrink-0" />

          <p>
            Não foi possível enviar por e-mail agora. Você pode tentar
            novamente ou continuar direto pelo WhatsApp com os dados já
            preenchidos.
          </p>
        </div>
      )}

      <div className="mt-2 flex flex-col gap-4 sm:flex-row">
        <Button
          type="submit"
          disabled={isSubmitting || status === "loading"}
          className="flex-1"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} className="mr-2" />
              Enviar mensagem
            </>
          )}
        </Button>

        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={() =>
            window.open(
              whatsappLink(buildWhatsappMessage(lastValues)),
              "_blank"
            )
          }
        >
          <MessageCircle size={18} className="mr-2" />
          Prefiro pelo WhatsApp
        </Button>
      </div>
    </form>
  );
}
