// app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css"; // Your Tailwind/global CSS

export const metadata = {
  title: "Augustus Portfolio",
  description: "Personal portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}