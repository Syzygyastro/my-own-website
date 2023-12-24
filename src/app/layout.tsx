import './globals.css'
import {
  NavigationMenuDemo,
} from "@/app/navbar"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import FooterDemo from '@/components/ui/footer'
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Syzz.io',
  description: 'My peersonal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className='app-container flex flex-col h-screen w-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
          <div className='flex justify-center'>
            <NavigationMenuDemo />
          </div>
          {children}
          <p>
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            .<br />
            <br />
          </p>
          <FooterDemo />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
