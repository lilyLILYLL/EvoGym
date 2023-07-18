import { LearnMoreButton } from "./LearnMoreButton";
export interface BenefitType {
  icon: JSX.Element;
  label: string;
  description: string;
}

export const BenefitCard = ({ icon, label, description }: BenefitType) => {
  return (
    <div className="mt-10 mr-3 border-2 border-gray-100 border-solid rounded-md ">
      <div className="flex flex-col items-center gap-3 px-5 py-14">
        <div className="p-3 border-2 rounded-full bg-primary-100 border-gray-50">
          {icon}
        </div>

        <p className="font-bold">{label}</p>
        <p className="text-sm">{description}</p>
        <LearnMoreButton />
      </div>
    </div>
  );
};
