import { ReactElement } from "react";
import faceIconLow from "../assets/faces/face-low.svg"
import faceIconSad from "../assets/faces/face-sad.svg"
import faceIconOkay from "../assets/faces/face-okay.svg"
import faceIconGood from "../assets/faces/face-good.svg"
import faceIconGreat from "../assets/faces/face-great.svg"

export const moodFace = (moodId: number): ReactElement | null => {
    let icon = null;

    switch (moodId) {
        case 1:
            icon = faceIconLow;
            break;
        case 2:
            icon = faceIconSad;
            break;
        case 3:
            icon = faceIconOkay;
            break;
        case 4:
            icon = faceIconGood;
            break;
        case 5:
            icon = faceIconGreat;
            break;
        default:
            icon = null;
            break;
    }

    if(!icon) {
        return null;
    }

    return <img alt="mood-face" src={icon} />;
  };