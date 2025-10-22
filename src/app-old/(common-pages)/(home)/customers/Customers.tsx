"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import MediaQuery from "react-responsive";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";
import TitleSubTitle from "@/components/ui/titleSubTitle";
import CustomersCard from "./CustomersCard";

const Customers = () => {
  return (
    <div className="relative">
      <Container className="r-my pb-[50px] lg:pb-0">
        <TitleSubTitle
          title=" What Some of my Customers Say"
          subtitle=" Crispy, Every Bite Taste"
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
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="mt-6 basis-full pl-2 first:pl-0 lg:mt-[60px] lg:pl-6"
              >
                <CustomersCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:text-res-primary size-10 hover:bg-white lg:size-[60px]" />
          <CarouselNext className="hover:text-res-primary size-10 hover:bg-white lg:size-[60px]" />
        </Carousel>
      </Container>
      <MediaQuery minWidth={1600}>
        <div className="absolute left-0 top-[30px]">
          <Image src="https://placehold.it/24x24" alt="tomato" />
        </div>
      </MediaQuery>
    </div>
  );
};

export default Customers;
