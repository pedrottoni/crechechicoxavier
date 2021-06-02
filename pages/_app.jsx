import "../styles/globals.css";
import Background from "../components/layout/Background";

function MyApp({ Component, pageProps }) {
  return (
    <Background>
      <Component {...pageProps} />
    </Background>
  );
}

export default MyApp;
