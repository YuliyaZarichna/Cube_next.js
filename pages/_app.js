import "../styles.scss";
import "../components/Layout/Layout.scss";
import "../components/index.scss";
import "../components/Header/Header.scss";
import Layout from "../components/Layout/Layout";
import dynamic from "next/dynamic";
import img from "../assets/images/wall.jpg";

const DynamicComponent = dynamic(() => import("../components/cube.jsx"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }) {
  console.log(img);
  return (
    <Layout>
      <div className="leftContent">
        <Component {...pageProps} />
      </div>
      <div className="rightContent">
        <DynamicComponent />
      </div>
    </Layout>
  );
}
