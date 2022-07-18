import { useMediaQuery } from 'react-responsive';

export function Desktop({ children }) {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
}

export function Tablet({ children }) {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
}

export function Mobile({ children }) {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
}

export function Default({ children }) {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
}
