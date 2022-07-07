import Link from 'next/link';
import Image from 'next/image';

export function PoweredByVercel() {
  return (
    <Link
      href="https://vercel.com/?utm_source=ElektronPlus&utm_campaign=oss"
      passHref
    >
      <a>
        <Image
          width="222px"
          height="44px"
          alt="Powered By Vercel"
          src="https://strapi.elektronplus.pl/uploads/powered_by_vercel_42e6a757ad.svg" />
      </a>
    </Link>
  );
}
