import { MainMenuItem } from "./MainMenuItem";
import Slider from "react-slick";
import aboutItemImage from "../../public/assets/images/about-menu-item.png";
import projectsItemImage from "../../public/assets/images/projects-menu-item.png";
import contactItemImage from "../../public/assets/images/contact-menu-item.png";
import { SetStateAction, useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";

export const MainMenu = () => {
    const { isFirstLoad, isCompletedLoading, pushRefToList } = useLoading();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const menuItems = [
        {
            title: "About",
            image: aboutItemImage,
            imageAlt: "About",
            screenName: "about",
        },
        {
            title: "Projects",
            image: projectsItemImage,
            imageAlt: "Projects",
            screenName: "projects",
        },
        {
            title: "Contact",
            image: contactItemImage,
            imageAlt: "Contact",
            screenName: "contact",
        },
    ];

    const menuItemsDesktop = [menuItems[menuItems.length - 1], ...menuItems.slice(0, -1)];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        waitForAnimate: true,
        beforeChange: (_: number, next: SetStateAction<number>) => setActiveIndex(next),
      };

    useEffect(() => {

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const renderMainMenuItems = () => {
        if (windowWidth >= 768) {
            return (
                <div className="main-menu__desktop">
                    {menuItemsDesktop.map((item) => (
                        <MainMenuItem ref={(el: HTMLDivElement) => pushRefToList(el)}
                         key={item.title} 
                         title={item.title} 
                         image={item.image} 
                         imageAlt={item.imageAlt} 
                         screenName={item.screenName} />
                    ))}
                </div>
            )
        } else {
            return (
                <Slider {...settings}>
                    {menuItems.map((item, index) => {
                        const nextIndex = (activeIndex + 1) % menuItems.length;

                        return (
                            <div key={item.title} className={`slide ${index === nextIndex ? "active-slide" : ""}`}>
                                <MainMenuItem ref={(el: HTMLDivElement) => pushRefToList(el)} 
                                    title={item.title} 
                                    image={item.image} 
                                    imageAlt={item.imageAlt} 
                                    screenName={item.screenName} />
                            </div>
                        );
                    })}
                </Slider>
            )
        }
    }
    
    return (
        <div className={`main-menu ${isCompletedLoading ? 'loaded' : ''}`}>
            <div className={`main-menu__content ${isFirstLoad ? "main-menu__content--first-load" : ""}`}>
                {renderMainMenuItems()}
            </div>
        </div>
    )
};