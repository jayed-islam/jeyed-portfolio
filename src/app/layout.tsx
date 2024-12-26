import "./globals.css";
import { Montserrat_Alternates, Grechen_Fuemen } from "next/font/google";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { Metadata } from "next";
import MainLayout from "@/layouts";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["400", "700", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const grechen_fuemen = Grechen_Fuemen({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio of Jayed",
  description: "Jayed's",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat_alternates.className} ${grechen_fuemen.className}`}
    >
      <body>
        <ReduxProvider>
          <MainLayout>{children}</MainLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
