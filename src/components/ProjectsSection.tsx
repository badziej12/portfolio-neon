import { ExitButton } from "./ExitButton";
import { ProjectsSectionItem } from "./ProjectsSectionItem";

export const ProjectsSection = () => {

    const projects = [
        {
            imageSrc: "/portfolio-neon/assets/images/projects/window-blind-icon.svg",
            imageAlt: "Lech-System icon",
            heading: "Lech-System",
            description: "Strona internetowa firmy Lech-System, zajmującej się produkcją rolet, moskitier i żaluzji. Strona została wykonana przy użyciu technologii takich jak React i Next.js.",
        },
        {
            imageSrc: "/portfolio-neon/assets/images/projects/ski-icon.svg",
            imageAlt: "Narty w Appeninach icon",
            heading: "Narty w Appeninach",
            description: "Strona kontaktowa dla organizotra wyjazdów na narty w Apeninach. Została wykonana przy użyciu HTML, CSS i JavaScript.",
        }
    ]

    return (
        <div className="projects-section">
            <div className="projects-section__content">
                {projects.map((project) => (
                    <ProjectsSectionItem
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