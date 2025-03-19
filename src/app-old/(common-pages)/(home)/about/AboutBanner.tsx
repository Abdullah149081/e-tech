import assets from "@/assets";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className="r-about-banner-img h-[460px] w-full flex-[1]">
      <div className="ml-3 mt-4 h-[73.14px] w-[128.99px] rounded-[10.70px] bg-white p-2 shadow lg:ml-6 lg:mt-[30.25px] lg:h-[136.75px] lg:w-[241.17px] lg:rounded-[20px] lg:p-[22px]">
        <div className="flex items-center justify-center gap-2.5">
          <div className="relative flex size-[50.39px] items-center justify-center rounded-full bg-[#f1f1f1] lg:size-[94.21px]">
            <div className="absolute inset-0">
              <div className="relative">
                <Image src={assets.svgs.circleYellow} alt="circleYellow" />
                <div className="absolute left-[5px] top-1 size-[8.76px] rounded-full border-2 border-[#febf00] bg-white lg:top-2.5 lg:h-[16.38px] lg:w-[16.38px] lg:border-4" />
              </div>
            </div>
            <div className="flex items-center justify-center font-open_Sans text-sm font-bold leading-none text-[#181818] lg:text-[26px] lg:leading-[30.16px]">
              50+
            </div>
          </div>
          <p className="font-open_Sans text-[8.56px] font-semibold leading-3 text-[#181818] lg:text-base lg:leading-normal">
            Market <br />
            Experiences
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
