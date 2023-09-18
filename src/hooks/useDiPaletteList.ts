import useSWR from 'swr';

import { usePaletteList } from './usePaletteList';

export const useDiPaletteList = () => {
  const { addColorPalette, getColorPalette, removeColorPalette } = usePaletteList();

  const {
    data: colorPaletteList,
    isLoading: isLoadingColorPaletteList,
    mutate: mutateColorPaletteList,
  } = useSWR('colorPalette', () => getColorPalette());

  return {
    addColorPalette,
    removeColorPalette,
    colorPaletteList,
    isLoadingColorPaletteList,
    mutateColorPaletteList,
  };
};
