import "../styles/globals.scss";

import { ptSans, montserrat, lato } from "@/fonts/fonts";


export const metadata = {
  title: "Тестовое задание",
  description: "Тестовое задание на позицию Junior Frontend Developer. Практическое задание №2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={ `${ ptSans.variable } ${ lato.variable } ${ montserrat.variable }` }>
    <main className="main container">
      { children }
    </main>
    </body>
    </html>
  );
}
