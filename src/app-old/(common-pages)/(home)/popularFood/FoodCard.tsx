import Image, { StaticImageData } from "next/image";

interface FoodCardProps {
  food: {
    id: number;
    name: string;
    img: StaticImageData;
  };
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className="flex flex-col items-center justify-start gap-8 bg-white p-8">
      <div className="flex items-center justify-center">
        <Image
          className="h-[132px] object-cover"
          src={food.img ?? "https://via.placeholder.com/186x124"}
          alt="food"
          width={186}
          height={124}
        />
      </div>
      <div className="h-[0px] w-[57px] border-2 border-[#bd1f17]" />
      <div className="flex flex-col items-center justify-start self-stretch">
        <h2 className="self-stretch text-center font-bebas_Neue text-2xl font-bold leading-9 tracking-wide text-[#091325]">
          {food.name}
        </h2>
        <p className="self-stretch text-center font-roboto text-base font-normal leading-loose text-[#091325]">
          Barbecue Italian cuisine pizza
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
