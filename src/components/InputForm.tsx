import { useRef, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { useDiPaletteList } from '../hooks/useDiPaletteList';
import { ColorList, ColorPalette } from '../types/ColorPalette';

export const InputForm = () => {
  const { addColorPalette, mutateColorPaletteList } = useDiPaletteList();

  const [color, setColor] = useState<keyof typeof ColorList>('blue');
  const isSubmitLoading = useRef<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitLoading.current) return;

    const form = new FormData(e.currentTarget);
    const tag = form.get('tag');
    const color = form.get('color');

    // undefinedガード
    if (!tag || !color) return;

    const id = uuid();
    const submitData: ColorPalette = {
      id: id,
      tag: tag as string,
      color: form.get('color') as keyof typeof ColorList,
    };
    isSubmitLoading.current = true;
    await addColorPalette(submitData);
    await mutateColorPaletteList();

    const keys = [];
    for (const key of form.keys()) {
      keys.push(key);
    }
    for (const idx in keys) {
      form.delete(keys[idx]);
    }

    isSubmitLoading.current = false;
  };
  const handleOnChangeSelect = (value: React.ChangeEvent<HTMLSelectElement>) => {
    const color: keyof typeof ColorList = value.target.value as keyof typeof ColorList;
    setColor(color);
  };
  return (
    <form className="flex flex-row" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="tag">タグ名</label>
        <input id="tag" name="tag" type="text" required />
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <select
          name="color"
          id="color"
          onChange={handleOnChangeSelect}
          className={`${ColorList[color]}`}
          defaultValue={'blue'}
        >
          {Object.keys(ColorList).map((value) => (
            <option
              key={value}
              value={value}
              className={`${ColorList[value as keyof typeof ColorList]}`}
            >
              {value}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">追加</button>
    </form>
  );
};
