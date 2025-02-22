# Portfolio Neon

Portfolio Neon is a portfolio website created to contact me and provide information about me. It includes a contact form, an about section, and projects that I have created. The project is hosted on Vercel at [portfolio-neon-ashen-eta.vercel.app](https://portfolio-neon-ashen-eta.vercel.app).

## Description

This is a one-page website that displays the appropriate section components using the `ScreenSwitcher` component. The website contains four sections:
- **MainMenu**: The initial section used for navigation.
- **AboutSection**: The about me section.
- **ProjectsSection**: The section with my projects.
- **ContactForm**: The section with the contact form.

The website includes a loading system contained in the `LoadingContext`, which allows fully loaded views to be displayed at once.

## Getting Started

To install and run the project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/badziej12/portfolio-neon.git
    cd portfolio-neon
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the project in development mode:
    ```sh
    npm run dev
    ```

4. Open your browser and go to `http://localhost:3000`.

## Usage

### Components

#### ScreenSwitcher

The `ScreenSwitcher` component displays the appropriate section based on the currently selected screen.

```tsx
import { ScreenSwitcher } from "@/components/ScreenSwitcher";

<ScreenSwitcher>
    <MainMenu key="main-menu" />
    <AboutSection key="about" />
    <ProjectsSection key="projects" />
    <ContactForm key="contact" />
</ScreenSwitcher>
```

#### MainMenu

The `MainMenu` component displays the main menu with navigation options to different sections.

```tsx
import { MainMenu } from "@/components/MainMenu";

<MainMenu />
```

#### AboutSection

The `AboutSection` component displays information about me.

```tsx
import { AboutSection } from "@/components/AboutSection";

<AboutSection />
```

#### ProjectsSection

The `ProjectsSection` component displays a list of my projects.

```tsx
import { ProjectsSection } from "@/components/ProjectsSection";

<ProjectsSection />
```

#### ContactForm

The `ContactForm` component displays a contact form.

```tsx
import { ContactForm } from "@/components/ContactForm";

<ContactForm />
```

## Project Structure

```
portfolio-neon/
├── public/
│   └── assets/
│       └── images/
│           └── gameboy/
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── ContactForm.tsx
│   │   ├── MainMenu.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProjectsSectionItem.tsx
│   │   ├── ScreenSwitcher.tsx
│   │   └── ...
│   ├── context/
│   │   ├── LoadingContext.tsx
│   │   └── ScreenContext.tsx
│   ├── pages/
│   │   ├── index.tsx
│   │   └── api/
│   │       └── email.ts
│   ├── styles/
│   │   └── component/
│   │       └── about-section.scss
│   └── ...
├── .eslintrc.json
├── next.config.js
├── package.json
└── README.md
```

## Requirements

- Node.js v14 or newer
- npm v6 or newer

## Authors

- [Błazej Tondel](https://github.com/badziej12)


