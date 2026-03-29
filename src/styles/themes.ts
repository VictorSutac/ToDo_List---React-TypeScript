import { Theme, Themes } from "../models/theme";

const light: Theme = {
  name: "light",
  colors: {
    backgroundPrimary: "#4682b4",
    backgroundSecondary: "#edf0f1",

    text: "#1f2937",
    primary: "#4f8cff",
    card: "rgba(255, 255, 255, 0.6)",
    border: "rgba(255, 255, 255, 0.3)",
  },
};

const dark: Theme = {
  name: "dark",
  colors: {
    backgroundPrimary: "#0f172a",
    backgroundSecondary: "#1e293b",

    text: "#e5e7eb",
    primary: "#3b82f6",
    card: "rgba(30, 41, 59, 0.6)",
    border: "rgba(255, 255, 255, 0.1)",
  },
};

export const themes: Themes = { light, dark };
