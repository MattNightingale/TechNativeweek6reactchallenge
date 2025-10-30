import styles from "./Root.module.css";
import SiteHeader from "../SiteHeader/SiteHeader";
import SiteNav from "../SiteNav/SiteNav";
import SiteFooter from "../SiteFooter/SiteFooter";
import MainContent from "../MainContent/MainContent";
import { DarkModeProvider } from "../ReactDemo/ReactDemo3/DarkMode";

function Root() {
  return (
    <DarkModeProvider>
      <div className={styles.wrapper}>
        <SiteHeader />
        <SiteNav />
        <MainContent />
        <SiteFooter />
      </div>
    </DarkModeProvider>
  );
}

export default Root;
