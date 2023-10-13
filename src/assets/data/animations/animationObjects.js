
export const returnBlockAnimation = (typeOfAnimation) => {
    switch (typeOfAnimation) {
        case "y": {
            return {
                hidden: {
                    y: -100,
                    opacity: 0
                },
                visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.2
                    }
                }
            }

        }
        case "x": {
            return {
                hidden: {
                    x: 100,
                    opacity: 0
                },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: 0.2
                    }
                }
            }
        }
        case "XHasCustom": {
            return {
                hidden: {
                    x: -100,
                    opacity: 0
                },
                visible: custom => ({
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: custom * 0.2
                    }
                })
            }
        }
        case "YHasCustom": {
            return {
                hidden: {
                    y: -100,
                    opacity: 0
                },
                visible: custom => ({
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: custom * 0.2
                    }
                })
            }
        }
        default:
            break;
    }
}

export const productsCardAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.1
        }
    }
}
