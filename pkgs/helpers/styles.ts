// Thanks IogaMaster!

export function setupView(view: any) {
  view.fill(Colors.crust);
}

export const Colors = {
  rosewater: "#f5e0dc",
  flamingo: "#f2cdcd",
  pink: "#f5c2e7",
  mauve: "#cba6f7",
  red: "#f38ba8",
  maroon: "#eba0ac",
  peach: "#fab387",
  yellow: "#f9e2af",
  green: "#a6e3a1",
  teal: "#94e2d5",
  sky: "#89dceb",
  sapphire: "#74c7ec",
  blue: "#89b4fa",
  lavender: "#b4befe",
  text: "#cdd6f4",
  subtext1: "#bac2de",
  subtext0: "#a6adc8",
  overlay2: "#9399b2",
  overlay1: "#7f849c",
  overlay0: "#6c7086",
  surface2: "#585b70",
  surface1: "#45475a",
  surface0: "#313244",
  base: "#1e1d2d",
  mantle: "#181825",
  crust: "#11111b",
};

export const CodeStyle = {
  theme: {
    stringContent: { text: Colors.green },
    stringPunctuation: { text: Colors.green },
    parameter: { text: Colors.blue },
    variable: { text: Colors.blue },
    comment: { text: Colors.overlay0 },
    literal: { text: Colors.peach },
    keyword: { text: Colors.mauve },
    entityName: { text: Colors.red },
    fallback: { text: Colors.blue },
  },
};
