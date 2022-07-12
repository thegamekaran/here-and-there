import Footer from "../components/Footer";
import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import PageFunctions from "../components/PageFunctions";
import SplashScreen from "../components/SplashScreen";
import ORG from "./ORG";

export default {
  description: ORG.ORG_DESCRIPTION,
  favicon: "/static/img/logo.svg",
  splash: <SplashScreen />,
  header: <Header />,
  footer: <Footer />,
  styles: <GlobalStyles />,
  pageFunctions: <PageFunctions />,
};
