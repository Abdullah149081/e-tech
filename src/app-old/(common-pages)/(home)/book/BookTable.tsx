"use client";

import ReForm from "@/components/form/ReForm";
import ReInput from "@/components/form/ReInput";
import ReTextarea from "@/components/form/Retextarea";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import TitleSubTitle from "@/components/ui/titleSubTitle";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues } from "react-hook-form";
import { z } from "zod";

const bookTableSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  date: z.string().nonempty({ message: "Reservation date is required" }),
  totalPeople: z
    .string()
    .nonempty({ message: "Total People is required" })
    .transform((val) => parseInt(val, 10))
    .refine((val) => !Number.isNaN(val) && val > 0, {
      message: "Total People must be a positive number",
    }),
  message: z.string().optional(),
});

const BookTable = () => {
  const defaultValues = {
    name: "",
    email: "",
    date: "",
    totalPeople: "",
    message: "",
  };

  const handleSubmit = (values: FieldValues) => {
    console.log(values);
  };
  return (
    <div className="book-table-bg mb-8 lg:mb-[120px]">
      <Container className="py-8 lg:py-[120px]">
        <div className="flex flex-col items-start justify-start gap-10">
          <div className="flex flex-col items-start justify-start gap-4 self-stretch">
            <TitleSubTitle
              className="text-white"
              title="Book Your Table"
              subtitle="Book Now"
            />
            <p className="max-w-[545px] font-roboto text-base font-normal leading-normal text-[#f7f8f9]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
          <div className="flex max-w-[635px] flex-col items-start justify-start gap-8 self-stretch">
            <ReForm
              onSubmit={handleSubmit}
              defaultValues={defaultValues}
              resolver={zodResolver(bookTableSchema)}
            >
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-[30px] lg:gap-y-6">
                <ReInput name="name" placeholder="Your Name *" type="text" />
                <ReInput name="email" placeholder="Your Email" type="email" />
                <ReInput
                  name="date"
                  placeholder="Reservation Date"
                  type="date"
                />
                <ReInput
                  name="totalPeople"
                  placeholder="Total People"
                  type="number"
                />
              </div>

              <ReTextarea
                className="mt-6"
                name="message"
                placeholder="Message"
              />

              <Button className="mt-6 lg:mt-8" type="submit">
                Book Now
              </Button>
            </ReForm>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookTable;
