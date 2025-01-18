import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} HTML to Markdown. All rights reserved.
        </p>
        <p className={styles.description}>
          Free online tool to convert HTML to Markdown format. Simple, fast, and reliable.
        </p>
      </div>
    </footer>
  )
} 