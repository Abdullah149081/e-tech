import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

type InputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  labelClassName?: string;
};

const ReInput = ({
  type,
  name,
  label,
  placeholder,
  disabled,
  className,
  labelClassName,
}: InputProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={labelClassName}>{label}</FormLabel>}
          <FormControl className="w-full">
            <Input
              type={type}
              className={className}
              placeholder={placeholder}
              {...field}
              disabled={disabled}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

ReInput.defaultProps = {
  placeholder: "",
  disabled: false,
  className: "",
  labelClassName: "",
  label: "",
};

export default ReInput;
