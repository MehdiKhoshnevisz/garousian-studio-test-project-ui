import StyledComponentsRegistry from "@/lib/registery";

import "./globals.css";

export const metadata = {
  title: "استودیو گروسیان",
  description: "به راحتی خدمات مورد نیاز خودت رو پیدا کن.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
