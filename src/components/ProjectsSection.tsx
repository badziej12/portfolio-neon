import { ExitButton } from "./ExitButton";
import { ProjectsSectionItem } from "./ProjectsSectionItem";
import windowBlindIcon from "../../public/assets/images/projects/window-blind-icon.svg";
import skiIcon from "../../public/assets/images/projects/ski-icon.svg";
import portfolioIcon from "../../public/assets/images/projects/portfolio-icon.svg";
import reduxCartIcon from "../../public/assets/images/projects/redux-cart-icon.svg";
import reactFoodIcon from "../../public/assets/images/projects/food-app-icon.svg";
import placePickerIcon from "../../public/assets/images/projects/placepicker-icon.svg";
import quizAppIcon from "../../public/assets/images/projects/quizapp-icon.svg";
import { useLoading } from "@/context/LoadingContext";
import projectBoxImg from "../../public/assets/images/projects/project-box.svg";
import projectBoxImgHovered from "../../public/assets/images/projects/project-box-hovered.svg";
// import decoration1Img from "../../public/assets/images/projects/decoration-1.svg";
// import decoration2Img from "../../public/assets/images/projects/decoration-2.svg";

export const ProjectsSection = () => {
    const { isCompletedLoading } = useLoading();

    const projects = [
        {
            imageSrc: portfolioIcon,
            imageAlt: "Portfolio icon",
            heading: "Portfolio",
            description: "A portfolio website that you are currently visiting. The website was built using technologies such as React and Next.js.",
            projectUrl: "https://github.com/badziej12/portfolio-neon",
        },
        {
            imageSrc: windowBlindIcon,
            imageAlt: "Lech-System icon",
            heading: "Lech-System",
            description: "A website for Lech-System, a company specializing in the production of roller blinds, mosquito nets, and shutters. The website was built using technologies such as React and Next.js.",
            projectUrl: "https://github.com/badziej12/lech-system-next",
        },
        {
            imageSrc: reduxCartIcon,
            imageAlt: "ReduxCart icon",
            heading: "ReduxCart",
            description: "simple React shopping cart application that demonstrates the use of Redux Toolkit for state management, asynchronous actions for remote data storage, and modular React component structure.",
            projectUrl: "https://github.com/badziej12/redux-cart",
        },
        {
            imageSrc: reactFoodIcon,
            imageAlt: "React Food icon",
            heading: "React Food",
            description: "A full-stack food ordering application built with React for the frontend and Node.js for the backend. The app allows users to browse a list of meals, add items to a cart, and place orders.",
            projectUrl: "https://github.com/badziej12/food-manage-app",
        },
        {
            imageSrc: quizAppIcon,
            imageAlt: "Quiz App icon",
            heading: "Quiz App",
            description: "A simple interactive quiz application built with React and Vite.",
            projectUrl: "https://github.com/badziej12/quiz-app",
        },
        {
            imageSrc: placePickerIcon,
            imageAlt: "PlacePicker icon",
            heading: "PlacePicker",
            description: "PlacePicker is a React application that allows users to create a personal collection of places they would like to visit or have visited.",
            projectUrl: "https://github.com/badziej12/narty-w-ape",
        },
        {
            imageSrc: skiIcon,
            imageAlt: "Skiing in the Apennines icon",
            heading: "Skiing in the Apennines",
            description: "A contact page for an organizer of ski trips to the Apennines. It was built using HTML, CSS, and JavaScript.",
            projectUrl: "https://github.com/badziej12/narty-w-ape",
        },
    ]

    return (
        <div style={{ display: isCompletedLoading ? "flex" : "none" }} className="projects-section">
            <ExitButton />
            <div className="projects-section__content">
                {projects.map((project) => (
                    <ProjectsSectionItem
                        key={project.heading}
                        imageSrc={project.imageSrc}
                        imageAlt={project.imageAlt}
                        heading={project.heading}
                        description={project.description}
                        projectUrl={project.projectUrl}
                        projectBoxImg={projectBoxImg}
                        projectBoxImgHover={projectBoxImgHovered}
                    />
                ))}
            </div>
        </div>
    )
}