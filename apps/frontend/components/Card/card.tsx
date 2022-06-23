import React from 'react';
import Link from 'next/link';
import { ArticleEntity } from '../../generated/graphql';
import StrapiImage from '../strapiImage';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';
import Moment from '../../lib/moment';
import {
  Center,
  useColorModeValue,
  Stack,
  Heading,
  Box,
  Text,
  Flex,
} from '@chakra-ui/react';
import {css} from '@emotion/react';

const ARTICLE_PATH = 'artykul';
const THUMBNAIL_MAX_CHARACTERS = 500;
const DATE_FORMAT = 'Do MMMM YYYY, HH:mm';

function ArticleLink({children, article,} : {children: React.ReactNode; article: ArticleEntity;}) {
  return (
    <Link passHref href={`/${ARTICLE_PATH}/${article.attributes.slug}`}>
      <a>{children}</a>
    </Link>
  );
}

function Category({ article } : { article: ArticleEntity }) {
  if (article.attributes.category.data === null) {
    return null;
  }
  return (
    <Link
      passHref
      href={`/kategoria/${article.attributes.category.data.attributes.slug}`}>
      <a>
        <span>{article.attributes.category.data.attributes.name}</span>
      </a>
    </Link>
  );
}

function CardContent({article, isThumbnail,} : {article: ArticleEntity; isThumbnail: boolean;}) {
  let content = article.attributes.content;
  let isShortened = false;
  if (isThumbnail) {
    if (content.length > THUMBNAIL_MAX_CHARACTERS) {
      content = content.substring(0, THUMBNAIL_MAX_CHARACTERS) + '...';
      isShortened = true;
    }
  }
  return (
    <>
      <ReactMarkdown
        css={css`color: #718096;`}
        children={content}
        rehypePlugins={[rehypeRaw]} />
      {isShortened ? (
        <Flex justifyContent="end" mt={4}>
          <Box 
            as='a' 
            color='blue.400' 
            fontWeight='500'
            css={css`&:hover{ text-decoration: underline; }`}
            href={`/${ARTICLE_PATH}/${article.attributes.slug}`} >
              Czytaj dalej
          </Box>
        </Flex>
      ) : null}
    </>
  );
}

function CardTitle({ article } : { article: ArticleEntity }) {
  return (
    <ArticleLink article={article}>
      <Heading
        color={useColorModeValue('gray.700', 'white')}
        fontSize={'2xl'}
        fontWeight={'medium'}
        as="h3"
        fontFamily={'body'}>
        {article.attributes.title}
      </Heading>
    </ArticleLink>
  );
}

function CardDate({ article } : { article: ArticleEntity }) {
  return <Moment format={DATE_FORMAT}>{article.attributes.publishedAt}</Moment>;
}

export function CardMeta({ article } : { article: ArticleEntity }) {
  return (
    <Text
      color={'blue.400'}
      textTransform={'uppercase'}
      fontWeight={500}
      fontSize={'sm'}
      letterSpacing={1.1} >
        <CardDate article={article} />
          {article.attributes.category.data !== null && <BulletPoint />}
        <Category article={article} />
    </Text>
  );
}

function ArticleAuthor({ article } : { article: ArticleEntity }) {
  if (article.attributes.author.data === null) {
    return null;
  }
  return (
    <div>
      <span>📝 {article.attributes.author.data.attributes.name}</span>
    </div>
  );
}

function Card({article, isThumbnail} : {article: ArticleEntity; isThumbnail: boolean;}) {
  return (
    <li
      css={css`list-style-type: none;`}
      key={`article-${article.attributes.slug}`}>
      <article>
        <Center p={4}>
          <Box
            border="1px"
            borderColor="gray.200"
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'lg'}
            rounded={'md'}>
            <Box bg={'gray.100'}>
              <StrapiImage
                image={article.attributes.image}
                imageProps={{ style: { borderRadius: '4px' } }} />
            </Box>
            <Stack p={6}>
              <CardMeta article={article} />
              <CardTitle article={article} />
              <CardContent article={article} isThumbnail={isThumbnail} />
              {!isThumbnail ? <ArticleAuthor article={article} /> : null}
            </Stack>
          </Box>
        </Center>
      </article>
    </li>
  );
}

function BulletPoint() {
  return <span>&nbsp;&bull;&nbsp;</span>;
}

export default Card;
