import { ProductsCard } from "../products-card/ProductsCard";
import src1 from "../../assets/images/cards/1.png";

export const ProductsList = ({ productsData, filter = "all", search = "" }) => {
    const renderItems = arr => filter === "all" ?
        arr.filter(item => item.cardName.toLowerCase().includes(search.toLowerCase())).map((item, index) =>
            <ProductsCard
                key={index + 1}
                id={item.id}
                cardSrc={src1}
                cardAlt={item.cardAlt}
                cardName={item.cardName}
                cardPrice={item.cardPrice}
                cardCountry={!!item.cardCountry && item.cardCountry} />)
        :
        arr.filter(item => item.cardCountry.toLowerCase() === filter.toLowerCase())
            .filter(item => item.cardName.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => <ProductsCard
                key={index + 1}
                id={item.id}
                cardSrc={item.cardSrc}
                cardAlt={item.cardAlt}
                cardName={item.cardName}
                cardPrice={item.cardPrice}
                cardCountry={!!item.cardCountry && item.cardCountry} />)


    const items = !!productsData.length ? renderItems(productsData) : <h3>No products</h3>;

    return (
        <div
            className="products__cards d-flex flex-wrap justify-content-center">
            {
                items
            }
        </div>

    )
}