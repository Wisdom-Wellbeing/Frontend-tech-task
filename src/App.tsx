import { MoodTrackerCard } from "./components/MoodTrackerCard/MoodTrackerCard";

export default function App() {

  return (
    <div className="h-screen w-screen flex justify-center py-6">
      <div>
        <h1 className="text-2xl font-semibold">Mood Tracker</h1>
        <MoodTrackerCard />
      </div>
    </div>
  );
}