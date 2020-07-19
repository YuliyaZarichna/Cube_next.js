import "../styles.scss";
import "../components/Layout/Layout.scss";
import "../components/index.scss";
import "../components/Header/Header.scss";
import Layout from "../components/Layout/Layout";
import dynamic from "next/dynamic";
import useWindowSize from "../components/useWindowSize";
import { useRouter } from "next/router";

const DynamicComponent = dynamic(() => import("../components/cube.jsx"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }) {
  const { width } = useWindowSize();
  const router = useRouter();
  console.log("width", width);
  const breakpoint = 768;

  return (
    <Layout>
      <div className="leftContent">
        {/*    {router.pathname !== "/" && (
          <div onClick={() => router.back()}>Go back!</div>
        )} */}
        <Component {...pageProps} />
      </div>
      {router.pathname === "/" || breakpoint < width ? (
        <div className="rightContent">
          <DynamicComponent />
        </div>
      ) : null}
      <style jsx global>{`
        .leftContent::before {
          filter: hue-rotate(90deg) brightness(20%) grayscale(20%);
          box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8),
            -12px 0 8px -4px rgba(31, 73, 125, 0.8);
        }
      `}</style>
    </Layout>
  );
}
