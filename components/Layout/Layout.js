import Head from "next/head";
import Header from "../Header/Header";
import useWindowSize from "../../components/useWindowSize";
import { useRouter } from "next/router";

const Layout = (props) => {
  const router = useRouter();

  const { width } = useWindowSize();
  const breakpoint = 768;

  const appTitle = "Home";
  const appTitleMobile = "Back";

  return (
    <div className="Layout">
      <Head>
        <title>YZ</title>
      </Head>
      <Header
        appTitle={
          breakpoint < width || router.pathname === "/"
            ? appTitle
            : appTitleMobile
        }
      />

      <div className="Content">{props.children}</div>
    </div>
  );
};

export default Layout;
