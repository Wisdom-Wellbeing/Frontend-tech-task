# Frontend Tech Task for Junior and Middleweight Developer Role

All candidates are required to complete this task as part of our technical assessment process. While we understand your time is valuable and the timeframe may be limited, we encourage you to focus on demonstrating your approach rather than aiming for a fully polished solution.

If you're unable to complete certain parts of the task, please highlight these areas in your project’s README file so we know what you would have done with more time.

You’re free to choose which aspects of the solution you want to emphasize, but here are a few key areas we’ll be looking at:

- Demonstration of Test-Driven Development (TDD)
- Use of modern React and software development best practices
- Effective use of TypeScript
- Attention to detail
- Problem-solving skills

We value the development process as much as the final outcome. Please commit early and often so we can follow your thought process and progression. Your final submission should be a Git repository containing your solution, ideally hosted on your personal GitHub account.

# The Task

HA | Wisdom Wellbeing is focused on offering tools and services to our clients to support their physical and mental wellbeing with one of our features being the Resource Center. For this task, we would like you to create a single page application that displays different resources grouped by their category.

Resources should be grouped by their category on the page on first load. Each resource can only belong to one of the following categories

- Podcasts
- Articles
- Newsletters
- Recipes
- Fitness
- Meditation

## Functionality
Display the grouped resources, each with

- Title
- Thumbnail Image
- Tags: not more than 3
- Read/watch time in minutes

Please add at least two of the following features:

- When a user clicks on a resource, display all the resource data including the description and date uploaded
- Sort the cards by category/date
- Filter by title/tags

# The Data

For this task, you are not required to integrate with an external API. Instead, please use mock data to simulate the dataset. Below is an example of a JSON structure you may consider for representing the resources. However, you are welcome to define your own structure if you believe a different format would be more suitable.

```
[
    {
      "id": "001",
      "category": "Podcasts",
      "title": "Mindful Moments",
      "thumbnail": "https://www.datocms-assets.com/93767/1753971746-photo.jpg",
      "tags": ["wellbeing", "mindfulness", "relaxation"],
      "duration": 25,
      "description": "A calming podcast focused on mindfulness techniques for daily life.",
      "date_uploaded": "2025-07-10"
    },
    {
      "id": "002",
      "category": "Articles",
      "title": "The Science of Sleep",
      "thumbnail": "https://www.datocms-assets.com/93767/1751891809-photo.jpg",
      "tags": ["wellbeing", "sleep", "science"],
      "duration": 8,
      "description": "Explore the latest research on how sleep affects mental and physical health.",
      "date_uploaded": "2025-06-22"
    },
    {
      "id": "003",
      "category": "Newsletters",
      "title": "Wellness Weekly",
      "thumbnail": "https://www.datocms-assets.com/93767/1753971221-photo.jpg",
      "tags": ["community", "tips", "mindfulness"],
      "duration": 5,
      "description": "Your weekly dose of wellness tips and updates from our experts.",
      "date_uploaded": "2025-08-01"
    },
    {
      "id": "004",
      "category": "Recipes",
      "title": "Energy Boost Smoothie",
      "thumbnail": "https://www.datocms-assets.com/93767/1755147783-smoothie.jpg",
      "tags": ["nutrition", "energy", "tips"],
      "duration": 10,
      "description": "A quick and nutritious smoothie recipe to kickstart your day.",
      "date_uploaded": "2025-07-15"
    },
    {
      "id": "005",
      "category": "Fitness",
      "title": "10-Minute Morning Stretch",
      "thumbnail": "https://www.datocms-assets.com/93767/1753972252-photo.jpg",
      "tags": ["mobility", "energy", "routine"],
      "duration": 10,
      "description": "A short and effective stretching routine to energize your mornings.",
      "date_uploaded": "2025-08-05"
    },
    {
      "id": "006",
      "category": "Meditation",
      "title": "Guided Meditation for Stress Relief",
      "thumbnail": "https://www.datocms-assets.com/93767/1753971468-photo.jpg",
      "tags": ["relaxation", "routine", "sleep"],
      "duration": 15,
      "description": "A soothing guided meditation to help you unwind and reduce stress.",
      "date_uploaded": "2025-07-28"
    }
  ]
```

# Next Stage

Once you’ve completed the task, please upload your solution to a GitHub repository and share the link with us via email.

We’ll review your submission as soon as possible. If you progress to the next stage, your solution will serve as the foundation for the technical part of the final interview.

The technical part of your final interview will be in two stages

## Stage 1

You will talk us through your solution, including the areas you would have covered given more time and how you would have approached those areas. This will give us insights on how well you communicate your solutions and your approach to writing code

## Stage 2

As part of the next stage, we’ll share a new requirement with you based on an existing codebase. This will be a pair programming exercise focused on a real user story, and it may involve some live coding.

We’ll be looking for your ability to break down the story into manageable tasks while ensuring the acceptance criteria are met. This exercise is designed to give us insight into how you collaborate with others and how well you understand and interpret user stories.
