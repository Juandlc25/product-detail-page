import Cart from "../assets/Cart";
import HeartFilled from "../assets/HeartFilled";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import image9 from "../assets/image-9.png";
import image10 from "../assets/image-10.png";

import Badge from "./Badge";

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
      <div className="flex gap-4">
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
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="p-8 flex flex-col bg-[#F1F1F1] w-[300px] h-[430px] mb-8">
                <div className="flex justify-between items-center">
                  {isNew && <Badge bgColor="#12A05C" title="NEW" />}
                  {discount && <Badge bgColor="#E73C17" title="-10%" />}
                  {isHot && <Badge bgColor="#FF9900" title="HOT" />}
                  {warranty && (
                    <Badge bgColor="#7F7CF6" title="2 Years Warranty" />
                  )}
                  {like && (
                    <div className="rounded-full border border-[#D7D7D7] p-1">
                      <HeartFilled size={22} />
                    </div>
                  )}
                </div>
                <div className="h-[260px] flex items-center justify-center">
                  <img src={image} alt={"image-" + index} />
                </div>

                <div className="flex text-[#6F6F6F] justify-center items-center gap-4 bg-white py-4">
                  <Cart color="#6F6F6F" />
                  <span>Add to cart</span>
                </div>
              </div>
              <span className="font-normal text-xl">{title}</span>
              <div className="flex items-center gap-2">
                <span className="text-[#191919] font-semibold text-xl">
                  ${price}
                </span>
                {previousPrice && (
                  <span className="line-through font-semibold text-xl text-[#D9D9D9]">
                    ${previousPrice}
                  </span>
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Products;
