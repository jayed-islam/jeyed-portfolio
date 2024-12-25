import "./globals.css";
import {
  Roboto_Condensed,
  Montserrat_Alternates,
  Grechen_Fuemen,
} from "next/font/google";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { Metadata } from "next";
import MainLayout from "@/layouts";

const roboto_condensed = Roboto_Condensed({
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
    <html lang="en" className={roboto_condensed.className}>
      <body>
        <ReduxProvider>
          {/* <MainLayout> */}
          {children}
          {/* </MainLayout> */}
        </ReduxProvider>
      </body>
    </html>
  );
}
