import type { TRule } from "fela";

export const theme = {
  colors: {},
  fonts: {},
  sizes: {},
  spacing: {},
  boxShadows: {},
  zIndex: {},
} as const;

export type Theme = typeof theme;

export type ThemeProps = { theme: Theme };

export type TRuleWithTheme<Props = {}> = TRule<ThemeProps & Props>;

export type RulesExtend<TExtandalbeRules, TProps = {}> = Partial<
  Record<keyof TExtandalbeRules, TRuleWithTheme<TProps>>
>;
