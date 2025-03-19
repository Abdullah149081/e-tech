"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";

import assets from "@/assets";
import TitleSubTitle from "@/components/ui/titleSubTitle";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import MediaQuery from "react-responsive";
import FoodCard from "./FoodCard";

const foods = [
  {
    id: 1,
    name: "vegetables burger",
    img: assets.images.burger,
  },
  {
    id: 2,
    name: "Spacial Pizza",
    img: assets.images.pizza,
  },
  {
    id: 3,
    name: "Spacial French fries",
    img: assets.images.frenchFries,
  },
  {
    id: 4,
    name: "Cuisine Chicken",
    img: assets.images.friedShrimp,
  },
  {
    id: 5,
    name: "Fresh Sandwich",
    img: assets.images.sandwich,
  },
];

const PopularFood = () => {
  return (
    <div className="relative mt-8 bg-[#fbf7f2] lg:mt-[120px]">
      <Container className="py-8 pb-[84px] lg:py-[120px]">
        <TitleSubTitle
          title="Popular Food"
          subtitle="Crispy, Every Bite Taste"
        />
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
            AutoScroll({
              speed: 2,
            }),
          ]}
        >
          <CarouselContent className="-ml-1">
            {foods?.map((food) => (
              <CarouselItem
                key={food.id}
                className="mt-[60px] first:p-0 md:basis-3/5 lg:basis-[25%] lg:pl-8"
              >
                <div className="h-full">
                  <FoodCard food={food} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-10 hover:bg-white hover:text-res-primary lg:size-[60px]" />
          <CarouselNext className="size-10 hover:bg-white hover:text-res-primary lg:size-[60px]" />
        </Carousel>
      </Container>
      <MediaQuery minWidth={1600}>
        <div className="absolute bottom-[100px] left-0">
          <Image src={assets.images.topViewBell} alt="topViewBell" />
        </div>
      </MediaQuery>
    </div>
  );
};

export default PopularFood;
