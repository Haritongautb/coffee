import { motion } from "framer-motion";
import { forwardRef } from "react";
import { CoffeeIcon } from "../coffee-icon/CoffeeIcon"
import "./coffeeIconComponent.scss";

export const CoffeeIconComponent = forwardRef(({ typeOfCoffeeIconComponent = "dark" }, ref) => {
    const className = typeOfCoffeeIconComponent === "dark" ? "coffee-icon-component__stick dark" : "coffee-icon-component__stick light";

    return (
        <div ref={ref} className={`coffee-icon-component d-flex justify-content-center align-items-center`}>
            <span className={className}>
            </span>
            <div className="coffee-icon-component__wrapper">
                <CoffeeIcon
                    typeOfCoffeeIcon={typeOfCoffeeIconComponent === "dark" ? "dark" : "light"}
                />
            </div>
            <span className={className}>
            </span>
        </div>
    )
})

export const MCoffeeIconComponent = motion(CoffeeIconComponent);