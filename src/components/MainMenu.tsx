import { MainMenuItem } from "./MainMenuItem"

export const MainMenu = () => {
    const menuItems = [
        {
            title: "Contact",
            image: "/assets/images/contact-menu-item.png",
            imageAlt: "Contact"
        },
        {
            title: "About",
            image: "/assets/images/about-menu-item.png",
            imageAlt: "About"
        },
        {
            title: "Projects",
            image: "/assets/images/projects-menu-item.png",
            imageAlt: "Projects"
        }
    ]
    
    return (
        <div className="main-menu">
            <div className="main-menu__content">
                {menuItems.map((item) => (
                    <MainMenuItem key={item.title} title={item.title} image={item.image} imageAlt={item.imageAlt} />
                ))}
            </div>
        </div>
    )
}