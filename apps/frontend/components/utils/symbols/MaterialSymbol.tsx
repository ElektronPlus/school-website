interface SymbolProps {
  name: string;
}

export const MaterialSymbol: React.FunctionComponent<
  SymbolProps & React.HTMLProps<HTMLSpanElement>
> = ({ children, name, ...props }) => (
  <span
    aria-hidden
    css={{
      fontVariationSettings: "'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48",
      fontFamily: 'Material Symbols Rounded',
      fontSize: '1.25rem',
    }}
    {...props}
  >
    {name}
  </span>
);
