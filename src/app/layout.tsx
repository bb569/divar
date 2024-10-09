import type { Metadata } from "next";
import "./globals.css";
import yekan from "@/fonts/font";
import { ThemeProvider } from "next-themes";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "یافت آباد",
  description: "نرو تا یافت آباد برو تو یافت آباد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="fa-IR">
      <body className={yekan.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <Header />
            <section>{children}</section>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
