import styles from './page.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <h1>关于我们</h1>
        <p>
          HTML to Markdown是一个免费的在线工具，帮助用户将HTML内容快速转换为Markdown格式。
          我们致力于提供简单、快速、可靠的转换服务，无需注册即可使用。
        </p>
        <h2>为什么选择我们？</h2>
        <ul>
          <li>完全免费</li>
          <li>无需注册</li>
          <li>快速转换</li>
          <li>保护隐私</li>
        </ul>
      </main>

      <Footer />
    </div>
  )
} 