import { css } from '@emotion/react';
import { Alert } from 'components/navigation/Alert';
import {
  GetAlertQuery,
  UploadFileEntityResponse,
  Maybe,
  NavigationItem,
} from 'generated/graphql';
import { PartialDeep } from 'type-fest';
import { DesktopContainer, TabletAndBelow } from 'components/utils/responsive';
import { MobileMenu } from 'components/navigation/MobileMenu';
import { DesktopMenu } from 'components/navigation/DesktopMenu';

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
        <TabletAndBelow>
            <MobileMenu navigationRes={navigationRes} header={header} />
        </TabletAndBelow>
        <DesktopContainer>
            <DesktopMenu navigationRes={navigationRes} header={header}/>
        </DesktopContainer>

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
