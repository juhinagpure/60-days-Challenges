import { ArrowLeft, Heart, ShoppingCart } from "@phosphor-icons/react";
import ProductYellow from "../assets/Images/image.png";
import ProductRed from "../assets/Images/image2.png";
import ProductPurple from "../assets/Images/image1.png";
import { useState } from "react";

const Day2 = () => {
  const [selectedColor, setSelectedColor] = useState("yellow");
  const [isAdded, setIsAdded] = useState(false);

  const colorImages: Record<string, string> = {
    yellow: ProductYellow,
    red: ProductRed,
    purple: ProductPurple,
  };

  const colors = [
    { name: "yellow", bgColor: "bg-yellow-500" },
    { name: "purple", bgColor: "bg-purple-500" },
    { name: "red", bgColor: "bg-red-500" },
  ];

  const backgroundImage = colorImages[selectedColor]
    ? `url(${colorImages[selectedColor]})`
    : `url(${ProductYellow})`;

  const handleAddToBag = () => {
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="w-[350px] h-[650px] mt-5 shadow shadow-orange-100 bg-orange-50 mx-auto rounded-3xl relative overflow-hidden p-6">
      <div className="flex justify-between items-center">
        <button className="bg-white rounded-full size-9 flex shadow-md shadow-orange-200">
          <ArrowLeft size={20} className="m-auto" />
        </button>

        <div className="flex gap-5">
          <button className="bg-white rounded-full size-9 flex shadow-md shadow-orange-200">
            <Heart size={20} className="m-auto" />
          </button>

          <button className="bg-white rounded-full size-9 flex shadow-md shadow-orange-200">
            <ShoppingCart size={20} className="m-auto" />
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundImage: backgroundImage,
          backgroundPosition: "center",
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          height: "78%",
        }}
        className="absolute top-16 inset-x-0"
      />

      <div className="absolute bottom-0 right-0 left-6 bg-white rounded-3xl p-5">
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">Crop Top</span>

          <div className="gap-3 flex items-center">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(color.name)}
                className={`size-5 ${color.bgColor} rounded-full ${
                  selectedColor === color.name
                    ? "ring-2 ring-gray-900 ring-offset-2"
                    : ""
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-3">
          <span className="text-lg font-bold">Size</span>

          <div className="grid grid-cols-5 gap-px mt-3">
            {["XS", "S", "M", "L", "XL"].map((size, idx) => (
              <button
                key={idx}
                className={`size-12 text-center leading-none rounded-xl ${
                  size === "M"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3">
          <div className="text-base text-purple-500 leading-8 font-bold">
            34% Off
          </div>
          <div className="text-2xl font-bold leading-9">
            <span className="text-gray-500 line-through">$55</span>&nbsp;
            <span className="text-emerald-600">$49.99</span>
          </div>
        </div>

        <button
          onClick={handleAddToBag}
          className={`absolute bottom-0 right-0 text-base font-bold text-white px-6 py-5 rounded-tl-3xl ${
            selectedColor === "yellow"
              ? "bg-yellow-500 hover:bg-yellow-600"
              : selectedColor === "purple"
              ? "bg-purple-500 hover:bg-purple-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          Add to Bag
        </button>

        {isAdded && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-green-500 text-white text-lg font-bold py-3 px-5 rounded-lg animate-bounce">
              Item added to bag!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Day2;
