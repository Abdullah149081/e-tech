import assets from "@/assets";
import Image from "next/image";

const aboutCardsContent = [
  {
    id: 1,
    title: "fast delivery",
    description: "Within 30 minutes",
    icon: assets.svgs.bag,
  },
  {
    id: 2,
    title: "absolute dining",
    description: "Best buffet restaurant",
    icon: assets.svgs.medal,
  },
  {
    id: 3,
    title: "pickup delivery",
    description: "Grab your food order",
    icon: assets.svgs.packageIcon,
  },
];

const AboutCard = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-8 self-stretch lg:flex-row">
      {aboutCardsContent.map((card) => (
        <div
          key={card.id}
          className="flex shrink grow basis-0 items-center justify-start gap-4"
        >
          <div className="relative flex size-[70px] items-center justify-center rounded-full bg-white shadow lg:size-[90px]">
            <Image
              src={card.icon}
              alt="icon"
              width={40}
              height={40}
              className="size-[31.11px] lg:size-10"
            />
          </div>
          <div className="flex shrink grow basis-0 flex-col items-start justify-start gap-0.5">
            <h2 className="self-stretch font-bebas_Neue text-2xl font-bold uppercase leading-9 tracking-wide text-[#091325] lg:text-3xl">
              {card.title}
            </h2>
            <h3 className="self-stretch font-roboto text-lg font-normal leading-relaxed text-[#091325] lg:text-xl lg:leading-loose">
              {card.description}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutCard;
