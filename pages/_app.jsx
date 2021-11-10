import "../output/light.css"
import "../output/dark.css"
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../stitches.config";

function MyApp({ Component, pageProps }) {
    return <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: "light-theme",
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  }
  
  export default MyApp