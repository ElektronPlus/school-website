import { css } from '@emotion/react';
import { PoweredByVercel } from 'components/footer/PoweredByVercel';
import { SocialMediaIcon } from 'components/footer/SocialMediaIcon';
import { TemplateAuthors } from 'components/footer/TemplateAuthors';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { GlobalContext } from 'pages/_app';
import { useContext } from 'react';
import { H, Level } from 'react-accessible-headings';
import { MdMail } from 'react-icons/md';

export default function Footer() {
  const context = useContext(GlobalContext);

  return (
    <footer css={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
      <Level>
        <div
          css={{ width: '100%', backgroundColor: '#F7FAFC', color: '#2D3748' }}
        >
          <div
            css={{
              width: '100%',
              padding: '10px 0',
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '60ch',
              margin: 'auto',
            }}
          >
            <div css={{ padding: '16px' }}>
              <Copyright />
            </div>

            <HorizontalLine />
            <div
              css={{
                display: 'flex',
                maxWidth: '100%',
                padding: '16px 0',
                flexDirection: 'column',
              }}
            >
              <div css={{ display: 'flex', flexDirection: 'column' }}>
                <SocialButtonsList />
              </div>
            </div>
            <Columns />
          </div>
          <div css={{ padding: '16px' }}>
            <HorizontalLine />
            <p css={{ textAlign: 'center', padding: '8px' }}>
              <TemplateAuthors />
            </p>
            <div css={{ display: 'flex', padding: '16px' }}>
              <PoweredByVercel />
            </div>
          </div>
        </div>
      </Level>
    </footer>
  );
}

function ListHeader({ children }: { children: React.ReactNode }) {
  return (
    <H
      css={{
        fontWeight: 500,
        fontSize: '1.25rem',
      }}
    >
      {children}
    </H>
  );
}

function SocialButtonsList() {
  const context = useContext(GlobalContext);

  const socialMedias = context.footerContent.socialMedias.data;
  const email = context.footerContent.footer.data.attributes.email;

  return (
    <ul css={{ display: 'flex', gap: '16px', margin: 'auto' }}>
      {socialMedias.map((socialMedia) => {
        const { iconSlug, showInFooter, link } = socialMedia.attributes;

        if (!showInFooter) {
          return null;
        }

        return (
          <li css={{ padding: '4px', listStyleType: 'none' }} key={iconSlug}>
            <SocialMediaIcon href={link} label={iconSlug}>
              <img
                width="24px"
                height="24px"
                alt={iconSlug}
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/${iconSlug}.svg`}
              />
            </SocialMediaIcon>
          </li>
        );
      })}
      <li css={{ padding: '4px', listStyleType: 'none' }} key="email">
        <SocialMediaIcon href={`mailto:${email}`} label="email">
          <MdMail
            css={{
              width: '24px',
              height: '24px',
              color: 'black',
            }}
          />
        </SocialMediaIcon>
      </li>
    </ul>
  );
}

function HorizontalLine() {
  return <div css={{ borderTop: '1px solid #E2E8F0' }} />;
}

function Copyright() {
  const context = useContext(GlobalContext);

  const copyright = context.footerContent.footer.data.attributes.copyright;

  return (
    <div
      css={{
        color: '#718096',
      }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(copyright),
      }}
    />
  );
}

function Columns() {
  const context = useContext(GlobalContext);
  const footerLinks = context.footerLinks.renderNavigation;

  return (
    <div
      css={css`
        padding: 16px;
        @media (min-width: 1000px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
      `}
    >
      {footerLinks.map((column) => {
        return (
          <div key={column.uiRouterKey}>
            <ListHeader>{column.title}</ListHeader>
            <ul css={{ margin: 0, padding: 0 }}>
              {column.items.map((item) => (
                <ColumnLink key={item.uiRouterKey} link={item} />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function ColumnLink({ link }) {
  return (
    <li
      css={{ color: '#718096', listStyleType: 'none', padding: '4px' }}
      key={link.uiRouterKey}
    >
      <Link key={link.uiRouterKey} href={link.path} passHref>
        <a key={link.uiRouterKey}>{link.title}</a>
      </Link>
    </li>
  );
}
