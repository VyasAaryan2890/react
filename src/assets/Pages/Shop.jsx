import Hero from "../../Components/Hero/Hero";
import Item from "../../Components/Item/Item";
import NewCollections from "../../Components/NewCollections/NewCollections";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Offer from "../../Components/Offer/Offer";
import Popular from "../../Components/Popular/Popular";

const Shop = ()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}
export default Shop;