export interface ClassType {
  img: JSX.Element;
  name: string;
  description?: string;
}

export const Class = ({ img, name, description }: ClassType) => {
  const overlayStyle = `absolute opacity-0 transition duration-300 hover:opacity-90 flex flex-col 
  items-center p-10 bg-primary-500 bottom-0 top-0 justify-center gap-4`;
  return (
    <div className="relative">
      <div className={overlayStyle}>
        <p className="font-bold">{name}</p>
        <p className="text-sm">{description}</p>
      </div>
      <div className="w-[385px]">{img}</div>
    </div>
  );
};
