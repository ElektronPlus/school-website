import {
  Box,
  Container,
  Flex,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { GetFooterQuery } from '../../generated/graphql';
import styles from './footer.module.css';
import { PoweredByVercel } from './PoweredByVercel';
import { SocialMediaIcons } from './SocialMediaIcons';
import { TemplateAuthors } from './TemplateAuthors';

export default function Footer({
  footerData,
  footerLinks,
}: {
  footerData: GetFooterQuery;
  footerLinks: any;
}) {
  return (
    <footer className={styles.footer}>
      <Box
        width={'full'}
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
      >
        <Container width={'full'} as={Stack} py={10}>
          <Container m={4}>
            <Copyright footerData={footerData} />
          </Container>

          <HorizontalLine />
          <Container
            as={Stack}
            maxW={'full'}
            py={4}
            direction={'column'}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={'center'}
          >
            <Stack direction={'column'} spacing={6}>
              <SocialButtonsList footerData={footerData} />
            </Stack>
          </Container>
          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            justifyItems={{sm: 'center'}}
            spacing={8}
          >
            <Columns footerLinks={footerLinks} />
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex justifyContent={'center'}>
            {footerData.footer.data.attributes.showVercelBadge && (
              <PoweredByVercel />
            )}
          </Flex>
          <Text textAlign={'center'} pt={6} fontSize={'sm'}>
              <TemplateAuthors />
           </Text>
        </Box>
      </Box>
    </footer>
  );
}

function ListHeader({ children }: { children: React.ReactNode }) {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
}

function SocialButtonsList({ footerData }: { footerData: GetFooterQuery }) {
  return (
    <List display={'flex'}>
      {footerData.socialMedias.data.map((socialMedia) => {
        const { iconSlug, showInFooter, link } = socialMedia.attributes;

        if (!showInFooter) {
          return null;
        }

        return (
          <ListItem p={4} listStyleType={'none'} key={iconSlug}>
            <SocialMediaIcons href={link} label={iconSlug}>
              <img
                width="24px"
                height="24px"
                src={`https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/${iconSlug}.svg`}
              />
            </SocialMediaIcons>
          </ListItem>
        );
      })}
    </List>
  );
}

function HorizontalLine() {
  return (
    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    />
  );
}

function Copyright({ footerData }: { footerData: GetFooterQuery }) {
  return (
    <ReactMarkdown
      css={css`
        color: #718096;
      `}
      children={footerData.footer.data.attributes.copyright}
      rehypePlugins={[rehypeRaw]}
    />
  );
}

function Columns({ footerLinks }) {
  return footerLinks.map((column) => {
    return (
      <Stack key={column.uiRouterKey}>
        <ListHeader>{column.title}</ListHeader>
        <List>
          {column.items.map((item) => {
            return <ColumnLink key={item.uiRouterKey} link={item} />;
          })}
        </List>
      </Stack>
    );
  });
}

function ColumnLink({ link }) {
  return (
    <ListItem py={1} color={'gray.500'} key={link.uiRouterKey}>
      <Link key={link.uiRouterKey} href={link.path} passHref>
        <a key={link.uiRouterKey}>{link.title}</a>
      </Link>
    </ListItem>
  );
}
