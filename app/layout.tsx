import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Space_Grotesk } from "next/font/google"
import { AuthProvider } from "@/contexts/auth-context-new"
import { SubscriptionProvider } from "@/contexts/subscription-context-new"
import { Toaster } from "@/components/ui/toaster"
import { AuthModalWrapper } from "@/components/auth/auth-modal-wrapper"
import { InvisiblePWAHandler } from "@/components/pwa/invisible-pwa-handler"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Vocab World - AI Language Learning",
  description: "Learn languages with AI-powered vocabulary and premium TTS voices",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "VocabWorld"
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "application-name": "VocabWorld",
    "msapplication-TileColor": "#3b82f6",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "VocabWorld",
    "format-detection": "telephone=no",
    "mobile-web-app-status-bar-style": "default"
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/icons/icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" }
    ]
  },
  generator: "v0.app",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#3b82f6"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // For demo purposes, we'll use a simple customer ID
  // In a real app, this would come from your authentication system
  const demoCustomerId = "demo_customer_123"

  return (
    <html lang="en" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vocab World" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <Script
          src="https://js.puter.com/v2/"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans" style={{ 
        fontFamily: "var(--font-space-grotesk)",
        backgroundImage: "url('/bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <AuthProvider>
          <SubscriptionProvider>
            <AuthModalWrapper>
              <InvisiblePWAHandler />
              <div className="min-h-screen flex flex-col">
                <main className="flex-1">
                  {children}
                </main>
                <Toaster />
              </div>
            </AuthModalWrapper>
          </SubscriptionProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
