export const ColorOption = ({
  color,
  onClick,
  active = false,
}: {
  color: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={
        'w-8 h-8 rounded-full ' +
        (active ? ' ring-4 ring-white ' : ' ') +
        (onClick ? ' hover:cursor-pointer ' : '') +
        color
      }
    />
  );
};
