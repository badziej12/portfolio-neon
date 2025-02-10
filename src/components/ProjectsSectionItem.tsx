import { FC } from "react";
import Image from "next/image";

type ProjectsSectionItemProps = {
    imageSrc: string;
    imageAlt: string;
    heading: string;
    description: string;
}

export const ProjectsSectionItem: FC<ProjectsSectionItemProps> = ({ imageSrc, imageAlt, heading, description }) => {
    return (
        <div className="projects-section-item">
            <div className="projects-section-item__icon-box">
                <Image src={imageSrc} alt={imageAlt} width={40} height={40} />
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
    )
}