# Animated Portfolio Landing Page

This is a React-based animated landing page / portfolio-style site, built as a playground to explore CSS animations and interactive UI effects.

Live demo (with personalized content): [https://jasminleinonen.onrender.com/](https://jasminleinonen.onrender.com/)

## Features

- Built with React (Vite)
- Custom CSS animations (flowers, bees, moon, stars night/day mode.)
- Responsive UI
- All personal content is separated from components for easy customization

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/demo-user/react-animated-landing-page.git
   cd react-animated-landing-page
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the development server:**
   ```sh
   npm run dev
   ```

## Customizing Your Content

All site content (title, hero text, contact info, project list, etc.) is defined in [`src/content/content.js`](src/content/content.js).

To add your own information:

1. Open `src/content/content.js`
2. Edit the `siteContent` object fields:
   - `title`: The page title (shown in browser tab)
   - `hero.title`: Main heading
   - `contact`: Your GitHub, email, etc.
   - `projects`: List your own projects (title, description, links)
   - `projectsSection.heading`: Section heading for projects
3. Save and refresh the page to see your changes.
