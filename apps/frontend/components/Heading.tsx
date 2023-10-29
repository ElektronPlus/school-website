import clsx from "clsx";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  variant?: "base" | "lg" | "xl" | "2xl";
}

export const Heading = ({ as, children, variant = "base", ...props }: HeadingProps) => {
  const Component = as;

  return (
    <Component data-variant={variant} {...props} className={clsx(props.className, "heading")}>
      {children}
    </Component>
  );
};
