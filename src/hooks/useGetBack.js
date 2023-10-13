import { useNavigate } from "react-router-dom";
import { useHttp } from "./useHttp";

export const useGetBack = (pathNavigate = "/") => {
    const { clearError } = useHttp();
    const navigate = useNavigate();

    const handleNavigate = () => {
        clearError();
        navigate(pathNavigate);
    }

    return {
        handleNavigate
    }

}