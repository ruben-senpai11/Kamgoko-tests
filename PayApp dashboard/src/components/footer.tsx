import "../css/navigation.css"
import Theme from "./themeMode"

export default function Footer() {

  return (
    <>
      <nav className="nav d-flex justify-content-between">
        <div className="links d-flex align-items-center justify-content-between gap-4 ">
          <a href="#">Privacy Policy</a>
          <a href="#">License</a>
          <a href="#">API</a>
          <a href="#">Help Center</a>
          <p className="copyright" >© 2022 All rights reserved</p>
        </div>
        <div className="env gap-3 ">
            <span className="d-flex align-items-center justify-content-between gap-2" >
              English
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 0.0117188C3.35156 0.0117188 0.0117188 3.35156 0.0117188 7.5C0.0117188 11.6484 3.35156 14.9883 7.5 14.9883C11.6484 14.9883 14.9883 11.6484 14.9883 7.5C14.9883 3.35156 11.6484 0.0117188 7.5 0.0117188ZM1.48828 7.5C1.48828 7.04297 1.55859 6.58594 1.66406 6.16406L5.25 9.75V10.4883C5.25 11.332 5.91797 12 6.72656 12V13.4414C3.80859 13.0898 1.48828 10.5586 1.48828 7.5ZM11.9297 11.543C11.7188 10.9453 11.1562 10.4883 10.4883 10.4883H9.75V8.23828C9.75 7.85156 9.39844 7.5 8.97656 7.5H4.47656V5.98828H5.98828C6.41016 5.98828 6.72656 5.67188 6.72656 5.25V3.73828H8.23828C9.08203 3.73828 9.75 3.07031 9.75 2.26172V1.94531C11.9297 2.82422 13.5117 5.00391 13.5117 7.5C13.5117 9.04688 12.8789 10.4883 11.9297 11.543Z" fill="currentColor " />
              </svg>
            </span>
            <Theme />
        </div>
      </nav>
    </>
  )
}
