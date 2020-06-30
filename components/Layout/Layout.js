import Head from "next/head";
import Header from "../Header/Header";

import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../cube.jsx"), {
  ssr: false,
});

const Layout = (props) => {
  const appTitle = "YZ";
  return (
    <div className="Layout">
      <Head>
        {" "}
        <title>YZ</title>
      </Head>
      <Header appTitle={appTitle} />

      <div className="Content">{props.children}</div>
      <DynamicComponent />
    </div>
  );
};

export default Layout;
