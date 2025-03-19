import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";

type InputProps = {
  name: string;
  placeholder?: string;
  className?: string;
};

const ReTextarea = ({ name, placeholder, className }: InputProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl className="w-full">
            <Textarea
              placeholder={placeholder}
              className={className}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

ReTextarea.defaultProps = {
  placeholder: "",
  className: "",
};

export default ReTextarea;
