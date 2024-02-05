import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const Featured = () => {
  const sliders = [
    {
      url: "https://images.pexels.com/photos/19247579/pexels-photo-19247579/free-photo-of-cheeseburger-with-bacon-vegetables-and-mayonnaise-next-to-a-pile-of-french-fries-with-a-glass-of-ice-tea-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url :"https://images.pexels.com/photos/10518221/pexels-photo-10518221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url :"https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url :"https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prev = ()=>{
    setCurrentIndex(currentIndex===0?sliders.length - 1 :currentIndex-1)
  }
  const nxt = ()=>{
    setCurrentIndex(currentIndex===(sliders.length -1)?0:currentIndex+1)
  }
  const moveToNextSlide = (slideIndex)=>{
        setCurrentIndex(slideIndex)
  }
  return (
    <div className="group max-w-[1520px] mx-auto h-[500px] w-full px-4 py-4 relative">
      <div
        className="w-full h-full bg-center bg-cover rounded-2xl duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      >
        <div className="hidden group-hover:block absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] rounded-full p-2 bg-orange-700 text-white text-2xl cursor-pointer">
            <BsChevronCompactLeft onClick={prev}/>
        </div>
        <div className="hidden group-hover:block absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] rounded-full p-2 bg-orange-700 text-white text-2xl cursor-pointer">
            <BsChevronCompactRight onClick={nxt}/>
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
            {
              sliders.map((item , slideIndex)=>[
                    <div 
                    key={slideIndex}
                    onClick={()=>moveToNextSlide(slideIndex)}
                    className="text-2xl cursor-pointer">
                      <RxDotFilled/>
                    </div>
              ])
            }
      </div>
    </div>
  );
};
export default Featured;
