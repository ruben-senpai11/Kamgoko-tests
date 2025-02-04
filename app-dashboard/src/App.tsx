import Sidebar from "./components/sidebar"
import Header from "./components/header"
import Footer from "./components/footer"
import "./App.css"
import Main from "./components/main"
export default function App () {

  return (
    <>
      <div className="account d-flex justify-content-between p-0 ">
        <Sidebar />
        <div className="d-flex w-100 flex-column position-relative">
          <Header />
          <Main/>
          <Footer />
        </div>
      </div>
    </>
  )

}