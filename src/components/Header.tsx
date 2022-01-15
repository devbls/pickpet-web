import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/images/logo.webp';
import styles from '../styles/components/header.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href="/" passHref>
        <div className={styles.logoContainer}>
          <Image src={logo} />
        </div>
      </Link>
      <nav>
        <Link href="/">
          <a>PÁGINA INICIAL</a>
        </Link>
        <div className={styles.itemDivider} />
        <Link href="/">
          <a>PETS</a>
        </Link>
        <div className={styles.itemDivider} />
        <Link href="/">
          <a>CADASTRO</a>
        </Link>
        <div className={styles.itemDivider} />
        <Link href="/">
          <a>ONG&apos;S</a>
        </Link>
        <div className={styles.itemDivider} />
        <Link href="/">
          <a>QUEM SOMOS</a>
        </Link>
      </nav>
    </header>
  );
}
