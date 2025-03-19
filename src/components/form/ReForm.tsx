/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Form } from "../ui/form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

const ReForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues = {},
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig.resolver = resolver;
  }

  if (defaultValues) {
    formConfig.defaultValues = defaultValues;
  }

  const methods = useForm(formConfig);
  const { handleSubmit, reset } = methods;

  const submit: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Form {...methods}>
      <form className="w-full" onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </Form>
  );
};

export default ReForm;
