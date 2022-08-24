import { MaterialSymbol } from 'components/utils/symbols/MaterialSymbol';

export function AnimatedMenuButton({ open }: { open: boolean }) {
  const name = open ? 'close' : 'menu';

  return <MaterialSymbol aria-label="menu" name={name} css={{fontSize: '1.5rem'}} />;
}
