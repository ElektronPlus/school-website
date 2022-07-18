import { css } from '@emotion/react';
import { Alert } from 'components/navigation/Alert';
import { Header } from 'components/navigation/Header';
import { GetAlertQuery, UploadFileEntityResponse } from 'generated/graphql';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { PartialDeep } from 'type-fest';
import { MdMenu } from 'react-icons/md';
import { Popover } from '@headlessui/react';
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
  navigationRes: object;
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
          css={css`
            @media (min-width: 1279px) {
              display: none !important;
            }
          `}
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
