import Header from "../components/Header";
// import About from "./about/Page";
// import Navbar from "../components/Navbar";
// import SearchBox from "../components/SearchBox";

import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.theme;
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            })();
          `,
          }}
        />
      </head>
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* <about /> */}

          {/* SearchBox */}

          {/* <SearchBox /> */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
