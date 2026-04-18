import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Augustus Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950">

        <Navbar />

        {/* IMPORTANT: padding top to avoid overlap */}
        <div className="pt-20">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}