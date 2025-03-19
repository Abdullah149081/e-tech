import assets from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ApplyButton = () => {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Image
          src={assets.icons.laptop}
          alt="apply button"
          width={40}
          height={40}
        />
        <p className="font-bold text-e-primary">বিনামূল্যে ভর্তি </p>
      </div>
      <Button className="bg-e-primary text-white">Apply Now</Button>
    </div>
  );
};

export default ApplyButton;
