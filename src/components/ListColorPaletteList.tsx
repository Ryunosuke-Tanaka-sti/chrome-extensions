import { useDiPaletteList } from '../hooks/useDiPaletteList';

export const ListColorPaletteList = () => {
  const { colorPaletteList, isLoadingColorPaletteList } = useDiPaletteList();

  if (isLoadingColorPaletteList || !colorPaletteList) return <span>Loading</span>;
  return (
    <>
      {colorPaletteList.map((value) => (
        <div key={value.id}>
          {value.tag}/{value.color}
        </div>
      ))}
    </>
  );
};
