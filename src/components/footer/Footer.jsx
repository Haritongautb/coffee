import { motion } from "framer-motion";

import { CoffeeIcon } from "../coffee-icon/CoffeeIcon";
import { MCoffeeIconComponent } from "../coffee-icon-component/CoffeeIconComponent";
import { Link } from "react-router-dom";

const footerLinksAnimation = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.2
        }
    })
}
export const Footer = () => {
    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: false }}
            className="footer">
            <div className="container">
                <div className="footer__inner">

                    <div className="menu menu--dark">
                        <div className="menu__list d-flex align-items-end justify-content-center">
                            <motion.div
                                custom={1}
                                variants={footerLinksAnimation}
                            >
                                <Link to="/">
                                    <div className="d-flex align-items-end">
                                        <CoffeeIcon typeOfCoffeeIcon="menuIconDark" size={35} />
                                        <span>
                                            Coffee house
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>

                            <motion.div
                                custom={2}
                                variants={footerLinksAnimation}
                            >
                                <Link to="ourCoffee">
                                    Our coffee
                                </Link>
                            </motion.div>
                            <motion.div
                                custom={3}
                                variants={footerLinksAnimation}
                            >
                                <Link to="forYourPleasure">
                                    For your pleasure
                                </Link>
                            </motion.div>
                        </div>
                    </div >

                    <MCoffeeIconComponent
                        custom={4}
                        variants={footerLinksAnimation} />

                </div>
            </div>
        </motion.footer>
    )
}