import flowbite from "flowbite-react/tailwind";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#287080",
      },
    },
  },
  plugins: [typography, flowbite.plugin],
};
export default config;
