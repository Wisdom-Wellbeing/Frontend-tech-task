import { ReactElement } from "react";
import { Icon } from "../Icon/Icon";

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
      <Icon icon={icon} />
    </button>
  );
};