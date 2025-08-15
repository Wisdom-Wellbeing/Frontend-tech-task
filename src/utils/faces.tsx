import { ReactElement } from "react";
import { ReactComponent as FaceIconLow} from "../assets/faces/face-low.svg"
import { ReactComponent as FaceIconSad} from "../assets/faces/face-sad.svg"
import { ReactComponent as FaceIconOkay} from "../assets/faces/face-okay.svg"
import { ReactComponent as FaceIconGood} from "../assets/faces/face-good.svg"
import { ReactComponent as FaceIconGreat} from "../assets/faces/face-great.svg"

export const moodFace = (moodId: number): ReactElement | null => {
    let Icon = null;

    switch (moodId) {
        case 1:
            Icon = FaceIconLow;
            break;
        case 2:
            Icon = FaceIconSad;
            break;
        case 3:
            Icon = FaceIconOkay;
            break;
        case 4:
            Icon = FaceIconGood;
            break;
        case 5:
            Icon = FaceIconGreat;
            break;
        default:
            Icon = null;
            break;
    }

    if(!Icon) {
        return null;
    }

    return <Icon width="50" height="50" />;
  };