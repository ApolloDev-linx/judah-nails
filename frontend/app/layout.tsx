import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";

export const metadata = {
  title: "Judah Nails",
  description: "Soothing, clean, detailed nail care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}

