import { cn } from "@/lib/utils";

export type TChildren = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className }: TChildren): JSX.Element {
  return (
    <section className={cn("res-container", className)}>{children}</section>
  );
}

export default Container;
