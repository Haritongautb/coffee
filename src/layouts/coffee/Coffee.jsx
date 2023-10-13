import { Main } from "../../components/main/Main";
import { Hero } from "../../components/hero/Hero";

export const Coffee = ({ Component, data, status }) => {
    return (
        <Main>
            <Hero heroBackground="our-coffee">
                <h1 className="hero__title">
                    Our Coffee
                </h1>
            </Hero>
            <Component status={status} data={data} />
        </Main>
    )
}