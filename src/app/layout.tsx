
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/theme-toggle'
import { Toaster } from "@/components/ui/sonner" 
import { Link } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdmyBRAND Insights',
  description: 'AI-Powered Analytics Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                  <Link className="mr-6 flex items-center space-x-2" href="/">
                    <span className="hidden font-bold sm:inline-block mr-[1rem]">ADmyBRAND Insights</span>
                  </Link>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                  <ModeToggle />
                </div>
              </div>
            </header>
            <div className="flex flex-col h-screen">
              {/* ... Header remains the same ... */}
              {children}
              <Toaster position="top-right" richColors /> {/* Add Toaster here */}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}