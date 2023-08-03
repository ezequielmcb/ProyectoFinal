import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App del clima',
  description: 'App para saber el clima',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <script src="https://kit.fontawesome.com/302e5dde8e.js" crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
