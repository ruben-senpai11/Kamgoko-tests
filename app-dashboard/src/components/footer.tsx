import { useEffect, useRef, useState } from "react"
import "../css/navigation.css"
import Theme from "./themeMode"

export default function Footer() {

  const [themeVisible, setThemeVisible] = useState(false)

  const handleTheme = () => {
    setThemeVisible(!themeVisible)
  }
  const themeRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (themeRef.current && !themeRef.current.contains(event.target)) {
        setThemeVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="footer">
        <hr />
        <nav className="nav d-flex justify-content-between desktop ">
          <div className="links d-flex align-items-center justify-content-between gap-4 ">
            <a href="#">Privacy Policy</a>
            <a href="#">License</a>
            <a href="#">API</a>
            <a href="#">Help Center</a>
            <p className="copyright" >© 2022 All rights reserved</p>
          </div>
          <div className="env gap-3 ">
            <span className="d-flex align-items-center justify-content-between gap-2 flex-nowrap" >
              English
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 0.0117188C3.35156 0.0117188 0.0117188 3.35156 0.0117188 7.5C0.0117188 11.6484 3.35156 14.9883 7.5 14.9883C11.6484 14.9883 14.9883 11.6484 14.9883 7.5C14.9883 3.35156 11.6484 0.0117188 7.5 0.0117188ZM1.48828 7.5C1.48828 7.04297 1.55859 6.58594 1.66406 6.16406L5.25 9.75V10.4883C5.25 11.332 5.91797 12 6.72656 12V13.4414C3.80859 13.0898 1.48828 10.5586 1.48828 7.5ZM11.9297 11.543C11.7188 10.9453 11.1562 10.4883 10.4883 10.4883H9.75V8.23828C9.75 7.85156 9.39844 7.5 8.97656 7.5H4.47656V5.98828H5.98828C6.41016 5.98828 6.72656 5.67188 6.72656 5.25V3.73828H8.23828C9.08203 3.73828 9.75 3.07031 9.75 2.26172V1.94531C11.9297 2.82422 13.5117 5.00391 13.5117 7.5C13.5117 9.04688 12.8789 10.4883 11.9297 11.543Z" fill="currentColor " />
              </svg>
            </span>
            <Theme />
          </div>
        </nav>
        <nav className="nav d-flex justify-content-between mobile position-relative ">
          <button className="">
            <svg className="svg-gray" width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8672 6.08984C12.793 5.01562 11.418 4.5 10 4.5V10L6.13281 13.8672C8.23828 16.0156 11.7617 16.0156 13.9102 13.8672C16.0586 11.7188 16.0586 8.23828 13.8672 6.08984ZM10 0.804688C4.92969 0.804688 0.847656 4.92969 0.847656 10C0.847656 15.0703 4.92969 19.1523 10 19.1523C15.0703 19.1523 19.1523 15.0703 19.1523 10C19.1523 4.92969 15.0703 0.804688 10 0.804688ZM10 17.3047C5.96094 17.3047 2.65234 14.0391 2.65234 10C2.65234 5.91797 5.96094 2.65234 10 2.65234C14.0391 2.65234 17.3477 5.91797 17.3477 10C17.3477 14.0391 14.0391 17.3047 10 17.3047Z" />
            </svg>
          </button>
          <button className="">
            <svg className="svg" width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4023 0.75H2.59766C1.56641 0.75 0.75 1.56641 0.75 2.59766V15.4023C0.75 16.4336 1.56641 17.25 2.59766 17.25H15.4023C16.4336 17.25 17.25 16.4336 17.25 15.4023V2.59766C17.25 1.56641 16.4336 0.75 15.4023 0.75ZM15.4023 15.4023H2.59766V12.6523H5.86328C6.46484 13.7695 7.66797 14.5 9 14.5C10.375 14.5 11.5352 13.7695 12.1797 12.6523H15.4023V15.4023ZM15.4023 10.8477H10.8477C10.8477 11.8359 10.0312 12.6523 9 12.6523C8.01172 12.6523 7.19531 11.8359 7.19531 10.8477H2.59766V2.59766H15.4023V10.8477Z" />
            </svg>
          </button>
          <button className="primary">
            <svg className="" width="22" height="22" viewBox="0 0 18 10" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 1.69141L9 9.94141L15.4023 3.53906V7.75H17.25V0.402344H9.90234V2.25H14.1133L9 7.36328L2.03906 0.402344L0.75 1.69141Z" />
            </svg>
          </button>
          <button className="">
            <svg className="svg-gray" width="20" height="20" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.40234 6.09766L0.75 9.75L4.40234 13.4023V10.6523H10.8477V8.84766H4.40234V6.09766ZM17.25 4.25L13.5977 0.597656V3.34766H7.15234V5.15234H13.5977V7.90234L17.25 4.25Z" />
            </svg>
          </button>
          <button onClick={handleTheme} className="">
            <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 0.152344C1.51172 0.152344 0.652344 1.01172 0.652344 2C0.652344 2.98828 1.51172 3.84766 2.5 3.84766C3.48828 3.84766 4.34766 2.98828 4.34766 2C4.34766 1.01172 3.48828 0.152344 2.5 0.152344ZM13.5 0.152344C12.5117 0.152344 11.6523 1.01172 11.6523 2C11.6523 2.98828 12.5117 3.84766 13.5 3.84766C14.4883 3.84766 15.3477 2.98828 15.3477 2C15.3477 1.01172 14.4883 0.152344 13.5 0.152344ZM8 0.152344C7.01172 0.152344 6.15234 1.01172 6.15234 2C6.15234 2.98828 7.01172 3.84766 8 3.84766C8.98828 3.84766 9.84766 2.98828 9.84766 2C9.84766 1.01172 8.98828 0.152344 8 0.152344Z" fill="#747A80" />
            </svg>
          </button>
          {themeVisible &&
            <div ref={themeRef} className="mobile-theme d-flex flex-column justify-content-between align-content-center gap-3 ">
              <Theme />
            </div>
          }
        </nav>
      </div>
    </>
  )
}
