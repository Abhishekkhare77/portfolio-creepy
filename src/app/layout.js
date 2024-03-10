import { Creepster } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import FlareCursor from "@/components/FlareCursor";
import Music from "@/components/Music";

const creepster = Creepster({ subsets: ["latin"],weight:'400' });

export const metadata = {
  title: "Abhishek khare",
  description: "Full stack developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${creepster.className} text-gray-200 bg-black antialiased min-h-full cursor-none`}>
        <Music/>
        <FlareCursor/>
        <Sidebar/>
        <div className="ml-16 mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  );
}
