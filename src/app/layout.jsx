import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} 
        bg-neutral-950 
        text-white flex flex-col 
        justify-center items-center 
         w-screen h-screen
         p-32`}
      >
        <Logo></Logo>
        <div>
          <Sidebar></Sidebar>
          {children}
        </div>
      </body>
    </html>
  );
}
