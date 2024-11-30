import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Winter DSOC Leaderboard",
  description: "Leaderboard for the Winter DSOC (Developers' Summer of Code)",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="snowflakes" aria-hidden="true">
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
          <div className="snowflake">❅</div>
          <div className="snowflake">❆</div>
        </div>
        {children}
      </body>
    </html>
  )
}

