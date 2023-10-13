import { motion } from "framer-motion";
import {returnBlockAnimation} from "../../assets/data/animations/animationObjects";
export const Hero = ({ children, heroBackground = "home" }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.7, once: false }}
            className={`hero ${heroBackground}`}>
            <div className="container">
                <motion.div
                    custom={1}
                    variants={returnBlockAnimation("XHasCustom")}
                    className="hero__inner">
                    {
                        children
                    }
                </motion.div>
            </div>
        </motion.section>
    )
}