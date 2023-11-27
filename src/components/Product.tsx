import Cart from "../assets/Cart";
import HeartFilled from "../assets/HeartFilled";
import Badge from "./Badge";

interface Props {
  index: number;
  price: number;
  isNew: boolean;
  discount: boolean;
  isHot: boolean;
  warranty: boolean;
  like: boolean;
  image: string;
  title: string;
  previousPrice?: number;
}
const Product = ({
  isNew,
  title,
  previousPrice,
  price,
  discount,
  isHot,
  like,
  warranty,
  image,
  index,
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="p-8 flex flex-col bg-[#F1F1F1] w-[300px] h-[430px] mb-8">
        <div className="flex justify-between items-center">
          {isNew && <Badge bgColor="#12A05C" title="NEW" />}
          {discount && <Badge bgColor="#E73C17" title="-10%" />}
          {isHot && <Badge bgColor="#FF9900" title="HOT" />}
          {warranty && <Badge bgColor="#7F7CF6" title="2 Years Warranty" />}
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
        <span className="text-[#191919] font-semibold text-xl">${price}</span>
        {previousPrice && (
          <span className="line-through font-semibold text-xl text-[#D9D9D9]">
            ${previousPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default Product;
