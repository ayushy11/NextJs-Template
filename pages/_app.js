import "../styles/globals.css";
import { theme } from "../lib/theme";
import { ThemeProvider } from "@emotion/react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import SomeProvider from "components/Providers/SomeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AnimateSharedLayout>
        <SomeProvider>
          <Component {...pageProps} />
        </SomeProvider>
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default MyApp;
