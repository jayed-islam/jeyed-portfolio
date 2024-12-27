import "./globals.css";
import { Montserrat_Alternates, Grechen_Fuemen } from "next/font/google";
import { ReduxProvider } from "@/redux/ReduxProvider";
import { Metadata } from "next";
import favicon from "../../public/favicon.png";

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
  title: "Jayeds Portfolio",
  description: "Jayed's",
  icons: {
    icon: favicon.src,
    apple: "favicon.src",
  },
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
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
