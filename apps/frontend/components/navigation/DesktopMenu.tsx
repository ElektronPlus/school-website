import {
  Maybe,
  NavigationItem,
  UploadFileEntityResponse,
} from 'generated/graphql';
import { PartialDeep } from 'type-fest';
import { Header } from 'components/navigation/Header';
import Link from 'next/link';

function DesktopMenuLink({
  navigationItem,
}: {
  navigationItem: NavigationItem;
}) {
  return <li>{navigationItem.title}</li>;
}

function DesktopMenuLinks({
  navigationRes,
}: {
  navigationRes: Array<Maybe<NavigationItem>>;
}) {
  return (
    <ul css={{ display: 'flex', listStyleType: 'none', gap: '16px' }}>
      {navigationRes.map((item) => (
        <Link href={item.path} passHref>
          <a>
            <DesktopMenuLink navigationItem={item} key={item.uiRouterKey} />
          </a>
        </Link>
      ))}
    </ul>
  );
}

export default function DesktopMenu({
  header,
  navigationRes,
}: {
  navigationRes: Array<Maybe<NavigationItem>>;
  header: PartialDeep<UploadFileEntityResponse>;
}) {
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
      <Header header={header} />
      <DesktopMenuLinks navigationRes={navigationRes} />
    </div>
  );
}
