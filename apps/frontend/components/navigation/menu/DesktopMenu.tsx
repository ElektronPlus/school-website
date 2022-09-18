import { Header } from 'components/navigation/Header';
import { ButtonList } from 'components/navigation/menu/desktop/ButtonList';

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
      <ButtonList />
    </div>
  );
}
