"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Navbar from "./navbar";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify size={24} className="cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="max-w-[280px]">
        <div className="mt-10">
          <Navbar />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
