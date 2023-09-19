import { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { v4 as uuid } from 'uuid';

import { useDiPaletteList } from '../../hooks/useDiPaletteList';
import { ColorList, ColorPalette } from '../../types/ColorPalette';
import { ButtonComponent } from '../general/ButtonComponent';
import { ColorOption } from '../general/ColorOption';

export const InputForm = () => {
  const { addColorPalette, mutateColorPaletteList } = useDiPaletteList();

  const isSubmitLoading = useRef<boolean>(false);

  const { handleSubmit, reset, register, control, setValue, formState } = useForm<ColorPalette>({
    defaultValues: {
      color: 'blue',
      id: uuid(),
      tag: '',
    },
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<ColorPalette> = async (data: ColorPalette) => {
    if (isSubmitLoading.current) return;
    isSubmitLoading.current = true;
    await addColorPalette(data);
    await mutateColorPaletteList();

    // resetして値を新規で作成する。
    reset();
    setValue('id', uuid());
    isSubmitLoading.current = false;
  };

  return (
    <>
      <form
        className="flex w-full flex-col gap-5 rounded-md border border-slate-300 bg-white p-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col items-start">
          <label htmlFor="tag" className="text-lg">
            タグ名
          </label>
          <input
            id="tag"
            type="text"
            className="w-full border p-2 text-lg outline-1"
            placeholder="タグ名　最大文字数10文字"
            {...register('tag', {
              required: { value: true, message: '設定項目は必須です。' },
              maxLength: {
                value: 10,
                message: '最大文字数は20文字です。',
              },
            })}
          />
          <span className="h-4 w-full text-left text-xs text-red-500">
            {errors.tag ? errors.tag.message : ''}
          </span>
        </div>
        <div className="flex w-full flex-col items-start">
          <label htmlFor="color" className="text-lg">
            カラー
          </label>
          <Controller
            name="color"
            control={control}
            render={({ field }) => (
              <div className="flex w-full flex-row justify-around rounded-md bg-slate-200 py-3">
                {Object.keys(ColorList).map((value) => (
                  <ColorOption
                    color={`${ColorList[value as keyof typeof ColorList]}`}
                    active={field.value == value}
                    onClick={() => field.onChange(value)}
                  />
                ))}
              </div>
            )}
          />
          <span className="h-4 w-full text-left text-xs text-red-500">
            {errors.color ? errors.color.message : ''}
          </span>
        </div>
        <ButtonComponent label="追加" />
      </form>
    </>
  );
};
