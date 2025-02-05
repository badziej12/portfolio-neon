import Image from "next/image"

type MainMenuItemProps = {
    title: string;
    image: string;
    imageAlt: string;
}

export const MainMenuItem = ({title, image, imageAlt}: MainMenuItemProps) => {
    
    return (
        <div className="main-menu-item">
            <div className="main-menu-item__content">
                <Image src={image} alt={imageAlt} width={300} height={300} />
                <h2>{title}</h2>
            </div>
        </div>
    )
}