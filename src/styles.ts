import { darken, lighten } from "polished";

const baseColors = {
  background: "#222",
  foreground: "#AAA",
  gray: "#666"
};

export const styles = {
  colors: {
    background: baseColors.background,
    background10: lighten(0.1, baseColors.background),
    background20: lighten(0.2, baseColors.background),
    background30: lighten(0.3, baseColors.background),
    foreground: baseColors.foreground,
    foreground10: lighten(0.1, baseColors.foreground),
    foreground20: lighten(0.2, baseColors.foreground),
    foreground30: lighten(0.3, baseColors.foreground),
    gray: baseColors.gray,
    highlight: ""
  }
};

console.log(styles);
