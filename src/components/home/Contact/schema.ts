import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo"),

  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido"),

  phone: z
    .string()
    .trim()
    .min(8, "Informe um telefone válido"),

  area: z.string().trim().min(1, "Selecione uma área"),

  message: z
    .string()
    .trim()
    .min(10, "Conte um pouco mais sobre o seu caso"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
