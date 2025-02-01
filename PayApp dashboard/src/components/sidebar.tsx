import "../css/sidebar.css"
import logo from "../assets/logo.svg"

export default function Sidebar() {

  return (
    <>
      <div className="sidebar d-flex flex-column">
        <div className="d-flex flex-column position-relative">
          <div className="logo ">
            <img src={logo} alt="PayApp Logo" width={44} height={44} />
          </div>
          <div className="d-flex flex-column ">
            <div className="side-labels">
              <h4>Navigation</h4>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.8672 6.08984C12.793 5.01562 11.418 4.5 10 4.5V10L6.13281 13.8672C8.23828 16.0156 11.7617 16.0156 13.9102 13.8672C16.0586 11.7188 16.0586 8.23828 13.8672 6.08984ZM10 0.804688C4.92969 0.804688 0.847656 4.92969 0.847656 10C0.847656 15.0703 4.92969 19.1523 10 19.1523C15.0703 19.1523 19.1523 15.0703 19.1523 10C19.1523 4.92969 15.0703 0.804688 10 0.804688ZM10 17.3047C5.96094 17.3047 2.65234 14.0391 2.65234 10C2.65234 5.91797 5.96094 2.65234 10 2.65234C14.0391 2.65234 17.3477 5.91797 17.3477 10C17.3477 14.0391 14.0391 17.3047 10 17.3047Z"/>
                </svg>
                Dashboard
              </p>
              <p className="d-flex gap-2 active">
                <svg className="svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4023 0.75H2.59766C1.56641 0.75 0.75 1.56641 0.75 2.59766V15.4023C0.75 16.4336 1.56641 17.25 2.59766 17.25H15.4023C16.4336 17.25 17.25 16.4336 17.25 15.4023V2.59766C17.25 1.56641 16.4336 0.75 15.4023 0.75ZM15.4023 15.4023H2.59766V12.6523H5.86328C6.46484 13.7695 7.66797 14.5 9 14.5C10.375 14.5 11.5352 13.7695 12.1797 12.6523H15.4023V15.4023ZM15.4023 10.8477H10.8477C10.8477 11.8359 10.0312 12.6523 9 12.6523C8.01172 12.6523 7.19531 11.8359 7.19531 10.8477H2.59766V2.59766H15.4023V10.8477Z"  />
                </svg>
                Accounts
              </p>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3477 0.652344H2.65234C1.66406 0.652344 0.847656 1.46875 0.847656 2.5V13.5C0.847656 14.5312 1.66406 15.3477 2.65234 15.3477H17.3477C18.3359 15.3477 19.1523 14.5312 19.1523 13.5V2.5C19.1523 1.46875 18.3359 0.652344 17.3477 0.652344ZM17.3477 13.5H2.65234V8H17.3477V13.5ZM17.3477 4.34766H2.65234V2.5H17.3477V4.34766Z"/>
                </svg>
                Cards
              </p>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.40234 6.09766L0.75 9.75L4.40234 13.4023V10.6523H10.8477V8.84766H4.40234V6.09766ZM17.25 4.25L13.5977 0.597656V3.34766H7.15234V5.15234H13.5977V7.90234L17.25 4.25Z"/>
                </svg>
                Transactions
              </p>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 1.69141L9 9.94141L15.4023 3.53906V7.75H17.25V0.402344H9.90234V2.25H14.1133L9 7.36328L2.03906 0.402344L0.75 1.69141Z"/>
                </svg>              Payment
              </p>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4023 2.59766V15.4023H2.59766V2.59766H15.4023ZM15.4023 0.75H2.59766C1.56641 0.75 0.75 1.56641 0.75 2.59766V15.4023C0.75 16.4336 1.56641 17.25 2.59766 17.25H15.4023C16.4336 17.25 17.25 16.4336 17.25 15.4023V2.59766C17.25 1.56641 16.4336 0.75 15.4023 0.75ZM10.8477 13.5977H4.40234V11.75H10.8477V13.5977ZM13.5977 9.90234H4.40234V8.09766H13.5977V9.90234ZM13.5977 6.25H4.40234V4.40234H13.5977V6.25Z"/>
                </svg>
                Invoicing
              </p>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.25 5.34766C17.918 5.34766 17.1875 6.63672 17.4883 7.625L14.2227 10.8906C13.9648 10.8047 13.5352 10.8047 13.2773 10.8906L10.957 8.57031C11.2578 7.58203 10.4844 6.25 9.15234 6.25C7.82031 6.25 7.08984 7.58203 7.39062 8.57031L3.22266 12.7383C2.23438 12.4375 0.902344 13.168 0.902344 14.5C0.902344 15.4883 1.76172 16.3477 2.75 16.3477C4.08203 16.3477 4.8125 15.0156 4.51172 14.0273L8.67969 9.85938C8.98047 9.94531 9.36719 9.94531 9.625 9.85938L11.9883 12.1797C11.6875 13.168 12.418 14.5 13.75 14.5C15.082 14.5 15.8125 13.168 15.5117 12.1797L18.7773 8.95703C19.7656 9.25781 21.0977 8.48438 21.0977 7.15234C21.0977 6.16406 20.2383 5.34766 19.25 5.34766ZM13.75 6.25L14.6094 4.35938L16.5 3.5L14.6094 2.64062L13.75 0.75L12.8906 2.64062L11 3.5L12.8906 4.35938L13.75 6.25ZM3.22266 8.09766L3.65234 6.25L5.5 5.77734L3.65234 5.34766L3.22266 3.5L2.75 5.34766L0.902344 5.77734L2.75 6.25L3.22266 8.09766Z"/>
                </svg>
                Trading
              </p>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.15234 15.3477H9.84766V0.652344H6.15234V15.3477ZM0.652344 15.3477H4.34766V8H0.652344V15.3477ZM11.6523 5.25V15.3477H15.3477V5.25H11.6523Z"/>
                </svg>
                Reports
              </p>
            </div>
          </div>
          <div className="d-flex flex-column mb-5 pb-5">
            <div className="side-labels">
              <h4>Balances</h4>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <circle cx="11" cy="11" r="11" fill="url(#pattern0_599_126)" />
                  <defs>
                    <pattern id="pattern0_599_126" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_599_126" transform="translate(-0.00396825) scale(0.00793651)" />
                    </pattern>
                    <image id="image0_599_126" width="127" height="126" xlinkHref="data:image/png;base64,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" />
                  </defs>
                </svg>

                100,050.75 USD
              </p>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="22" height="22" fill="transparent" />
                  <circle cx="11" cy="11" r="11" fill="url(#pattern0_599_131)" />
                  <defs>
                    <pattern id="pattern0_599_131" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_599_131" transform="translate(0 -0.0165289) scale(0.00826446)" />
                    </pattern>
                    <image id="image0_599_131" width="121" height="125" xlinkHref="data:image/png;base64,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" />
                  </defs>
                </svg>

                2310.40 EUR
              </p>
              <p className="d-flex gap-2">
                <svg className="svg-gray" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="22" height="22" fill="transparent" />
                  <circle cx="11" cy="11" r="11" fill="url(#pattern0_599_136)" />
                  <defs>
                    <pattern id="pattern0_599_136" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlinkHref="#image0_599_136" transform="translate(0 -0.00406504) scale(0.00813008)" />
                    </pattern>
                    <image id="image0_599_136" width="123" height="124" xlinkHref="data:image/png;base64,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" />
                  </defs>
                </svg>

                9455.50 GBP
              </p>
              <p className="d-flex gap-2  ">
                <svg className="svg-gray" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9023 5.40234H9.09766V9.09766H5.40234V10.9023H9.09766V14.5977H10.9023V10.9023H14.5977V9.09766H10.9023V5.40234ZM10 0.847656C4.92969 0.847656 0.847656 4.92969 0.847656 10C0.847656 15.0703 4.92969 19.1523 10 19.1523C15.0703 19.1523 19.1523 15.0703 19.1523 10C19.1523 4.92969 15.0703 0.847656 10 0.847656ZM10 17.3477C5.96094 17.3477 2.65234 14.0391 2.65234 10C2.65234 5.96094 5.96094 2.65234 10 2.65234C14.0391 2.65234 17.3477 5.96094 17.3477 10C17.3477 14.0391 14.0391 17.3477 10 17.3477Z"/>
                </svg>

                Open a balance
              </p>
            </div>
          </div>
          <div className="d-flex position-absolute bottom-0 m-0  profile-settings ">
            <p className="d-flex gap-2">
              <svg className="svg-gray" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.832 10.9023C15.832 10.6016 15.875 10.3008 15.875 10C15.875 9.69922 15.832 9.39844 15.832 9.09766L17.7656 7.59375C17.9375 7.46484 17.9805 7.20703 17.8516 6.99219L16.0039 3.8125C15.918 3.68359 15.7891 3.59766 15.6172 3.59766C15.5742 3.59766 15.4883 3.59766 15.4453 3.64062L13.168 4.54297C12.6953 4.19922 12.1797 3.85547 11.6211 3.64062L11.2773 1.23438C11.2344 1.01953 11.0625 0.847656 10.8477 0.847656H7.15234C6.9375 0.847656 6.76562 1.01953 6.72266 1.23438L6.37891 3.64062C5.82031 3.85547 5.30469 4.19922 4.83203 4.54297L2.55469 3.64062C2.46875 3.59766 2.42578 3.59766 2.38281 3.59766C2.21094 3.59766 2.08203 3.68359 1.99609 3.8125L0.148438 6.99219C0.0195312 7.20703 0.0625 7.46484 0.234375 7.59375L2.16797 9.09766C2.16797 9.39844 2.125 9.69922 2.125 10C2.125 10.3008 2.16797 10.6016 2.16797 10.9023L0.234375 12.4062C0.0625 12.5352 0.0195312 12.793 0.148438 13.0078L1.99609 16.1875C2.08203 16.3164 2.21094 16.4023 2.38281 16.4023C2.42578 16.4023 2.51172 16.4023 2.55469 16.3594L4.83203 15.457C5.30469 15.8008 5.82031 16.1445 6.37891 16.3594L6.72266 18.7656C6.76562 18.9805 6.9375 19.1523 7.15234 19.1523H10.8477C11.0625 19.1523 11.2344 18.9805 11.2773 18.7656L11.6211 16.3594C12.1797 16.1445 12.6953 15.8008 13.168 15.457L15.4453 16.3594C15.5312 16.4023 15.5742 16.4023 15.6172 16.4023C15.7891 16.4023 15.918 16.3164 16.0039 16.1875L17.8516 13.0078C17.9805 12.793 17.9375 12.5352 17.7656 12.4062L15.832 10.9023ZM13.9844 9.3125C14.0273 9.61328 14.0273 9.82812 14.0273 10C14.0273 10.1719 14.0273 10.3867 13.9844 10.6875L13.8555 11.7188L14.6719 12.3633L15.6602 13.1367L15.0156 14.2109L13.8555 13.7383L12.9102 13.3945L12.0938 13.9961C11.707 14.2969 11.3203 14.5117 10.9336 14.6836L9.98828 15.0703L9.81641 16.1016L9.64453 17.3477H8.35547L8.18359 16.1016L8.05469 15.0703L7.06641 14.6836C6.67969 14.5117 6.29297 14.2969 5.94922 13.9961L5.08984 13.3945L4.14453 13.7812L2.98438 14.2539L2.33984 13.1367L3.32812 12.3633L4.14453 11.7188L4.01562 10.6875C3.97266 10.3867 3.97266 10.1719 3.97266 10C3.97266 9.82812 3.97266 9.61328 4.01562 9.3125L4.14453 8.28125L3.32812 7.63672L2.33984 6.86328L2.98438 5.78906L4.14453 6.26172L5.08984 6.60547L5.90625 6.00391C6.29297 5.70312 6.67969 5.48828 7.06641 5.31641L8.01172 4.92969L8.18359 3.89844L8.35547 2.65234H9.64453L9.81641 3.89844L9.94531 4.92969L10.9336 5.31641C11.3203 5.48828 11.707 5.70312 12.0508 6.00391L12.8672 6.60547L13.8555 6.21875L15.0156 5.74609L15.6602 6.86328L14.6719 7.63672L13.8555 8.28125L13.9844 9.3125ZM9 6.34766C6.98047 6.34766 5.34766 7.98047 5.34766 10C5.34766 12.0195 6.98047 13.6523 9 13.6523C11.0195 13.6523 12.6523 12.0195 12.6523 10C12.6523 7.98047 11.0195 6.34766 9 6.34766ZM9 11.8477C8.01172 11.8477 7.15234 10.9883 7.15234 10C7.15234 9.01172 8.01172 8.15234 9 8.15234C9.98828 8.15234 10.8477 9.01172 10.8477 10C10.8477 10.9883 9.98828 11.8477 9 11.8477Z"/>
              </svg>

              Profile Settings
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
