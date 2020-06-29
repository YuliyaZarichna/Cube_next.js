import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../cube.jsx"), {
  ssr: false,
});

const Layout = (props) => {
  return (
    <div className="Layout">
      <Head>
        {" "}
        <title>YZ</title>
      </Head>
      <div className="Content">{props.children}</div>
      <DynamicComponent />
    </div>
  );
};

export default Layout;
