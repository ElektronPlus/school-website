
type Variants =  "base" | "lg" | "xl" | "2xl";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  variant?: Variants;
}

const VARIANT_STYLES: Record<Variants, string> = {
  base: "text-xl font-bold",
  lg: "text-2xl font-bold",
  xl: "text-xl font-bold",
  "2xl": "text-2xl font-bold",
}

export const Heading = ({ as, children, variant = "base", ...props }: HeadingProps) => {
  const Component = as;

  return (
    <Component {...props} className={VARIANT_STYLES[variant]}>
      {children}
    </Component>
  );
};
