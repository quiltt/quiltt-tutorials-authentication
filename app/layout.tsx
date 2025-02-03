import "./globals.css";

import { Providers } from './providers'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers quilttProfileId="p_12yz8qVmHucM2yqv09KfPv">
          {children}
        </Providers>
      </body>
    </html>
  )
}
