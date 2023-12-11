import "../index.css";
type Props = {
  isShown: boolean;
  setIsShown: (e: any) => void;
};

export const ToastNotification = (props: Props) => {
  return (
    <div
      onAnimationEnd={props.setIsShown}
      className={`w-fit p-6 sm:p-10 py-4  fixed  rounded-2xl bg-[#f1f1f1]  shadow-lg shadow-slate-200 sm:text-lg  text-md z-50 mr-6 sm:translate-x-[-50%] sm:left-[50%] ${
        props.isShown ? "notification" : ""
      }`}
    >
      Your form has been submited. We will contact you as soon as possile! 🎉
    </div>
  );
};
