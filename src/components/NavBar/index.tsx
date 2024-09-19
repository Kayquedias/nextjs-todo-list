import Image from 'next/image'

import styles from './styles.module.scss'

import LogoText from '@/components/assets/logo-text.svg'

export function NavBar() {
  return (
    <header className={styles.heading}>
      <div className={styles.logoWrapper}>
        <Image src={'/logo-image.png'} alt="" width={32} height={32} />
        <Image src={LogoText} alt="" />
      </div>

      <h1 className={styles.title}>Bem vindo de volta, Marcus</h1>

      <span className={styles.dateInfo}>Segunda, 01 de dezembro de 2025</span>
    </header>
  )
}
