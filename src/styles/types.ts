//  assetColors

const ColorGroupNames = ['cosmos', 'lilac', 'lavender', 'grey'] as const;

export type ColorGroup = typeof ColorGroupNames[number];

export function isColorGroup(str: string): str is ColorGroup {
  return ColorGroupNames.includes(str as ColorGroup);
}

type MakeColorTokenSet<
  TokenName extends ColorGroup,
  TokenNumber extends number[] | string[],
> = `${TokenName}${TokenNumber[number]}`;

export type ColorToken =
  | 'white'
  | MakeColorTokenSet<'grey', [100, 200, 300, 400, 500, 600, 700, 800, 900]>
  | MakeColorTokenSet<'lilac', [100, 200, 300, 400, 500, 600, 700, 800, 900]>
  | MakeColorTokenSet<
      'lavender',
      [100, 200, 300, 400, 500, 600, 700, 800, 900]
    >;

export type ColorScheme = Record<ColorToken, string>;

//  fontSizes/types.ts

const FontGroupNames = ['title', 'text'] as const;
const TitleSizeNames = ['Xxl', 'Xl', 'L', 'M', 'S'] as const;
const TextSizeNames = ['Xxl', 'Xl', 'L', 'M', 'S', 'xs'] as const;

export type FontGroup = typeof FontGroupNames[number];
export type TitleSizeGroup = typeof TitleSizeNames[number];
export type TextSizeGroup = typeof TextSizeNames[number];

type MakeFontTokenSet<
  TokenName extends FontGroup,
  Size extends TitleSizeGroup | TextSizeGroup,
> = `${TokenName}${Size[number]}`;

export type FontToken =
  | MakeFontTokenSet<'title', TitleSizeGroup>
  | MakeFontTokenSet<'text', TextSizeGroup>;

export type FontScheme = Record<FontToken, string>;
