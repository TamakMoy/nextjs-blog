import Link from 'next/link';
import styles from './layout.module.scss';

export default function Layout({ children }: any) {
    return <div className={styles.container}>
        {children}
        <Link href="/">Back to home</Link>
    </div>
}
