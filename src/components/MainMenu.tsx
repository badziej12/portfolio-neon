import { FC } from "react";
import { MainMenuItem } from "./MainMenuItem"

type MainMenuProps = {
    onScreenChange: (screen: string) => void;
}

export const MainMenu:FC<MainMenuProps> = ({onScreenChange}) => {
    const menuItems = [
        {
            title: "Contact",
            image: "/assets/images/contact-menu-item.png",
            imageAlt: "Contact",
            screenName: "contact",
        },
        {
            title: "About",
            image: "/assets/images/about-menu-item.png",
            imageAlt: "About",
            screenName: "about",
        },
        {
            title: "Projects",
            image: "/assets/images/projects-menu-item.png",
            imageAlt: "Projects",
            screenName: "projects",
        }
    ]
    
    return (
        <div className="main-menu">
            <div className="main-menu__content">
                {menuItems.map((item) => (
                    <MainMenuItem key={item.title} title={item.title} image={item.image} imageAlt={item.imageAlt} screenName={item.screenName} onScreenChange={onScreenChange} />
                ))}
            </div>
        </div>
    )
}