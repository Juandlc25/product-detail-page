import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Youtube from "../assets/Youtube";
import Whatapps from "../assets/Whatapps";
import Location from "../assets/Location";
import Phone from "../assets/Phone";

const Footer = () => {
  const groups = [
    {
      title: "INFORMATION",
      items: [
        "About",
        "Delivery information",
        "Privacy Policy",
        "Sales",
        "Terms & Conditions",
        "EMI Payment",
      ],
    },
    {
      title: "ACCOUNT",
      items: [
        "My Account",
        "My Orders",
        "Returns",
        "Shipping",
        "Wishlist",
        "Account Details",
      ],
    },
    {
      title: "STORE",
      items: ["Affiliate", "Discounts", "Sale", "Contact", "All Collections"],
    },
  ];
  return (
    <>
      <div className="h-fit md:h-[120px] flex flex-col md:flex-row w-full font-inter bg-[#474d57] justify-between px-8 py-8 md:py-0 gap-6 md:gap:0">
        <div className="flex flex-col text-white h-full justify-center">
          <span className="font-medium text-base md:text-3xl">
            Join our newsletter and get offters
          </span>
          <span className="font-normal text-sm md:text-xl">
            Sign up our newsletter
          </span>
        </div>
        <div className="flex items-center">
          <input
            className="px-4 h-[37px] md:h-[73px] w-fit md:w-[350px]"
            placeholder="Enter your email"
            type="text"
          />
          <button className="bg-[#E73C17] h-[37px] md:h-[73px] w-fit md:w-[268px] text-white px-6 font-semibold text-xs md:text-xl">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="flex text-white flex-col md:hidden w-full font-inter bg-[#2F333A] h-fit p-10">
        <div className="flex gap-4 w-full flex-col  underline">
          <span className="font-medium text-[10px]">ABOUT US</span>
          {groups?.map(({ title }, key) => (
            <div key={key} className="flex flex-col gap-4">
              <span className="font-medium text-[10px]">{title}</span>
            </div>
          ))}
          <span className="font-medium text-[10px]">CONTACT US</span>
        </div>
        <div className="flex w-full h-full items-center justify-center mt-10">
          <span>Copyright. 2023 All Right Reserved</span>
        </div>
      </div>
      <div className="md:flex hidden font-inter w-full flex-col h-[573px] bg-[#2F333A] text-white pt-10 pl-10 pr-10">
        <div className="w-full flex gap-4 mb-8 justify-between">
          <div className="flex flex-col gap-4">
            <span className="font-medium text-2xl">ABOUT US</span>
            <span className="w-[328px] font-normal text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              aliquet lacinia nulla ut laoreet. Quisque ultricies et tortor nec
              laoreet.
            </span>
            <div className="flex items-center gap-4">
              <Facebook />
              <Whatapps />
              <Instagram />
              <Youtube />
            </div>
          </div>
          <div className="flex gap-8">
            {groups?.map(({ title, items }, key) => (
              <div key={key} className="flex flex-col gap-4">
                <span className="font-medium text-2xl">{title}</span>
                <div className="flex flex-col gap-2">
                  {items?.map((item, index) => (
                    <span className="text-lg font-normal" key={index}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 w-[328px]">
            <span className="font-medium text-2xl">CONTACT US</span>
            <p className="font-normal text-lg">
              If you have any query, please contact us{" "}
              <span className="text-[#E73C17]">needus24@gmail.com</span>
            </p>
            <div className="flex items-center gap-2">
              <Location />
              <span className="font-normal text-lg">California, USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              <span className="font-normal text-lg"> +12012987481</span>
            </div>
          </div>
        </div>

        <div className="flex w-full h-full items-center justify-center border-t border-white">
          <span>Copyright. 2023 All Right Reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
