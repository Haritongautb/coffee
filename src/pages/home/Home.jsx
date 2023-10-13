import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CoffeeIconComponent } from "../../components/coffee-icon-component/CoffeeIconComponent";
import { Main } from "../../components/main/Main";
import { ProductsList } from "../../components/products-list/ProductsList";
import { Hero } from "../../components/hero/Hero";
import { Products } from "../../components/products/Products";
import { returnBlockAnimation } from "../../assets/data/animations/animationObjects";


export const Home = ({ status, data }) => {
    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Coffee shop"
                />
                <title>Coffee shop</title>
            </Helmet>
            <Main>
                <Hero>
                    <div className="row">
                        <div
                            className="col-md-6 offset-md-3"
                        >
                            <div className="d-flex flex-column align-items-center">
                                <h1 className="hero__title">Everything You Love About Coffee</h1>
                                <CoffeeIconComponent typeOfCoffeeIconComponent="light" />
                                <div className="hero__subtitle">
                                    We make every day full of energy and tasty
                                    <br />
                                    Want to try out beans?
                                </div>
                                <a href="!#" className="button-link d-flex justify-content-center align-items-center">
                                    More
                                </a>
                            </div>
                        </div>
                    </div>
                </Hero>

                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: false }}
                    variants={returnBlockAnimation("x")}
                    className="about-us">
                    <div className="container">
                        <div className="about-us__inner">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">

                                    <h2 className="section-title about-us__title">About Us</h2>
                                    <CoffeeIconComponent />
                                    <div className="about-us__texts">
                                        <p>
                                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                            Afraid at highly months do things on at. Situation recommend objection do intention
                                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                            met spot shy want. Children me laughing we prospect answered followed. At it went
                                            is song that held help face.
                                        </p>
                                        <p>
                                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                            horrible but confined day end marriage. Eagerness furniture set preserved far
                                            recommend. Did even but nor are most gave hope. Secure active living depend son
                                            repair day ladies now.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </motion.section>

                <Products>
                    <motion.h2 variants={returnBlockAnimation("x")} className="section-title products__title">Our best</motion.h2>
                    {
                        status === "error" || status === "loading" || status === "idle" ? <h3 style={{ textAlign: "center" }}>Loading....</h3> : <ProductsList productsData={data} />
                    }
                </Products>
            </Main >
        </>
    )
}