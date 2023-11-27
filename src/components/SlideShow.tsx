import { useState, useRef, useEffect } from "react";
import Product from "./Product";

const delay = 1000;

interface Props {
  className?: string;
  products: {
    title: string;
    price: number;
    previousPrice?: number;
    isNew: boolean;
    like: boolean;
    discount: boolean;
    isHot: boolean;
    warranty: boolean;
    image: string;
  }[];
}

function Slideshow({ className, products }: Props) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<null | number>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (timeoutRef !== null) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
    }

    return () => {
      resetTimeout();
    };
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [index]);

  return (
    <div className={`overflow-hidden w-full ${className}`}>
      <div
        style={{
          transform: `translate3d(${-index * 70}%, 0, 0)`,
          whiteSpace: "nowrap",
          transition: "ease 1000ms",
        }}
        className="w-full flex gap-4"
      >
        {products.map((product, index) => (
          <Product key={index} index={index} {...product} />
        ))}
      </div>
      <div className="text-center">
        {products.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
