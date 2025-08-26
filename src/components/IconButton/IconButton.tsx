import { ReactElement } from "react";

type IconButtonPropsForIcon = {
  ariaLabel?: string;
  icon: ReactElement | null;
  handleClick: Function;
};

export const IconButton = ({ ariaLabel, icon, handleClick }: IconButtonPropsForIcon) => {

  if(!icon) {
    return null;
  }

  return (
    <button className="h-full" aria-label={ariaLabel} onClick={() => handleClick()}>
      <div className="flex flex-col items-center w-12">
        <div className="inline-flex justify-center items-center w-full h-12 w-12 drop-shadow-md rounded-full bg-white">
          {icon}
        </div>
      </div>
    </button>
  );
};