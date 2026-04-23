import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
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
      <body className="bg-slate-950 overflow-x-hidden">

        <NavbarWrapper>
          {children}
        </NavbarWrapper>

        <Footer />

      </body>
    </html>
  );
}