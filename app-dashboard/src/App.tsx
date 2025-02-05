import Sidebar from "./components/sidebar"
import Header from "./components/header"
import Footer from "./components/footer"
import "./App.css"
import Main from "./components/main"
import SplashScreen from "./components/splashScreen"
export default function App() {
/*
  const boxRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!sessionStorage.getItem('sessionInitialized')) {
      sessionStorage.setItem('sessionInitialized', 'true');

      gsap.fromTo(
        contentRef.current,
        {  opacity: "0" },
        {  opacity: "1", duration: 2, ease: "expo.out", delay: 3 }
      );
    }
  }, []);
  */

  return (
    <>
      <SplashScreen name="PayApp" label="by Ruben Honfovou" timer={2000} />
      <div className="account d-flex justify-content-between p-0 ">
        <Sidebar />
        <div className="d-flex w-100 flex-column position-relative">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  )

}