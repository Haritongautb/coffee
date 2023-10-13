import { Helmet } from "react-helmet";
import { Main } from "../../components/main/Main";
import { Hero } from "../../components/hero/Hero";

export const Coffee = ({ Component, title, data, status }) => {
    return (
        <>
            <Helmet>
                <meta name="description"
                    content={!!title && "Our Coffee page"} />
                <title>
                    {
                        !!title && "Our Coffee page"
                    }
                </title>
            </Helmet>
            <Main>
                <Hero heroBackground="our-coffee">
                    <h1 className="hero__title">
                        Our Coffee
                    </h1>
                </Hero>
                <Component status={status} data={data} />
            </Main>

        </>
    )
}