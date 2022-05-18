import Link from "next/link";
import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Link href="https://vercel.com/?utm_source=ElektronPlus&utm_campaign=oss" passHref>
                <a>
                    <img alt="Banner reklamowy Vercel" src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"/>
                </a>
            </Link>
        </footer>
    )
}