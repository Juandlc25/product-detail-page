interface Props {
  increment: () => void;
  decrement: () => void;
  price: number;
  qty: number;
}

const FooterMobile = ({ increment, decrement, price, qty }: Props) => {
  return (
    <div className="flex flex-col w-full bg-white md:hidden fixed bottom-0 left-0 right-0 p-4">
      <span className="font-normal text-base">USD(incl. of all taxes):</span>
      <div className="flex items-center gap-2">
        <span className="text-[#191919] font-semibold text-xl">
          ${price.toFixed(2)}
        </span>
        <span className="line-through font-semibold text-xl text-[#D9D9D9]">
          $800.28
        </span>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="bg-white border border-[#F0F0F0] w-[70px] h-[30px] flex items-center justify-center">
          <span
            onClick={decrement}
            className="w-1/3 flex items-center justify-center cursor-pointer border-r h-full border-[#F0F0F0]"
          >
            -
          </span>
          <span className="w-1/3 flex items-center justify-center">{qty}</span>
          <span
            onClick={increment}
            className="w-1/3 flex items-center justify-center cursor-pointer border-l h-full border-[#F0F0F0]"
          >
            +
          </span>
        </div>
        <div className="font-medium text-lg flex items-center gap-4 mt-2">
          <button className="bg-[#E73C17] text-white w-[120px] h-[30px] flex items-center justify-center">
            Buy Now
          </button>
          <button className="bg-white border border-[#E73C17] text-[#E73C17] w-[120px] h-[30px] flex items-center justify-center">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
