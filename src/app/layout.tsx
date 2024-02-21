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
      <body
        className={` bg-sky-100 dark:bg-slate-950 overflow-hidden flex flex-col`}
      >
        <Providers>
          <TsParticle />

          <>
            <Nav
              nav_items={[
                {
                  name: "Home",
                  href: "/",
                },
                // {
                //   name: "Eco-System",
                //   href: "/EcoSystem",
                // },
                {
                  name: "Elemental",
                  href: "/elemental",
                },
                {
                  name: "Admin-io",
                  href: "/admin_io",
                },
                {
                  name: "Workflows",
                  href: "/workflows",
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
            <div className="w-full h-full overflow-y-scroll">
              {children}
              <Footer />
            </div>
          </>
        </Providers>
      </body>
    </html>
  );
}
