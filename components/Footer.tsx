import Image from 'next/image'

import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <a
                    href="https://metaparlour.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/metaparlour.png" alt="Metaparlour Logo" width={240} height={160} />
                    </span>
                </a>
            </div>
        </footer>
    );
}
