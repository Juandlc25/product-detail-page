import { useState } from "react";

const Tabs = () => {
  const tabs = [
    {
      title: "Description",
      content: `
      The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers.

*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.

**65C2 Stand model is at a minimum 39% lighter than the C1 series. More...
 `,
    },
    {
      title: "Specification",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis, metus eu rhoncus efficitur, turpis sem tempus massa, id consectetur nunc purus in lectus. Donec non velit a odio volutpat volutpat in in nisi. Maecenas aliquet turpis lacus, id pharetra elit sagittis vel. Ut consectetur nisi quis ullamcorper pellentesque. Integer efficitur interdum nunc, ut elementum nulla. Phasellus feugiat nulla et rhoncus porttitor. Nullam at lectus sed turpis porttitor viverra accumsan hendrerit lorem. Praesent tincidunt nisi at nunc suscipit malesuada.`,
    },
    {
      title: "Reviews",
      content: `Suspendisse potenti. Sed dapibus bibendum orci, eget semper diam tincidunt eget. Nulla a mi non nulla fermentum molestie. Aenean magna massa, tempus quis risus nec, sollicitudin consectetur mi. Donec dictum nulla sed nulla semper elementum. Nulla dictum ultrices risus, id ornare arcu rutrum vel. Curabitur vestibulum id nisi at pellentesque. Aenean a lacinia tellus. Aliquam iaculis odio sit amet velit laoreet, non feugiat tellus elementum.`,
    },
  ];
  const [active, setActive] = useState<string>(tabs[0].title);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex border-b border-gray-200 w-full items-center justify-center sm:gap-20 md:gap-32">
        {tabs?.map((tab, index) => (
          <span
            onClick={() => setActive(tab?.title)}
            key={index}
            className={`border-b text-base md:text-xl font-medium pb-4 cursor-pointer px-4 ${
              active === tab?.title ? "border-[#E73C17]" : "border-transparent"
            }`}
          >
            {tab?.title}
          </span>
        ))}
      </div>
      <div className="px-10 mt-2">
        <p className="font-light text-[10px] sm:text-lg">
          {tabs?.find((tab) => tab.title === active)?.content}
        </p>
      </div>
    </div>
  );
};

export default Tabs;
