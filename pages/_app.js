import "../styles.css";
import "../components/Layout/Layout.scss";
import "../components/index.scss";
import "../components/Header/Header.scss";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
