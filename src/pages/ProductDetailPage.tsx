import { useEffect, useState } from "react";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import FooterMobile from "../components/FooterMobile";

const ProductDetailPage = () => {
  const [price, setPrice] = useState<number>(600.28);
  const [qty, setQty] = useState<number>(1);

  const increment = () => {
    setQty(qty + 1);
  };
  const decrement = () => {
    if (qty === 1) return;
    setQty(qty - 1);
  };

  useEffect(() => {
    setPrice(600.28 * qty);
  }, [qty]);
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="py-6 md:py-0 h-fit md:h-[245px] bg-[#F4F5F8] flex items-center justify-center font-inter text-[#191919] flex-col gap-2 md:gap-4">
        <span className="font-medium text-lg md:text-4xl">TV COLLECTION</span>
        <span className="font-light text-[10px] md:text-lg">
          HOME / PRODUCT / TV COLLECTION
        </span>
      </div>
      <Details {...{ increment, decrement, qty, price }} />
      <Products />
      <Footer />
      <FooterMobile {...{ increment, decrement, qty, price }} />
    </div>
  );
};

export default ProductDetailPage;
