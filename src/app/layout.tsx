export const metadata = {
  title: 'Studio Raizes',
  description: 'Agendamento de tranças online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <header>HEADER</header>
      <body>{children}</body>
    </html>
  )
}
