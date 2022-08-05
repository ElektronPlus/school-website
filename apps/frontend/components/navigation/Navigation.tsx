import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Alert } from 'components/navigation/Alert';
import { DesktopMenu } from 'components/navigation/menu/DesktopMenu';
import { MobileMenu } from 'components/navigation/menu/MobileMenu';
import { DesktopContainer, TabletAndBelow } from 'components/utils/responsive';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const theme = useTheme();

  const [isWindowScrolled, setIsWindowScrolled] = useState(false);

  function handleWindowScroll() {
    if (window.scrollY > 0) {
      setIsWindowScrolled(true);
    } else {
      setIsWindowScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
  });

  const scrolledNav = css`background-color: ${theme.color.background.transculent.hexa()}; backdrop-filter: blur(48px) saturate(5);`;

  return (
    <div
      css={[{ position: 'sticky', top: 0, zIndex: 100, transition: '0.3s cubic-bezier(0.22, 0.61, 0.36, 1)' }, isWindowScrolled && scrolledNav]}
    >
      <nav
        css={{
          borderBottom: `${theme.color.border.primary} 1px solid`,
          marginBottom: '50px',
        }}
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
