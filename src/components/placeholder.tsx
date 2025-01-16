import { LucideCircleAlert, LucideProps } from "lucide-react";
import { cloneElement } from "react";

type PlaceHolderProps = {
  message: string;
  icon?: React.ReactElement<LucideProps>;
  button?: React.ReactNode;
};

const PlaceHolder = ({
  message,
  icon = <LucideCircleAlert />,
  button = null,
}: PlaceHolderProps) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-4 ">
      {cloneElement(icon, { className: "w-12 h-12" })}
      <p className="text-lg text-gray-500">{message}</p>
      {button}
    </div>
  );
};

export { PlaceHolder };
