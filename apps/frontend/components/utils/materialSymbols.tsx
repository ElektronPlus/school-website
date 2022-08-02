export function MaterialSymbol({ name }: { name: string }) {
  return (
    <span
      aria-hidden
      css={{
        fontVariationSettings: "'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48",
        fontFamily: 'Material Symbols Rounded',
        fontSize: '1.25rem',
      }}
    >
      {name}
    </span>
  );
}
