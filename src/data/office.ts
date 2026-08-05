export const office = {
  name: "Alex Moreira Advogados",

  whatsapp: "5551996241083",

  whatsappDisplay: "+55 (51) 99624-1083",

  email: "contato@alexmoreiraadvogado.com.br",

  phone: "5551996241083",

  address: "R. Gen. Câmara, 10 - Centro, Viamão/RS",

  instagram: "",

  facebook: "",

  linkedin: "",
};

export const whatsappLink = (message?: string) =>
  `https://wa.me/${office.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;
