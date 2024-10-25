import type { Metadata } from "next";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Merriweather, Roboto } from "next/font/google";
import { AppProvider } from "@/context/appContext";
import CookieConsent from "@/components/cookieConsent";
import { ToastContainer } from "react-toastify";
import WhatsAppButton from "@/components/Whatsapp";
const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
export const metadata: Metadata = {
  title: "CyberPro Group",
  description: "cyberPro Group Your Best CyberSecurity Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppProvider>
        <body
          className={`${roboto.variable} ${merriweather.variable} font-roboto`}
        >
          <Header />
          <CookieConsent />
          {children}
          <Footer />
          <WhatsAppButton/>
          <ToastContainer />
        </body>
      </AppProvider>
    </html>
  );
}
