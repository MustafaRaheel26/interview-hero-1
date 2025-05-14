import "./index.css";
import heroImage from "./assets/hero_bg.jpg";
import leftImage from "./assets/child_face_left.jpg";
import centerImage from "./assets/child_face_center.jpg";
import rightImage from "./assets/child_face_right.jpg";

export default function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden font-lato text-white">
      {/* Hero Section */}
      <section
        className="w-full h-[1012px] bg-cover bg-center flex justify-center items-center mx-auto px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="w-[637px] h-[327px] flex flex-col items-center text-center gap-[40px]">
          <h1 className="text-[96px] leading-[88px] font-bold">
            No Kid Hungry
          </h1>
          <p className="text-[24px] leading-[28px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque sit amet tincidunt sapien. Sed at velit at mauris
            dapibus porta. Aenean eget diam.
          </p>
        <button className=" bg-white text-black text-[22px] leading-[32px] font-small px-[16px] py-[10px] border-none  rounded-[36px]">
            Donate
          </button>
        </div>
      </section>

      {/* Lower 3 Images Section */}
      <section className="w-full h-[524px] flex mx-auto">
        {/* Reusable Style for Image Blocks */}
        {[
          { img: leftImage, title: "356k+" },
          { img: centerImage, title: "3,125" },
          { img: rightImage, title: "$0.34" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex-1 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className=" bottom-0 left-0 w-full h-auto pt-[300px] pl-[28px] pr-[66px] text-left text-white">
              <h3 className="text-[32px] font-extrabold leading-[36px] opacity-70">
                {item.title}
              </h3>
              <p className="text-[24px] leading-[30px] mt-2  opacity-60">
                Lorem ipsum dolor sit amet, consect adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
