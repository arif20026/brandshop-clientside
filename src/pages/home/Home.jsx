import { useLoaderData } from "react-router-dom";
import CategoryProduct from "../../categoryProduct/CategoryProduct";
import Banner from "./Banner";
import Offer from "./Offer";
import Features from "./Features";

const Home = () => {
    const products = useLoaderData();

    // Log the products to see the actual data
    console.log("All Products:", products);

    // Extract unique brand names with associated images using reduce
    const uniqueBrands = products.reduce((uniqueBrands, product) => {
        // Check if the brand name is not already in the uniqueBrands array
        const isBrandUnique = !uniqueBrands.some(brand => brand.brandName === product.brandName);

        if (isBrandUnique) {
            uniqueBrands.push({
                brandName: product.brandName,
                brandImage: product.brandImage
            });
        }

        return uniqueBrands;
    }, []);

    // Log the unique brands to see what's being extracted
    console.log("Unique Brands:", uniqueBrands);

    return (
        <div className="flex flex-col text-center items-center justify-center">
            <Banner></Banner>
            <h3 className="text-3xl font-bold my-6">Choose Products of your Favorite brand
            </h3>
            <div className="lg:grid grid-cols-3 gap-32">
            {
                uniqueBrands.map(brand => (
                    <CategoryProduct key={brand.brandName} brandName={brand.brandName} brandImage={brand.brandImage} />
                ))
            }
            </div>
            <Offer></Offer>
            <Features></Features>
        </div>
    );
};

export default Home;
