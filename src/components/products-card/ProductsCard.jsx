import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { productsCardAnimation } from "../../assets/data/animations/animationObjects";

export const ProductsCard = ({ cardSrc, cardAlt, cardName, cardPrice, cardCountry, id }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={productsCardAnimation}
            className={!!cardCountry ? `card ${!!cardCountry ? "not-home" : "home"} col-md-3` : `card ${!!cardCountry ? "not-home" : "home"}`}>
            <Link to={`/ourCoffee/${id}`}>
                <div className="card__wrapper d-flex flex-column align-items-center">
                    <div className="card__photo">
                        <img className="card__img" src={cardSrc} alt={cardAlt} />
                    </div>
                    <div className="card__content">
                        <div className="card__name">
                            {
                                cardName
                            }
                        </div>
                        {
                            !!cardCountry &&
                            <div className="card__country-name">
                                {
                                    cardCountry
                                }
                            </div>
                        }
                        <div className="card__price">
                            {cardPrice}$
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
