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
    const [moodMessage, setMoodMessage] = useState<string>()
    const {moods} = moodsJson

    const handleClickMoodTracker = (mood: Mood) => {
        setHasLoggedMood(true);
        setMoodMessage(mood.message)
    };

  return (
    <div className="rounded-xl shadow-xl p-6 space-y-4 md:w-[650px]">
        <h2 className="text-xl italic font-medium">{hasLoggedMood ? "You have logged your mood today!" : "How are you feeling today?"}</h2>
       {moodMessage && hasLoggedMood ? <p>{moodMessage}</p> :
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