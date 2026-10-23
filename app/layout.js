import "./globals.css";

export const metadata = {
  title: "AOS",
  icons: {
    icon: "/apple-touch-icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
