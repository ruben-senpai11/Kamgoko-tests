import Sidebar from "./components/sidebar"
import Header from "./components/header"
import Footer from "./components/footer"
import "./App.css"
export default function App () {

  return (
    <>
      <div className="d-flex justify-content-between">
        <Sidebar />
        <div className="d-flex w-100 flex-column position-relative">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  )

}