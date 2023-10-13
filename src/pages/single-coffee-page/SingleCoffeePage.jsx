import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useGetBack } from "../../hooks/useGetBack";
import { useHttp } from "../../hooks/useHttp";
import { motion } from "framer-motion";
import { CoffeeIconComponent } from "../../components/coffee-icon-component/CoffeeIconComponent";
import src1 from "../../assets/images/ourCoffee/coffee-image.jpg";
import { returnBlockAnimation } from "../../assets/data/animations/animationObjects";

export const SingleCoffeePage = () => {
    const { idCoffee } = useParams();
    const { request, statusLoading, data } = useHttp();
    const { handleNavigate } = useGetBack("/error");

    React.useEffect(() => {
        request(`https://6501d205736d26322f5c5699.mockapi.io/coffeeData/${idCoffee}`)
    }, [])

    React.useEffect(() => {
        if (statusLoading === "error") {
            handleNavigate();
        } else {
            return;
        }
    }, [statusLoading])

    return (
        <>
            <Helmet>
                <meta name="description"
                    content={statusLoading === "idle" || statusLoading === "loading" ? null : data.cardName} />
                <title>
                    {
                        statusLoading === "idle" || statusLoading === "loading" ? null : data.cardName
                    }
                </title>
            </Helmet>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: false }}
                variants={returnBlockAnimation("y")}
                className="about single-page">
                <div className="container">
                    <div className="about__inner">
                        <div className="row">
                            {
                                statusLoading === "idle" || statusLoading === "loading" ? <h3 style={{ textAlign: "center" }}>Loading...</h3>
                                    :
                                    <>
                                        <div className="col-sm-5 offset-sm-1 col-md-6 offset-md-3">
                                            <div className="about__photo">
                                                <img className="about__img" src={src1} alt="Image girl with beans" />
                                            </div>
                                        </div>

                                        <div className="col-sm-5 col-md-6 offset-md-3">
                                            <div className="about__content-wrapper">
                                                <h2 className="section-title about__title">About it</h2>
                                                <CoffeeIconComponent />
                                                <div className="about__texts">
                                                    <div className="about__content-top d-flex align-items-start">
                                                        <p className="about__country">
                                                            <span>Country: {data.cardCountry}</span>
                                                        </p>
                                                    </div>
                                                    <div className="about__content-middle d-flex align-items-start">
                                                        <p className="about__description">
                                                            <span>Description: </span>
                                                            {data.cardDescription}</p>
                                                    </div>
                                                    <div className="about__content-bottom d-flex align-items-end">
                                                        <div className="about__price">
                                                            <span>
                                                                Price:
                                                            </span>
                                                            {data.cardPrice}$
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}