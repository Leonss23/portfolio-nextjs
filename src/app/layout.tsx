import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Leonardo Gatti Portfolio",
  description: "Nextjs portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
