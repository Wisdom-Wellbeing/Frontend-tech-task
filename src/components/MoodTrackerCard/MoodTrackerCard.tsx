import { useState } from "react";
import moodsJson from "../../data/moodTracker.json"
import { moodFace } from "../../utils/faces";
import { IconButton } from "../IconButton/IconButton";

interface Mood {
    id: number;
    label: string;
    message: string;
}

export const MoodTrackerCard = () => {
    const [hasLoggedMood, setHasLoggedMood] = useState(false);
    const [selectedMood, setSelectedMood] = useState<Mood>();
    const {moods} = moodsJson

    const handleClickMoodTracker = (mood: Mood) => {
        setHasLoggedMood(true);
        setSelectedMood(mood)
    };

    const getTitle = () => {
      if(hasLoggedMood && selectedMood) {
        return `You are feeling ${selectedMood?.label.toLowerCase()} today!`
      };
      return "How are you feeling today?"
    }

  return (
    <div className="rounded-xl shadow-xl p-6 space-y-4 md:w-[650px]">
        <h2 className="text-xl italic font-medium">{getTitle()}</h2>
       {selectedMood && hasLoggedMood ? <p>{selectedMood.message}</p> :
       <div className="flex items-center justify-between gap-4">
            {moods.map((mood) => <IconButton
              key={mood.id}
              ariaLabel={mood.label}
              icon={moodFace(mood.id)}
              handleClick={() => handleClickMoodTracker(mood)}
            />)}
        </div>}
    </div>
  );
}