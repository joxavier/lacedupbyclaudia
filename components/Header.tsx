import Image from 'next/image'

import styles from '../styles/header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a
                    href="https://metaparlour.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className={styles.logo}>
                        <Image src="/claudiaLogoHeader.png" alt="Metaparlour Logo" width={240} height={160} />
                    </span>
                </a>
            </div>
        </header>
    );
}
