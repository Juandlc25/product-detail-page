import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import image9 from "../assets/image-9.png";
import image10 from "../assets/image-10.png";
import Slideshow from "./SlideShow";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Sony BRAVIA XR Android TV",
      price: 800.22,
      previousPrice: 1000.8,
      isNew: true,
      like: true,
      discount: false,
      isHot: false,
      warranty: false,
      image: image7,
    },
    {
      title: "Mi P1 Smart Android HD TV",
      price: 400.0,
      isNew: false,
      like: false,
      discount: true,
      isHot: false,
      warranty: false,
      image: image8,
    },
    {
      title: "Konka OLED Android TV",
      price: 700.0,
      isNew: false,
      like: false,
      discount: false,
      isHot: true,
      warranty: false,
      image: image9,
    },
    {
      title: "TCL Roku Android TV",
      price: 800.0,
      isNew: false,
      like: false,
      discount: false,
      isHot: false,
      warranty: true,
      image: image10,
    },
  ];
  return (
    <div className="flex w-full flex-col font-inter items-center gap-2 my-20">
      <span className="font-medium text-[#191919] text-3xl mb-6">
        Related Products
      </span>
      <div className="hidden md:flex gap-4">
        {products?.map(
          (
            {
              image,
              title,
              price,
              previousPrice,
              isNew,
              like,
              discount,
              warranty,
              isHot,
            },
            index
          ) => (
            <Product
              price={price}
              title={title}
              key={index}
              index={index}
              image={image}
              previousPrice={previousPrice}
              isNew={isNew}
              like={like}
              discount={discount}
              warranty={warranty}
              isHot={isHot}
            />
          )
        )}
      </div>
      <Slideshow products={products} />
    </div>
  );
};

export default Products;
