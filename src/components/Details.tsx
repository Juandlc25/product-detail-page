import Star from "../assets/Star";
import Tabs from "./Tabs";
import { useState } from "react";
import image6 from "../assets/image-6.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.png";
import image4 from "../assets/image-4.png";
import image5 from "../assets/image-5.png";

interface Props {
  increment: () => void;
  decrement: () => void;
  price: number;
  qty: number;
}

const Details = ({ increment, decrement, price, qty }: Props) => {
  const details = [
    "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
    "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
    "Hands-free Voice Control, Always Ready",
    "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
    "Eye Comfort Display: Low-Blue Light, Flicker-Free",
  ];
  const sizes = [
    "106 cm (42)",
    "121 cm (48)",
    "139 cm (55)",
    "164 cm (65)",
    "196 cm (77)",
    "210 cm (83)",
  ];
  const photos = [image2, image3, image4, image5];
  const [activeSize, setSize] = useState<string>(sizes[0]);

  return (
    <div className="flex flex-col w-full font-inter">
      <div className="flex flex-col md:flex-row w-full py-10 px-6">
        <div className="md:w-1/2 flex flex-col-reverse md:flex-row gap-2">
          <div className="flex flex-row md:flex-col gap-2">
            {photos?.map((photo, index) => (
              <div
                className={`border ${
                  index === 0 ? "border-[#E73C17]" : "border-transparent"
                }`}
              >
                <img src={photo} alt={"img" + index} />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="md:bg-[#F1F1F1] w-full md:w-[508px] md:h-[548px] flex items-center justify-center">
              <img src={image6} alt="image-6" />
            </div>
            <span className="font-light text-base text-[#6f6f6f]">
              *LG C2 42 (106cm) 4K Smart OLED evo TV
            </span>
          </div>
        </div>
        <div className="flex p-2 md:w-1/2 flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <strong>Brand:</strong>
              <span>LG</span>
            </div>
            <div className="flex gap-2 items-center">
              <strong>Model:</strong>
              <span>OLED42C2PSA</span>
            </div>
            <div className="flex gap-2 items-center">
              <strong>Avability:</strong>
              <span> Only 2 in Stock</span>
            </div>
          </div>
          <span className="font-medium text-3xl text-[#191919]">
            LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
          </span>
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((_, index) => (
              <Star key={index} />
            ))}
          </div>

          {details?.map((detail, key) => (
            <div key={key} className="flex items-center gap-2">
              <div className="h-2 w-2 bg-[#191919] rounded-full" />
              <span className="font-light text-base">{detail}</span>
            </div>
          ))}
          <div className="flex flex-wrap border-y my-2 py-4 border-gray-100 gap-2">
            {sizes?.map((size, idx) => (
              <span
                className={`bg-white border cursor-pointer ${
                  activeSize === size
                    ? "text-[#E73C17] border-[#E73C17]"
                    : "text-[#6F6F6F] border-transparent"
                } w-[102px] md:w-[202px] h-[30px] md:h-[60px] flex items-center justify-center`}
                key={idx}
                onClick={() => setSize(size)}
              >
                {size}
              </span>
            ))}
          </div>
          <div className="font-medium text-lg hidden md:flex w-full items-center justify-between">
            <div className="flex flex-col">
              <span className="font-normal text-base">
                USD(incl. of all taxes)
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[#191919] font-semibold text-xl">
                  ${price.toFixed(2)}
                </span>
                <span className="line-through font-semibold text-xl text-[#D9D9D9]">
                  $800.28
                </span>
              </div>
            </div>
            <div className="bg-white border border-[#F0F0F0] w-[202px] h-[60px] flex items-center justify-center">
              <span
                onClick={decrement}
                className="w-1/3 flex items-center justify-center cursor-pointer border-r h-full border-[#F0F0F0]"
              >
                -
              </span>
              <span className="w-1/3 flex items-center justify-center">
                {qty}
              </span>
              <span
                onClick={increment}
                className="w-1/3 flex items-center justify-center cursor-pointer border-l h-full border-[#F0F0F0]"
              >
                +
              </span>
            </div>
          </div>
          <div className="font-medium text-lg hidden md:flex w-full items-center justify-between mt-2">
            <button className="bg-[#E73C17] text-white w-[202px] h-[60px] flex items-center justify-center">
              Buy Now
            </button>
            <button className="bg-white border border-[#E73C17] text-[#E73C17] w-[202px] h-[60px] flex items-center justify-center">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Details;
