"use client";

import assets from "@/assets";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import { useState } from "react";
import MediaQuery from "react-responsive";
import AboutBanner from "./AboutBanner";
import AboutCard from "./AboutCard";

const buttonTabs = [
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Experience",
  },
  {
    id: 3,
    name: "Contact",
  },
];

type TabContent = {
  [key: number]: {
    title: string;
    content: string;
  };
};

const tabContent: TabContent = {
  1: {
    title: "Discover Our Culinary Journey and Passion for Flavor",
    content:
      "Our culinary journey is rooted in a passion for flavor, crafted with a blend of traditional techniques and innovative flair. Every dish we serve is a reflection of dedication, quality ingredients, and a deep understanding of the art of cooking. We strive to create memories with each bite.",
  },
  2: {
    title: "Experience Years of Expertise in Fine Dining Services",
    content:
      "With over a decade of fine dining expertise, our team specializes in delivering outstanding meals and memorable experiences. We focus on precision, service, and quality, ensuring every guest enjoys an exceptional visit. Join us to savor dishes made with culinary mastery and heartfelt care.",
  },
  3: {
    title: "Contact Us for Inquiries, Reservations, or Catering",
    content:
      "We welcome your inquiries, whether it's for a special reservation, a catering event, or general questions. Reach us by phone or visit us to discuss how we can make your occasion unique. Our team is dedicated to providing seamless, personalized assistance for any of your dining needs.",
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="relative">
      <Container className="r-my">
        <div className="flex flex-col gap-[50px] lg:gap-[74px]">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-20">
            <AboutBanner />

            <div className="flex flex-col items-start justify-start gap-8 lg:mt-0 lg:w-[624px]">
              <div className="flex items-center justify-start gap-4 self-stretch border-b border-[#b52b1d]">
                {buttonTabs.map((tab) => (
                  <Button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`font-roboto text-sm font-medium ${
                      activeTab === tab.id
                        ? "bg-[#b52b1d] text-white"
                        : "bg-transparent text-[#333333]"
                    }`}
                  >
                    {tab.name}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col gap-[18px]">
                <h2 className="font-bebas_Neue text-[40px] font-bold leading-[48px] text-[#181818] lg:text-[62px] lg:leading-[62px]">
                  {tabContent[activeTab].title}
                </h2>
                <p className="font-roboto text-base font-normal leading-relaxed text-[#333333]">
                  {tabContent[activeTab].content}
                </p>
              </div>

              <div className="flex items-start justify-start gap-4 self-stretch lg:gap-8">
                <div>
                  <Button className="h-full px-6 py-4">About More</Button>
                </div>
                <div className="flex items-center justify-center gap-2 py-4 lg:pr-6">
                  <Image
                    src={assets.svgs.callAlt}
                    alt="callAlt"
                    width={24}
                    height={24}
                  />
                  <p className="text-center font-roboto text-sm font-bold uppercase leading-normal text-[#091325] lg:text-lg">
                    +88 3426 739 485
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AboutCard />
        </div>
      </Container>

      <MediaQuery minWidth={1024}>
        <div className="absolute -bottom-10 right-0">
          <Image src={assets.images.bowlWhiteImg} alt="bowlWhiteImg" />
        </div>
      </MediaQuery>
    </div>
  );
};

export default About;
