import styled from '@emotion/styled';

// https://medium.com/fredwong-it/react-nextjs-ssr-and-responsive-design-ae33e658975c

export const DesktopContainer = styled.div`
  @media (max-width: 1280px) {
    display: none !important;
  }
`;
export const TabletAndBelow = styled.div`
  @media (min-width: 1279px) {
    display: none !important;
  }
`;
