import { Popover } from '@headlessui/react';
import { AnimatedMenuButton } from 'components/utils/symbols/AnimatedMenuButton';
import { Level } from 'react-accessible-headings';
import { Header } from '../Header';
import { PopoverPanel } from './mobile/PopoverPanel';

export function MobileMenu() {
  return (
    <Popover>
      {({ open }) => (
        <div
          css={{
            display: 'grid',
            margin: 'auto',
            padding: '16px',
          }}
        >
          <div css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Header />
            <Popover.Button>
              <AnimatedMenuButton open={open} />
            </Popover.Button>
          </div>
          <div>
            <Level>
              <div>
                <PopoverPanel />
              </div>
            </Level>
          </div>
        </div>
      )}
    </Popover>
  );
}

