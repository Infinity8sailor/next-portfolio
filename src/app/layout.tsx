import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinity Sailor",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={` bg-slate-300 dark:bg-slate-800`}>
        <Providers>
          <>
            <Nav
              nav_id={"mainNav"}
              class_name={"active"}
              nav_items={[
                {
                  name: "Home",
                  href: "Home_page",
                },
                {
                  name: "Eco-System",
                  href: "Eco_System",
                },
                {
                  name: "Elemental",
                  href: "Elemental",
                },
                {
                  name: "Admin-io",
                  href: "Admin_Io",
                },
                // {
                //   name: "Gallary",
                //   href: "Gallary",
                // },
                // {
                //   name: "YT",
                //   href: "YT",
                // },
              ]}
            />
            {children}
          </>
        </Providers>
      </body>
    </html>
  );
}
