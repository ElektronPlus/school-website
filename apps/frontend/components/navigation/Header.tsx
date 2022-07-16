import Image from 'next/image';
import { H } from 'react-accessible-headings';

export function Header({
  src,
  alternativeText = 'Logo',
}: {
  src: string;
  alternativeText?: string;
}) {
  return (
    <H
      css={{
        position: 'relative',
        width: '100%',
        height: '2rem',
        display: 'block',
      }}
    >
      <Image
        objectFit="contain"
        layout="fill"
        sizes="16rem"
        priority
        alt={alternativeText}
        src={src}
      ></Image>
    </H>
  );
}
