// Busca as variáveis definidas no :root do index.css

export default {
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        primary: "var(--primary)",
        background: "var(--background)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        custom: "var(--shadow)",
      },
      backgroundImage: {
        gradient: "linear-gradient(var(--gradient))",
        "gradient-hover": "linear-gradient(var(--gradient-hover))",
      },
    },
  },
};
