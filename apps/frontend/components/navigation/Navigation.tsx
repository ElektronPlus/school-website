import { css } from '@emotion/react';
import { Alert } from 'components/navigation/Alert';
import { DesktopMenu } from 'components/navigation/menu/desktop/DesktopMenu';
import { MobileMenu } from 'components/navigation/menu/mobile/MobileMenu';
import { DesktopContainer, TabletAndBelow } from 'components/utils/responsive';

export default function Navigation() {
  return (
    <div
      css={{
        position: 'sticky',
        zIndex: 10,
        top: 0,
        backdropFilter: 'blur(48px) saturate(5)',
        backgroundColor: '#ffffffcc',
      }}
    >
      <nav
        css={css`
          border-bottom: #d9d9d9 1px solid;
          margin-bottom: 50px;
        `}
      >
        <TabletAndBelow>
          <MobileMenu />
        </TabletAndBelow>
        <DesktopContainer>
          <DesktopMenu />
        </DesktopContainer>
        <Alert />
      </nav>
    </div>
  );
}
