import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/user";
import CartProvider from "./context/cart";
import Head from "next/head";

export const metadata = {
  title: "eBay Clone",
  description: "eBay Clone",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='apple-touch-icon'
          type='image/png'
          sizes='180x180'
          href='/images/apple-touch-icon.png'
        />
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </head>

      <body>
        <ToastContainer />
        <UserProvider>
          <CartProvider>{children}</CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
