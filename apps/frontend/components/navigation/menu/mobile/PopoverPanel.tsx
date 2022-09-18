import { Popover } from '@headlessui/react';
import { ParentLinks } from './ParentLinks';

export function PopoverPanel() {
  return <Popover.Panel
    css={{
      padding: '16px 0 0 0',
      overflowY: 'scroll',
      height: '70vh',
    }}
  >
    {/* <div css={{ padding: '8px 0' }}>
              <Search />
            </div> */}
    <ParentLinks />
  </Popover.Panel>;
}
