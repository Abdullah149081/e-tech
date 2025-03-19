import ApplyButton from "./ApplyButton";

const MarqueeHeader = () => {
  return (
    <div className="flex items-center gap-8 bg-white">
      <div className="marquee ml-8 max-w-[75%] py-2">
        <p className="my-2 text-xl tracking-wider text-e-primary">
          বিনামূল্যে ভর্তি চলছে !! যুব উন্নয়ন অধিদপ্তর, যুব ও ক্রীড়া মন্ত্রণালয়
          কর্তৃক বাস্তবায়িত ‘শিক্ষিত কর্মপ্রত্যাশি যুবদের ফ্রিল্যান্সিং
          প্রশিক্ষণের মাধ্যমে কর্মসংস্থান সৃষ্টির লক্ষে এই প্রকল্পের আওতায় ৬৪-টি
          জেলায় ৯০ দিন ব্যাপি ( ৬০০ ঘন্টা ) বিনামূল্যে ভর্তি চলছে ।
        </p>
      </div>
      <ApplyButton />
    </div>
  );
};

export default MarqueeHeader;
