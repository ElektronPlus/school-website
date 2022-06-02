import Image from 'next/image';
import { useContext } from 'react';
import { GlobalContext } from '../pages/_app';
import { getStrapiMedia } from '../services/media';
import styles from './branding.module.css';


export default function Branding() {
  const { logo } = useContext(GlobalContext);

  const { alt, width, height } = logo.data.attributes;

  console.log(logo)

  return (
      <h1 className={styles.h1}>
        <Image objectFit="contain" layout="fill" alt={alt} width={width} height={height} src={getStrapiMedia(logo)}></Image>
      </h1>
  );
}
