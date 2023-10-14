import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Main } from "../../components/main/Main";

export const Page404 = () => {

    React.useEffect(() => {
        document.body.style.cssText = `
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        `
        return () => {
            document.body.removeAttribute("style");
        }
    }, [])

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Something is wrong. This is error page"
                />
                <title>Error page</title>
            </Helmet>
            <Main>
                <div className="error-block">
                    <h1 className="error-block__title">
                        Error
                    </h1>
                    <p className="error-block__text">Unfortunately this page is missing</p>
                    <Link className="col-3 offset-4 col-md-2 offset-md-5 btn btn-warning" to="/">Get back</Link>
                </div>
            </Main>
        </>

    )
}