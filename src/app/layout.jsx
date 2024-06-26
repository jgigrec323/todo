import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "sonner";
import { AppProvider } from "./context/AppContext";

export const metadata = {
  title: "Todo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster expand={false} position="top-right" richColors />
        <AppProvider>
          <main
            className={`${inter.className} 
        bg-neutral-950 
        text-white flex flex-col 
        justify-center items-center 
         w-screen h-screen gap-5
         p-28 max-[600px]:p-2`}
          >
            <Logo></Logo>
            <div className="flex w-full gap-6">
              <Sidebar></Sidebar>
              <MainContainer>{children}</MainContainer>
            </div>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
