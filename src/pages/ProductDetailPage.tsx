import Details from "../components/Details";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";

const ProductDetailPage = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="h-[245px] bg-[#F4F5F8] flex items-center justify-center font-inter text-[#191919] flex-col gap-4">
        <span className="font-medium text-4xl ">TV COLLECTION</span>
        <span className="font-light text-lg">
          HOME / PRODUCT / TV COLLECTION
        </span>
      </div>
      <Details />
      <Products />
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
