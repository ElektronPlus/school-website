import { Disclosure } from '@headlessui/react';
import { NavigationLink } from 'components/utils/NavigationLink';
import { NavigationItem } from 'generated/graphql';
import { H } from 'react-accessible-headings';
import { PartialDeep } from 'type-fest';
import { AnimatedExpandButton } from '../../../utils/symbols/AnimatedExpandButton';

export function ParentLink({ item, open }: { item: PartialDeep<NavigationItem>; open: boolean; }) {
  return <Disclosure.Button
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      fontWeight: 500,
      padding: '8px 0',
      fontSize: '1.15rem',
    }}
  >
    <H><NavigationLink navigationItem={item} /></H>
    <AnimatedExpandButton open={open} scale={1.5} />
  </Disclosure.Button>;
}
