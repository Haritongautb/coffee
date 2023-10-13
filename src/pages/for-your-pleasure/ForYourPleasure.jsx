import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Main } from "../../components/main/Main";
import { Hero } from "../../components/hero/Hero";
import { CoffeeIconComponent } from "../../components/coffee-icon-component/CoffeeIconComponent";
import { ProductsList } from "../../components/products-list/ProductsList";
import { Products } from "../../components/products/Products";
import src1 from "../../assets/images/forYourPleasure/coffee-cup.png";
import { returnBlockAnimation } from "../../assets/data/animations/animationObjects";

export const ForYourPleasure = ({ status, data }) => {
    return (
        <>
            <Helmet>
                <meta name="description"
                    content="for your pleasure" />
                <title>
                    For your pleasure
                </title>
            </Helmet>
            <Main>
                <Hero heroBackground="for-your-pleasure">
                    <h1 className="hero__title">
                        For Your Pleasure
                    </h1>
                </Hero>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: false }}
                    variants={returnBlockAnimation("x")}
                    className="about">
                    <div className="container">
                        <div className="about__inner">
                            <div className="row">
                                <div className="col-md-4 offset-md-1">
                                    <div className="about__photo">
                                        <img className="about__img" src={src1} alt="Image girl with beans" />
                                    </div>
                                </div>

                                <div className="col-md-5 offset-md-1">
                                    <h2 className="section-title about__title">About our goods</h2>
                                    <CoffeeIconComponent />
                                    <div className="about__texts">
                                        <p>
                                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                        </p>
                                        <p>
                                            Afraid at highly months do things on at. Situation recommend objection do intention
                                            so questions.
                                            <br />
                                            <br />
                                            As greatly removed calling pleased improve an. Last ask him cold feel
                                            <br />
                                            <br />
                                            met spot shy want. Children me laughing we prospect answered followed. At it went
                                            is song that held help face.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <Products productsBack="our-coffee">
                    {
                        status === "error" || status === "loading" || status === "idle" ? <h3 style={{ textAlign: "center" }}>Loading....</h3> : <ProductsList productsData={data} />
                    }
                </Products>
            </Main>
        </>
    )
}