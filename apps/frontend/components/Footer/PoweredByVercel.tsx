import Link from 'next/link';

export function PoweredByVercel() {
  return (
    <Link
      href="https://vercel.com/?utm_source=ElektronPlus&utm_campaign=oss"
      passHref
    >
      <a>
        <img
          alt="Banner reklamowy Vercel"
          src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" />
      </a>
    </Link>
  );
}
