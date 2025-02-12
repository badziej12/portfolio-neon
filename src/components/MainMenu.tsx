import { useFirstLoad } from "@/context/ScreenContext";
import { MainMenuItem } from "./MainMenuItem";
import Slider, { CustomArrowProps } from "react-slick";

const NextArrow = (props: CustomArrowProps) => {
    const {className, style, onClick} = props;

    return (
        <div className={`${className} main-menu__arrow main-menu__arrow--next`} onClick={onClick} />
    )
}

export const MainMenu = () => {
    const { isFirstLoad } = useFirstLoad();

    const menuItems = [
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
        },
        {
            title: "Contact",
            image: "/assets/images/contact-menu-item.png",
            imageAlt: "Contact",
            screenName: "contact",
        },
    ];

    const menuItemsDesktop = [
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
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
      };
    
    return (
        <div className={`main-menu ${isFirstLoad ? "main-menu--first-load" : ""}`}>
            <div className={`main-menu__content ${isFirstLoad ? "main-menu__content--first-load" : ""}`}>
                <Slider {...settings}>
                    {menuItems.map((item) => (
                        <MainMenuItem key={item.title} title={item.title} image={item.image} imageAlt={item.imageAlt} screenName={item.screenName} />
                    ))}
                </Slider>
                <div className="main-menu__desktop">
                    {menuItemsDesktop.map((item) => (
                        <MainMenuItem key={item.title} title={item.title} image={item.image} imageAlt={item.imageAlt} screenName={item.screenName} />
                    ))}
                </div>
            </div>
        </div>
    )
}