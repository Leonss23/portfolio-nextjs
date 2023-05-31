import './globals.scss'

export const metadata = {
  title: 'Leonardo Gatti Portfolio',
  description: 'Nextjs portfolio.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
