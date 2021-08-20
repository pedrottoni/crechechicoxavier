import "../styles/globals.css";
import Background from "../components/layout/Background";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
      <Background />
    </AnimatePresence>
  );
}

export default MyApp;
