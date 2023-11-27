import Cart from "../assets/Cart";
import ChevronDown from "../assets/ChevronDown";
import Headphones from "../assets/Headphones";
import Heart from "../assets/Heart";
import Logotype from "../assets/Logotype";
import Menu from "../assets/Menu";
import Search from "../assets/Search";

const Header = () => {
  const options = ["ENG", "USD"];
  const items = ["HOME", "ABOUT", "PRODUCT", "PAGES", "CONTACT"];
  return (
    <>
      <header className="flex items-center w-full justify-between bg-[#2F333A] py-4 pl-8 pr-4 font-inter text-white text-base font-light h-[60px]">
        <span>Welcome to Needus & Get the best product</span>
        <div className="flex gap-4">
          {options?.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <span>{option}</span>
              <ChevronDown />
            </div>
          ))}
        </div>
      </header>
      <div className="font-inter flex items-center p-4 justify-between w-full">
        <Logotype />
        <div className="flex items-center gap-4">
          <div className="border border-gray-300 flex h-[76px] px-4">
            <div className="flex items-center border-r border-gray-300 pr-[2px] py-[2px]">
              <input
                className="p-1"
                placeholder="Search products"
                type="text"
              />
              <button className="bg-[#2F333A] h-full px-6">
                <Search />
              </button>
            </div>
            <div className="text-xl font-light p-2 flex items-center justify-between">
              <div className="flex items-center mr-14 gap-2">
                <span>All Categories</span>
                <ChevronDown color="#191919" />
              </div>
              <div className="flex items-center gap-2">
                <span>Login</span>
                <span>Signup</span>
              </div>
            </div>
          </div>
          <Heart />
          <div className="relative">
            <div className="flex items-center text-xs justify-center rounded-full h-4 w-4 bg-[#E23000] absolute text-white -right-2 -top-1">
              6
            </div>
            <Cart />
          </div>
        </div>
      </div>
      <header className="flex font-inter items-center w-full justify-between bg-[#2F333A] h-[76px]">
        <div className="bg-[#E73C17] h-full gap-4 flex items-center justify-center text-white px-8">
          <Menu />
          <span className="text-2xl font-medium">All Categories</span>
          <ChevronDown />
        </div>
        <div className="flex gap-8 px-4 text-base font-normal">
          {items?.map((option, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 ${
                option !== "PRODUCT" ? "text-white" : "text-[#E73C17]"
              }`}
            >
              <span>{option}</span>
              <ChevronDown color={option !== "PRODUCT" ? "white" : "#E73C17"} />
            </div>
          ))}
        </div>
        <div className="text-white pl-4 pr-8 border-l-2 h-full border-white flex items-center gap-6">
          <Headphones />
          <div className="flex flex-col">
            <span>CONTACT US 24/7</span>
            <span>+12012987461</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
