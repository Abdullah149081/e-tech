"use client";

import assets from "@/assets";
import Container from "@/components/ui/container";
import Image from "next/image";
import MediaQuery from "react-responsive";
import MarqueeHeader from "./components/marquee";
import SocialNav from "./components/SocialNav";
import MobileNav from "./mobileNav";
import Navbar from "./navbar";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full">
      <MarqueeHeader />
      <Container className="mt-4 rounded-lg border bg-white py-4 text-e-primary shadow-[0px_2px_15px_rgb(11,164,6)]">
        <div className="flex items-center justify-between gap-[60px] px-4">
          <div className="flex items-center justify-center gap-3">
            <figure>
              <Image src={assets.svgs.logo} alt="logo" width={80} />
            </figure>
            <p className="font-poppins text-4xl font-semibold">
              E-<span className="font-normal">T</span>ech
            </p>
          </div>
          <MediaQuery minWidth={1024}>
            <div className="flex items-center gap-4">
              <Navbar />
              <SocialNav />
            </div>
          </MediaQuery>
        </div>

        {/* Mobile navbar  */}
        <MediaQuery maxWidth={1024}>
          <MobileNav />
        </MediaQuery>
      </Container>
    </header>
  );
};

export default Header;
