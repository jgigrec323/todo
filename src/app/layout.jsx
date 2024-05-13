import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";

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
         w-screen h-screen gap-5
         p-28`}
      >
        <Logo></Logo>
        <div className="flex w-full gap-6">
          <Sidebar></Sidebar>
          <MainContainer>{children}</MainContainer>
        </div>
      </body>
    </html>
  );
}
