import { useFirstLoad } from "@/context/ScreenContext";
import { MainMenuItem } from "./MainMenuItem"

export const MainMenu = () => {
    const { isFirstLoad } = useFirstLoad();

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
    ];
    
    return (
        <div className={`main-menu ${isFirstLoad ? "main-menu--first-load" : ""}`}>
            <div className="main-menu__content">
                {menuItems.map((item) => (
                    <MainMenuItem key={item.title} title={item.title} image={item.image} imageAlt={item.imageAlt} screenName={item.screenName} />
                ))}
            </div>
        </div>
    )
}