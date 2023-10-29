import React from "react";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";
import { CoffeeIcon } from "../coffee-icon/CoffeeIcon";
import { returnBlockAnimation } from "../../assets/data/animations/animationObjects";

export const Header = () => {
    const [isOpen, setOpen] = React.useState(false);
    const hamburgerRef = React.useRef(null);

    React.useEffect(() => {
        const closeModal = event => {
            if (!event.composedPath().includes(hamburgerRef.current)) {
                setOpen(false);
            }
        }
        const body = document.body;
        body.addEventListener("click", closeModal);
        isOpen ? body.style.overflowY = "hidden" : body.style.overflowY = "auto";

        return () => {
            body.removeEventListener("click", closeModal);
        }
    }, [isOpen])

    const onActiveLink = ({ isActive }) => {
        return { color: isActive ? "#FDA7DF" : "" };
    }

    return (
        <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: false }}
            className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__menu-wrapper">

                        <nav className={`menu header ${isOpen ? "menu--active" : ""}`}>
                            <div className="menu__list d-flex align-items-end">
                                <motion.div
                                    custom={1}
                                    variants={returnBlockAnimation("YHasCustom")}
                                >
                                    <NavLink
                                        to="/"
                                        style={onActiveLink}
                                    >
                                        <div className="d-flex align-items-end">
                                            <CoffeeIcon typeOfCoffeeIcon="menuIcon" size={35} />
                                            <span>
                                                Coffee house
                                            </span>
                                        </div>
                                    </NavLink>
                                </motion.div>
                                <motion.div
                                    custom={2}
                                    variants={returnBlockAnimation("YHasCustom")}
                                >
                                    <NavLink
                                        to="ourCoffee"
                                        end
                                        style={onActiveLink}>
                                        Our coffee
                                    </NavLink>
                                </motion.div>
                                <motion.div
                                    custom={3}
                                    variants={returnBlockAnimation("YHasCustom")}
                                >
                                    <NavLink
                                        to="forYourPleasure"
                                        style={onActiveLink}>
                                        For your pleasure
                                    </NavLink>
                                </motion.div>
                            </div>
                        </nav>

                        <div
                            ref={hamburgerRef}
                            className={`hamburger ${isOpen ? "hamburger--active" : ""}`}
                            onClick={() => setOpen(isOpen => !isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}