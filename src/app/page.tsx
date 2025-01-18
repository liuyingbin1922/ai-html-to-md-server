'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'

import styles from './page.module.css'

// 动态导入组件并禁用 SSR
// const Header = dynamic(() => import('@/components/Header'), {
//   ssr: false
// })

// const Footer = dynamic(() => import('@/components/Footer'), {
//   ssr: false
// })

// // 创建一个 NoSSR 包装器组件
// const NoSSR = dynamic(() => Promise.resolve(({children}) => <>{children}</>), {
//   ssr: false
// })


export default function Home() {
  const [url, setUrl] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)  // 添加复制状态

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)  // 2秒后重置复制状态
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('http://localhost:3000/read-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      
      if (!response.ok) {
        throw new Error('请求失败')
      }
      
      const data = await response.json()
      setContent(data.content)
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生错误')
    } finally {
      setLoading(false)
    }
  }

  return (
      <div className={styles.container}>
        <Head>
          <title>HTML to Markdown Converter - Free Online Tool</title>
          <meta name="description" content="Free online HTML to Markdown converter. Convert your HTML content to Markdown format easily and quickly. No registration required." />
          <meta name="keywords" content="html to markdown, markdown converter, html converter, free tool" />
        </Head>

        <div className={styles.container}>
          <Header />
          <main className={styles.main}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="请输入URL"
                required
                className={styles.input}
              />
              <button type="submit" disabled={loading} className={styles.button}>
                {loading ? '解析中...' : '解析'}
              </button>
            </form>
            
            {error && <div className={styles.error}>{error}</div>}
            
              
            <div className={styles.preview}>
              <div className={styles.preHeader}>
                <button 
                  onClick={handleCopy} 
                  className={styles.copyButton}
                  title="复制内容"
                >
                  {copied ? '已复制!' : '复制'}
                </button>
              </div>
              <div className={styles.preContent}>
                <pre>{content}</pre>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
  )
} 