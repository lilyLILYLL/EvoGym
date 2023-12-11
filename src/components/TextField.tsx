type Props = {
  textarea?: boolean;
  type?: "text" | "email" | "number";
  placeholder: string;
  textClassName?: string;
  containerClassName?: string;
  errorMessage?: string;
  onChange?: (e?: any) => void;
  value: string;
};

export const TextField = ({
  textarea,
  type,
  placeholder,
  containerClassName,
  textClassName,
  errorMessage,
  ...props
}: Props) => {
  return (
    <div className={containerClassName}>
      {/* TEXTAREA */}
      {textarea ? (
        <textarea
          placeholder="MESSAGE"
          className="w-full py-2 pl-4 text-white rounded-lg bg-primary-300 placeholder:text-white h-[100px] "
          {...props}
        />
      ) : (
        // TEXT INPUT
        <input
          placeholder={placeholder}
          className={`w-full py-2 pl-4 text-white rounded-lg bg-primary-300 placeholder:text-white outline-none ${textClassName}`}
          type={type}
          {...props}
        />
      )}
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};
