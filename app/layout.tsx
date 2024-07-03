import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import StarsCanvas from '@/components/main/StarsBackground'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ibiimemon.com/'),
  title: 'Ali Yar Khan - SWE | MERN | React Native | Flutter',
  description:
    'Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.',
  keywords: [
    'Developer',
    'Portfolio',
    'Developer Portflio',
    'Ali Yar Khan',
    'Next.js',
    'React',
    'MERN',
    'ReactNative',
    'Flutter',
    'Full Stack'
  ],
  openGraph: {
    title: 'Ali Yar Khan - SWE | MERN | React Native | Flutter',
    description:
      'Full Stack Web & Mobile App Developer from Pakistan with 4+ years of expertise. Senior Software Engineer. Specializing full stack apps, mobile apps, and JavaScript technologies.',
    images: '/OpenGraph.jpg'
  },
  alternates: {
    canonical: 'https://ibiimemon.com/'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
