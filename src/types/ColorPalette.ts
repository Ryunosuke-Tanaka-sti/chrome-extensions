export type ColorPalette = {
  id: string;
  tag: string;
  color: keyof typeof ColorList;
};

export const ColorList = {
  blue: 'bg-blue-400',
  red: 'bg-red-400',
  green: 'bg-green-400',
  stone: 'bg-stone-400',
} as const satisfies Record<string, string>;
