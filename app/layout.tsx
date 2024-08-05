import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provider from "./PRovider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "SyncWrite",
  description: "your go-to collaborative text editor"
}
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ClerkProvider
    appearance = {{
      baseTheme: dark,
      variables: { colorPrimary: "#3371FF",
        fontSize: '16px'
      }
    }}
    >
      <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  )
}


