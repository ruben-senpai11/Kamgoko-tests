import "../css/navigation.css"
import ProfilePicture from "../assets/Img"
import { useState } from "react"

export default function Header() {

  const [searchValue, setSearchValue] = useState("");
  const [typing, setTyping] = useState(false)

  const handleInputChange = (event: any) => {
    const newValue = event.target.value
    setSearchValue(newValue);
    if (newValue != "") {
      setTyping(true)
    } else {
      setTyping(false)
    }
  };


  return (
    <>
      <nav className="nav header d-flex justify-content-between position-relative ">
        <div className="d-flex align-items-center justify-content-between gap-4 will-center ">
          <svg className="desktop actions" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#CFDBD5" strokeOpacity="0.7" strokeLinecap="square" />
            <path d="M22.5664 16.5547L21.5117 15.5L17.0117 20L21.5117 24.5L22.5664 23.4453L19.1211 20L22.5664 16.5547Z" fill="currentColor" />
          </svg>
          <svg className="mobile" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_655_60)">
              <path d="M14.6094 3.24219L13.125 1.75781L4.88281 10L13.125 18.2422L14.6094 16.7578L7.8125 10L14.6094 3.24219Z" fill="currentColor" />
            </g>
            <defs>
              <clipPath id="clip0_655_60">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="fw-bold title ">Account Details</p>
          <p className="hidden">.</p>
        </div>
        <div className="d-flex align-items-center justify-content-between gap-4 ">
          <div className="position-relative">
            <input value={searchValue} onChange={handleInputChange} className="search" placeholder='Type to search …' type="text" name="" id="" color="currentColor" />
            {typing == false &&
              <span className="search-icon position-absolute">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9297 9.67969H10.2656L10.0312 9.44531C10.8516 8.50781 11.3203 7.25781 11.3203 5.92969C11.3203 2.92188 8.89844 0.5 5.92969 0.5C2.92188 0.5 0.5 2.92188 0.5 5.92969C0.5 8.89844 2.92188 11.3203 5.92969 11.3203C7.25781 11.3203 8.50781 10.8516 9.44531 10.0312L9.67969 10.2656V10.9297L13.8203 15.0703L15.0703 13.8203L10.9297 9.67969ZM5.92969 9.67969C3.85938 9.67969 2.17969 8 2.17969 5.92969C2.17969 3.85938 3.85938 2.17969 5.92969 2.17969C8 2.17969 9.67969 3.85938 9.67969 5.92969C9.67969 8 8 9.67969 5.92969 9.67969Z" fill="currentColor" />
                </svg>
              </span>
            }
          </div>
          <span className="notifications cursor-pointer">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#CFDBD5" strokeOpacity="0.7" strokeLinecap="square" />
              <path d="M20 27.4883C20.8086 27.4883 21.5117 26.8203 21.5117 26.0117H18.4883C18.4883 26.8203 19.1914 27.4883 20 27.4883ZM24.5 22.9883V19.2617C24.5 16.9414 23.2695 15.0078 21.125 14.5156V13.9883C21.125 13.3906 20.6328 12.8633 20 12.8633C19.3672 12.8633 18.875 13.3906 18.875 13.9883V14.5156C16.7305 15.0078 15.5 16.9414 15.5 19.2617V22.9883L13.9883 24.5V25.2383H26.0117V24.5L24.5 22.9883ZM22.9883 23.7617H17.0117V19.2617C17.0117 17.3984 18.1367 15.8867 20 15.8867C21.8633 15.8867 22.9883 17.3984 22.9883 19.2617V23.7617Z" fill="currentColor" />
            </svg>
          </span>
          <ProfilePicture />
        </div>
      </nav>
    </>
  )
}
