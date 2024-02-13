import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mani the SEO Specialist',
  description:
    'Hire an SEO Specialist with passion to for leveraging data-driven insights to optimize digital marketing strategies and drive business growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
