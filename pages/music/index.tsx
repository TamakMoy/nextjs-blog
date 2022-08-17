import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { Alert } from '../../components/alert';
import Layout from '../../components/layout';
import styles from './music.module.scss';

const Musics = () => {
    return (
        <Layout>
            <Head>
                <title>Moy的炼金工房222</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
            />
            <p className={styles.title}>Music page</p>
            <Link href="/">return homepage</Link>
            <Alert type="error" />
        </Layout>
    );
};

export default Musics;
