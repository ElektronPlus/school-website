interface SymbolProps {
  name: string;
  fill?: boolean;
  weight?: number;
  grade?: number;
  opticalSize?: number
}

export const MaterialSymbol: React.FunctionComponent<
  SymbolProps & React.HTMLProps<HTMLSpanElement>
> = ({ children, name, fill = false, weight = 400, grade = 0, opticalSize = 48, ...props }) => (
  <span
    aria-hidden
    css={{
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize}`,
      fontFamily: 'Material Symbols Rounded',
      fontSize: '1.25rem',
    }}
    {...props}
  >
    {name}
  </span>
);
