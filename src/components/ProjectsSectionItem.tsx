import { forwardRef } from "react";
import Image, { StaticImageData } from "next/image";
import { useLoading } from "@/context/LoadingContext";

type ProjectsSectionItemProps = {
    imageSrc: StaticImageData;
    imageAlt: string;
    heading: string;
    description: string;
    projectUrl: string;
}

export const ProjectsSectionItem = forwardRef<HTMLDivElement, ProjectsSectionItemProps>(({ imageSrc, imageAlt, heading, description, projectUrl }, ref) => {
    const { handleItemLoading } = useLoading();

    return (
        <a href={projectUrl} target="_blank" rel="noopener nofollow">
            <div ref={ref} className="projects-section-item">
                <div className="projects-section-item__icon-box">
                    <Image src={imageSrc} alt={imageAlt} width={40} height={40} priority={true} onLoadingComplete={handleItemLoading} />
                </div>
                <div className="projects-section-item__description-box">
                    <div className="projects-section-item__description-box__container">
                        <div className="projects-section-item__description-box__content">
                            <span className="projects-section-item__description-box__decoration projects-section-item__description-box__decoration--up-left-corner"></span>
                            <span className="projects-section-item__description-box__decoration projects-section-item__description-box__decoration--down-left-corner"></span>
                            <span className="projects-section-item__description-box__decoration projects-section-item__description-box__decoration--right-corner"></span>
                            <div className="projects-section-item__text">
                                <h2>{heading}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
        
    )
});

ProjectsSectionItem.displayName = "ProjectsSectionItem";