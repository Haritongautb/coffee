import React from "react";
import { Helmet } from "react-helmet";
import { useGetBack } from "../../hooks/useGetBack";

export const NotFound = ({ title }) => {
    const { handleNavigate } = useGetBack();

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
                <meta name="description"
                    content={title} />
                <title>
                    {
                        title
                    }
                </title>
            </Helmet>
            <div className="error-block">
                <h1 className="error-block__title">
                    Error
                </h1>
                <p className="error-block__text">Unfortunately this page is missing</p>
                <button type="button" className="col-3 offset-4 col-md-2 offset-md-5 btn btn-warning" onClick={handleNavigate}>Get back</button>
            </div>
        </>

    )
}