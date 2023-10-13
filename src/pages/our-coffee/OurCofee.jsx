import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { CoffeeIconComponent } from "../../components/coffee-icon-component/CoffeeIconComponent";
import { Products } from "../../components/products/Products";
import { ProductsList } from "../../components/products-list/ProductsList";
import girl from "../../assets/images/ourCoffee/girl.jpg";
import buttonsData from "../../assets/data/buttonsData";
import { returnBlockAnimation } from "../../assets/data/animations/animationObjects";

export const OurCoffee = ({ status, data }) => {
    const [filter, setFilter] = React.useState();
    const [search, setSearch] = React.useState("");
    const isFirstRender = React.useRef(true);

    React.useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [])

    const handleFilter = event => {
        setFilter(filter => event.target.name)
    }

    const handleSearch = event => {
        setSearch(search => event.target.value)
    }

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Coffee shop products"
                />
                <title>Coffee shop products</title>
            </Helmet>
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
                                    <img className="about__img" src={girl} alt="Image girl with beans" />
                                </div>
                            </div>

                            <div className="col-md-5 offset-md-1">
                                <h2 className="section-title about__title">About our beans</h2>
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
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: false }}
                    className="helpers">
                    <div className="row d-flex align-items-center">

                        <motion.div variants={returnBlockAnimation("x")} className="col-md-4 offset-md-2">
                            <div className="search">
                                <label className="search__label gap-2" htmlFor="search">
                                    <span className="mb-3">Looking for</span>
                                    <input
                                        id="search"
                                        type="text"
                                        placeholder="start typing here"
                                        value={search}
                                        onChange={handleSearch} />
                                </label>
                            </div>
                        </motion.div>
                        <motion.div variants={returnBlockAnimation("x")} className="col-md-4">
                            <div className="filters d-flex align-items-center">
                                <span className="mb-3">Or filter</span>
                                <div className="filters__buttons d-flex align-items-center">
                                    {
                                        buttonsData.map((item, index) => <button
                                            onClick={handleFilter}
                                            key={item.id}
                                            className={`${item.class} ${item.name === filter ? "active" : ""}${isFirstRender.current && item.name === "all" ? "active" : ""}`}
                                            name={item.name}>
                                            {item.content}
                                        </button>)
                                    }
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {
                    status === "loading" || status === "loading" || status === "idle" ? <h3 style={{ textAlign: "center" }}>Loading....</h3> : <ProductsList filter={filter} search={search} productsData={data} />
                }

            </Products>
        </>
    )
}