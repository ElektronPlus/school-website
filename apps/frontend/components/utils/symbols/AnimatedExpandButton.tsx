import { MaterialSymbol } from "components/utils/symbols/MaterialSymbol";

export function AnimatedExpandButton({
  open,
  scale = 1,
}: {
  open: boolean;
  scale?: number;
}) {
  return (
    <MaterialSymbol
      css={{
        fontSize: `${scale}rem`,
        transform: `rotate(${open ? 180 : 0}deg)`,
      }}
      name="expand_more"
    />
  );
}
