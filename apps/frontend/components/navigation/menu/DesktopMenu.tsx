import { Header } from 'components/navigation/Header';
import { ParentLinks } from 'components/navigation/menu/desktop/ParentLinks';

export function DesktopMenu() {
  return (
    <div
      css={{
        maxWidth: '1280px',
        margin: 'auto',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Header />
      <ParentLinks />
    </div>
  );
}
