import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          HTML to Markdown
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>首页</Link>
          <Link href="/about" className={styles.link}>关于</Link>
        </nav>
      </div>
    </header>
  )
} 