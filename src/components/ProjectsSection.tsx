import { ExitButton } from "./ExitButton";
import { ProjectsSectionItem } from "./ProjectsSectionItem";
import windowBlindIcon from "../../public/assets/images/projects/window-blind-icon.svg";
import skiIcon from "../../public/assets/images/projects/ski-icon.svg";
import { useLoading } from "@/context/LoadingContext";

export const ProjectsSection = () => {
    const { loadRefs, isCompletedLoading } = useLoading();

    const projects = [
        {
            imageSrc: windowBlindIcon,
            imageAlt: "Lech-System icon",
            heading: "Lech-System",
            description: "Strona internetowa firmy Lech-System, zajmującej się produkcją rolet, moskitier i żaluzji. Strona została wykonana przy użyciu technologii takich jak React i Next.js.",
        },
        {
            imageSrc: skiIcon,
            imageAlt: "Narty w Appeninach icon",
            heading: "Narty w Appeninach",
            description: "Strona kontaktowa dla organizotra wyjazdów na narty w Apeninach. Została wykonana przy użyciu HTML, CSS i JavaScript.",
        }
    ]

    return (
        <div style={{display: isCompletedLoading ? "block" : "none"}} className="projects-section">
            <div className="projects-section__content">
                {projects.map((project) => (
                    <ProjectsSectionItem
                        ref={(el) => {
                            if (el && !loadRefs.current.includes(el)) {
                                loadRefs.current.push(el);
                            }
                        }}
                        key={project.heading} 
                        imageSrc={project.imageSrc} 
                        imageAlt={project.imageAlt} 
                        heading={project.heading} 
                        description={project.description} 
                    /> 
                ))}
            </div>
            <ExitButton />
        </div>
    )
}