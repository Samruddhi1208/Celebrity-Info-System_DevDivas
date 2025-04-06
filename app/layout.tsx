import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Celebrity Face Recognition",
  description: "Upload images of actors and actresses to get detailed information about them",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
  --primary: #0284c7;
  --muted: #f1f5f9;
  --foreground: #0f172a;
  --background: #ffffff;
  --border: #e2e8f0;
}

html, body {
  font-family: 'Inter', sans-serif;
  background-color: var(--background);
  color: var(--foreground);
  margin: 0;
  padding: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--muted);
  border-bottom: 1px solid var(--border);
}

.nav-item {
  margin: 0 1rem;
  font-weight: 500;
  color: var(--foreground);
  cursor: pointer;
}

.tab-switcher {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
}

.tab {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  background: var(--background);
  cursor: pointer;
}

.tab.active {
  background: var(--primary);
  color: white;
  font-weight: bold;
}

.content {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

.left-box, .right-box {
  flex: 1;
  padding: 1rem;
  margin: 0 1rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  background-color: var(--muted);
}

.button {
  padding: 0.75rem 1.5rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
            `
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
