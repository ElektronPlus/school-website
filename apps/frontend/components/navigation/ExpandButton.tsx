import { MdExpandMore } from "react-icons/md";

export function ExpandButton({open, scale = 1}: {open: boolean, scale?: number}) {
    return (
      <MdExpandMore
        css={{
          fontSize: `${scale}rem`,
          transform: `rotate(${open ? 180 : 0}deg)`,
        }}
      />
    );
}