type Props = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const ButtonComponent = ({ label, onClick, disabled = false }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex w-full items-center justify-center rounded-lg bg-blue-400 py-2 text-lg text-slate-100"
    >
      {label}
    </button>
  );
};
