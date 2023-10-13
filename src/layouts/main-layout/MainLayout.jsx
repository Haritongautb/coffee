import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export const MainLayout = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="contents">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}