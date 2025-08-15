import { ReactElement} from "react";

export type IconProps = {
  icon: ReactElement | null;
};

export const Icon = ({ icon }: IconProps) => {

  if(!icon) {
    return null;
  };
  
  return (
    <div className="flex flex-col items-center w-12">
      <div className="inline-flex justify-center items-center w-full h-12 w-12 drop-shadow-md rounded-full bg-white">
        {icon}
      </div>
    </div>
  );
};
