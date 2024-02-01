import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Nav } from "@/components/nav";
import { TsParticle } from "@/components/TsParticles";
import Footer from "@/components/footer";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={` bg-sky-100 dark:bg-slate-950`}>
        <Providers>
          <TsParticle />

          <>
            <Nav
              nav_items={[
                {
                  name: "Home",
                  href: "/",
                },
                {
                  name: "Eco-System",
                  href: "/EcoSystem",
                },
                {
                  name: "Elemental",
                  href: "/Elemental",
                },
                {
                  name: "Admin-io",
                  href: "/AdminIo",
                },
                {
                  name: "Workflows",
                  href: "/Workflows",
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
            <div className="w-full h-full">{children}</div>
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  );
}
