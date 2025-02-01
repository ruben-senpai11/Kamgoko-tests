import "../css/navigation.css"
import ProfilePicture from "../assets/Img"

export default function Header() {

  return (
    <>
      <nav className="nav d-flex justify-content-between">
        <div className="title d-flex align-items-center justify-content-between gap-4 ">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#CFDBD5" strokeOpacity="0.7" strokeLinecap="square" />
            <path d="M22.5664 16.5547L21.5117 15.5L17.0117 20L21.5117 24.5L22.5664 23.4453L19.1211 20L22.5664 16.5547Z" fill="currentColor" />
          </svg>
          <p className="fw-bold ">Account Details</p>
        </div>
        <div className="title d-flex align-items-center justify-content-between gap-4 ">
          <div className="search d-flex justify-content-between position-relative ">
            <p className="d-flex align-items-center justify-content-between gap-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9297 9.67969H10.2656L10.0312 9.44531C10.8516 8.50781 11.3203 7.25781 11.3203 5.92969C11.3203 2.92188 8.89844 0.5 5.92969 0.5C2.92188 0.5 0.5 2.92188 0.5 5.92969C0.5 8.89844 2.92188 11.3203 5.92969 11.3203C7.25781 11.3203 8.50781 10.8516 9.44531 10.0312L9.67969 10.2656V10.9297L13.8203 15.0703L15.0703 13.8203L10.9297 9.67969ZM5.92969 9.67969C3.85938 9.67969 2.17969 8 2.17969 5.92969C2.17969 3.85938 3.85938 2.17969 5.92969 2.17969C8 2.17969 9.67969 3.85938 9.67969 5.92969C9.67969 8 8 9.67969 5.92969 9.67969Z" fill="currentColor" />
              </svg>
              Type to search …
            </p>
          </div>
          {/* <input className="search" placeholder='' type="text" name="" id="" /> */}

          <ProfilePicture />
        </div>
      </nav>
    </>
  )
}
