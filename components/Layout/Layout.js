import Head from "next/head";
import Header from "../Header/Header";

const Layout = (props) => {
  const appTitle = "YZ";
  return (
    <div className="Layout">
      <Head>
        <title>YZ</title>
      </Head>
      <Header appTitle={appTitle} />

      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Layout;
