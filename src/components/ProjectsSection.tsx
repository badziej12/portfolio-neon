import { ExitButton } from "./ExitButton";
import { ProjectsSectionItem } from "./ProjectsSectionItem";
import windowBlindIcon from "../../public/assets/images/projects/window-blind-icon.svg";
import skiIcon from "../../public/assets/images/projects/ski-icon.svg";
import portfolioIcon from "../../public/assets/images/projects/portfolio-icon.svg";
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
            imageSrc: skiIcon,
            imageAlt: "Skiing in the Apennines icon",
            heading: "Skiing in the Apennines",
            description: "A contact page for an organizer of ski trips to the Apennines. It was built using HTML, CSS, and JavaScript.",
            projectUrl: "https://github.com/badziej12/narty-w-ape",
        },
    ]

    return (
        <div style={{display: isCompletedLoading ? "flex" : "none"}} className="projects-section">
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