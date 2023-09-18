import { getBucket } from '@extend-chrome/storage';

import { ColorPalette } from '../types/ColorPalette';

export const usePaletteList = () => {
  type ColorPaletteBucket = {
    colorPaletteList: ColorPalette[];
  };
  const bucket = getBucket<ColorPaletteBucket>('colorPaletteListBucket');

  const getColorPalette = async () => {
    const res = await bucket.get('colorPaletteList');
    if (!res.colorPaletteList) return [];
    return res.colorPaletteList;
  };
  const addColorPalette = async (colorPalette: ColorPalette) => {
    await bucket.set(({ colorPaletteList }) => {
      if (!colorPaletteList) return { colorPaletteList: [colorPalette] };
      return { colorPaletteList: [...colorPaletteList, colorPalette] };
    });
  };
  const removeColorPalette = async (id: string) => {
    await bucket.set(({ colorPaletteList }) => ({
      colorPaletteList: colorPaletteList.filter((value) => value.id != id),
    }));
  };
  return { getColorPalette, addColorPalette, removeColorPalette };
};
