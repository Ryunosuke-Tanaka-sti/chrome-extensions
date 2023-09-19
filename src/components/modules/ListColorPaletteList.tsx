import { useRef } from 'react';

import { RxCross1, RxTrash } from 'react-icons/rx';

import { useDiPaletteList } from '../../hooks/useDiPaletteList';
import { ColorList } from '../../types/ColorPalette';
import { ColorOption } from '../general/ColorOption';

export const ListColorPaletteList = () => {
  const {
    colorPaletteList,
    isLoadingColorPaletteList,
    removeColorPalette,
    mutateColorPaletteList,
  } = useDiPaletteList();
  const isDeleteLoading = useRef<boolean>(false);

  const onClickDelete = async (uid: string) => {
    if (isDeleteLoading.current) return;
    isDeleteLoading.current = true;
    await removeColorPalette(uid);
    await mutateColorPaletteList();
    isDeleteLoading.current = false;
  };

  if (isLoadingColorPaletteList || !colorPaletteList) return <span>Loading</span>;
  return (
    <>
      <table className="w-full table-auto border-separate border-slate-300 bg-white p-2 text-xs">
        <thead className="">
          <tr>
            <th className="w-3/4 border bg-blue-100">タグ</th>
            <th className="border bg-blue-100">色</th>
            <th className="border bg-blue-100">
              <RxTrash className="m-auto h-4 w-4" />
            </th>
          </tr>
        </thead>
        <tbody>
          {colorPaletteList.map((value) => (
            <tr key={value.id} className="col-auto">
              <td className="border px-2 text-left">{value.tag}</td>
              <td className="border">
                <ColorOption color={`${ColorList[value.color as keyof typeof ColorList]}`} />
              </td>
              <td className="border">
                <RxCross1
                  onClick={() => onClickDelete(value.id)}
                  className="m-auto h-4 w-4 hover:cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
