import { useEffect, useRef } from "react";
import { PhotoService } from "../data/indext";
import "../App.css";

export default function Slider() {
  const sliderRef = useRef<HTMLUListElement | null>(null); // Reference to the slider element
  let isDown = false;
  let startX: number = 0;
  let scrollLeft: number = 0;

  const end = () => {
    isDown = false;
    sliderRef.current?.classList.remove("active");
  };

  const start = (e: MouseEvent | TouchEvent) => {
    if (!sliderRef.current) return;
    isDown = true;
    sliderRef.current.classList.add("active");
    const pageX = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX;
    startX = pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const move = (e: MouseEvent | TouchEvent) => {
    if (!isDown || !sliderRef.current) return;

    e.preventDefault();
    const pageX = (e as MouseEvent).pageX || (e as TouchEvent).touches[0].pageX;
    const x = pageX - sliderRef.current.offsetLeft;
    const dist = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - dist;
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    // Event Listeners
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);

    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);

    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);

    return () => {
      // Cleanup listeners on unmount
      slider.removeEventListener("mousedown", start);
      slider.removeEventListener("touchstart", start);

      slider.removeEventListener("mousemove", move);
      slider.removeEventListener("touchmove", move);

      slider.removeEventListener("mouseleave", end);
      slider.removeEventListener("mouseup", end);
      slider.removeEventListener("touchend", end);
    };
  }, []);

  const Slide = ({ img }: { img: string }) => {
    return (
      <li className="item">
        <div className="image" onDragStart={(e) => e.preventDefault()}>
          <img
            src={img}
            alt="Slide Image"
            className="slider-img w-full h-[360px] max-md:h-[360px] rounded-lg max-xs1:h-[270px] max-xs2:h-[270px] max-sm:h-[300px]"
          />
        </div>
      </li>
    );
  };

  return (
    <div className="wrapper">
      <ul className="items" ref={sliderRef}>
        {PhotoService.map((item, index) => {
          return <Slide key={index} img={item.itemImageSrc as string} />;
        })}
      </ul>
    </div>
  );
}
