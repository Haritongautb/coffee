import React from "react";

export const useHttp = () => {
    const [data, setData] = React.useState({});
    const [statusLoading, setStatusLoading] = React.useState("idle");

    const request = React.useCallback(async (endpoint) => {
        try {
            setStatusLoading("loading");
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw new Error("Error");
            }

            const result = await response.json();
            setData(data => result)
            setStatusLoading("loaded");
        } catch (e) {
            setStatusLoading("error")
            alert(e);
        }
    }, [])

    const clearError = React.useCallback(() => {
        setStatusLoading("idle");
    }, [])

    return {
        request,
        statusLoading,
        clearError,
        data
    }
}