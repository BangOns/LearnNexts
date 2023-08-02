// "use client";
import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const router = useRouter();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ul>
          {/* with Next Link */}
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link href={"/settings"}>settings</Link>
          </li>
          <li>
            <Link href={"/cari"}>cari orang</Link>
          </li>

          {/* With Route Push */}
          {/* <li>
            <p onClick={() => router.push("/")}>Home</p>
          </li>
          <li>
            <p onClick={() => router.push("/dashboard")}>dashboard</p>
          </li>
          <li>
            <p onClick={() => router.push("/settings")}>settings</p>
          </li> */}
        </ul>

        {children}
      </body>
    </html>
  );
}
