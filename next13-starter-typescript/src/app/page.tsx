import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/hoidanit.module.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HomePage',
  description: 'Description bla bla',
}

export default function Home() {
  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href="/facebook">
            <span className={y['red']}>Facebook</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          <Link href="/youtube">
            <span>Youtube</span>
          </Link>
        </li>
        <li style={{ margin: '20px 0' }}>
          <Link href="/tiktok">
            <span>Tiktok</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}
