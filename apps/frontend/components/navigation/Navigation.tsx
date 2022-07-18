import { css } from '@emotion/react';
import { Alert } from 'components/navigation/Alert';
import { GetAlertQuery, UploadFileEntityResponse, Maybe, NavigationItem } from 'generated/graphql';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { PartialDeep } from 'type-fest';
import { TabletAndBelow } from 'components/utils/responsive';

const DynamicMobileMenu = dynamic(
  () => import('components/navigation/MobileMenu'),
  {
    suspense: true,
  }
);

export default function Navigation({
  header,
  navigationRes,
  alertData,
}: {
  navigationRes: Array<Maybe<NavigationItem>>;
  header: PartialDeep<UploadFileEntityResponse>;
  alertData: GetAlertQuery;
}) {
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
        <TabletAndBelow
        >
          <Suspense>
            <DynamicMobileMenu navigationRes={navigationRes} header={header} />
          </Suspense>
        </TabletAndBelow>

        {alertData.alert.data.attributes.isVisible && (
          <Alert
            link={alertData.alert.data.attributes.link}
            message={alertData.alert.data.attributes.message}
          />
        )}
      </nav>
    </div>
  );
}
