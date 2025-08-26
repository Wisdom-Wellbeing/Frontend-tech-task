import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MoodTrackerCard } from "./MoodTrackerCard";
import moodsJson from "../../data/moodTracker.json";

jest.mock("../../utils/faces", () => ({
  moodFace: (id: number) => <span data-testid={`mood-icon-${id}`}>mood-{id}</span>,
}));

describe("MoodTrackerCard", () => {
  it("renders initial mood prompt and all mood icon buttons", () => {
    render(<MoodTrackerCard />);

    expect(screen.getByText("How are you feeling today?")).toBeInTheDocument();
    moodsJson.moods.forEach((mood) => {
      expect(screen.getByLabelText(mood.label)).toBeInTheDocument();
    });
  });

  it("renders the right title and mood message after clicking a mood", () => {
    render(<MoodTrackerCard />);

    const button = screen.getByRole("button" , {name: "Low"});

    fireEvent.click(button);
    expect(screen.getByText("You are feeling low today!")).toBeInTheDocument();
    expect(screen.getByText("It's okay to have off days. Take it slow today.")).toBeInTheDocument();

    // Check that initial mood prompt and mood icon buttons are replaced
    expect(screen.queryByText("How are you feeling today?")).not.toBeInTheDocument();
    moodsJson.moods.forEach((mood) => {
      expect(screen.queryByLabelText(mood.label)).not.toBeInTheDocument();
    });
  });
});
