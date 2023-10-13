import { motion } from "framer-motion";

export const Products = ({ children, productsBack = "home" }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: false }}
            className={`products ${productsBack}`}>
            <div className="container">
                <div className="products__inner">
                    {
                        children
                    }
                </div>
            </div>
        </motion.section>
    )
}
