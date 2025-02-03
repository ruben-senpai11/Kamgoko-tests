import "../css/main.css"
import Payment from "./payment"
import Card from "../assets/Card"

export default function Main() {

  return (
    <>
      <div className="main  ">
        <div className="account spacing">
          <h1>$120,420.50</h1>
          <p className="gray">Account **** 4567</p>
        </div>
        <div className=" line d-flex flex-column gap-0 mt-4 ">
          <div className="spacing d-flex align-items-center justify-content-between gap-2 ">
            <div className="d-flex align-items-center justify-content-between main-actions ">
              <p className="d-flex align-items-center justify-content-between gap-2 actions fw-bold ">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7617 0.488281L13.75 3.51172L10.7617 6.5V4.25H7.73828V2.73828H10.7617V0.488281ZM5.48828 2.73828C5.10156 2.73828 4.75 3.08984 4.75 3.51172C4.75 3.89844 5.10156 4.25 5.48828 4.25C5.91016 4.25 6.26172 3.89844 6.26172 3.51172C6.26172 3.08984 5.91016 2.73828 5.48828 2.73828ZM2.5 2.73828C2.07812 2.73828 1.76172 3.08984 1.76172 3.51172C1.76172 3.89844 2.07812 4.25 2.5 4.25C2.92188 4.25 3.23828 3.89844 3.23828 3.51172C3.23828 3.08984 2.92188 2.73828 2.5 2.73828ZM3.23828 10.2617H6.26172V8.75H3.23828V6.5L0.25 9.48828L3.23828 12.5117V10.2617ZM8.51172 10.2617C8.89844 10.2617 9.25 9.91016 9.25 9.48828C9.25 9.10156 8.89844 8.75 8.51172 8.75C8.08984 8.75 7.73828 9.10156 7.73828 9.48828C7.73828 9.91016 8.08984 10.2617 8.51172 10.2617ZM11.5 10.2617C11.9219 10.2617 12.2383 9.91016 12.2383 9.48828C12.2383 9.10156 11.9219 8.75 11.5 8.75C11.0781 8.75 10.7617 9.10156 10.7617 9.48828C10.7617 9.91016 11.0781 10.2617 11.5 10.2617Z" fill="currentColor" />
                </svg>

                Transfer
              </p>
              <p className="d-flex align-items-center justify-content-between gap-2 actions fw-bold  ">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.625 1.13672L11.5 0.0117188L10.375 1.13672L9.25 0.0117188L8.125 1.13672L7 0.0117188L5.875 1.13672L4.75 0.0117188L3.625 1.13672L2.5 0.0117188V10.4883H0.25V12.7383C0.25 14.0039 1.26953 14.9883 2.5 14.9883H11.5C12.7305 14.9883 13.75 14.0039 13.75 12.7383V0.0117188L12.625 1.13672ZM9.25 13.5117H2.5C2.07812 13.5117 1.76172 13.1602 1.76172 12.7383V12H9.25V13.5117ZM12.2383 12.7383C12.2383 13.1602 11.9219 13.5117 11.5 13.5117C11.0781 13.5117 10.7617 13.1602 10.7617 12.7383V10.4883H4.01172V2.26172H12.2383V12.7383ZM4.75 3.73828H9.25V5.25H4.75V3.73828ZM9.98828 3.73828H11.5V5.25H9.98828V3.73828ZM4.75 5.98828H9.25V7.5H4.75V5.98828ZM9.98828 5.98828H11.5V7.5H9.98828V5.98828Z" fill="currentColor" />
                </svg>

                Make a Payment
              </p>
              <p className="d-flex align-items-center justify-content-between gap-2 actions fw-bold  ">
                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.67188 3.64844L6.26172 0.238281V2.55859C3.30859 2.91016 0.988281 5.44141 0.988281 8.5C0.988281 11.5586 3.27344 14.0898 6.26172 14.4414V12.9297C4.11719 12.5781 2.5 10.7148 2.5 8.5C2.5 6.28516 4.11719 4.42188 6.26172 4.07031V6.98828L9.67188 3.64844ZM12.9414 7.76172C12.8359 6.70703 12.4141 5.6875 11.7461 4.84375L10.6562 5.89844C11.0781 6.46094 11.3242 7.09375 11.4297 7.76172H12.9414ZM7.73828 12.9297V14.4414C8.79297 14.3008 9.8125 13.9141 10.6914 13.2461L9.60156 12.1562C9.03906 12.543 8.40625 12.8242 7.73828 12.9297ZM10.6562 11.1016L11.7461 12.1562C12.4141 11.3125 12.8359 10.293 12.9414 9.23828H11.4297C11.3242 9.90625 11.0781 10.5391 10.6562 11.1016Z" fill="currentColor" />
                </svg>

                Convert
              </p>
              <p className="d-flex align-items-center justify-content-between gap-2 actions fw-bold  ">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.25 0.261719V1.73828H9.20703L0.488281 10.457L1.54297 11.5117L10.2617 2.79297V7.75H11.7383V0.261719H4.25Z" fill="currentColor" />
                </svg>

                Request
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between gap-4 ">
              <p className="d-flex align-items-center justify-content-between gap-2 actions fw-bold  ">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.63672 9.01172H9.03906L8.82812 8.80078C9.56641 7.95703 9.98828 6.83203 9.98828 5.63672C9.98828 2.92969 7.80859 0.75 5.13672 0.75C2.42969 0.75 0.25 2.92969 0.25 5.63672C0.25 8.30859 2.42969 10.4883 5.13672 10.4883C6.33203 10.4883 7.45703 10.0664 8.30078 9.32812L8.51172 9.53906V10.1367L12.2383 13.8633L13.3633 12.7383L9.63672 9.01172ZM5.13672 9.01172C3.27344 9.01172 1.76172 7.5 1.76172 5.63672C1.76172 3.77344 3.27344 2.26172 5.13672 2.26172C7 2.26172 8.51172 3.77344 8.51172 5.63672C8.51172 7.5 7 9.01172 5.13672 9.01172Z" fill="currentColor" />
                </svg>

                Search
              </p>
              <p className="d-flex align-items-center justify-content-between gap-2 actions fw-bold  ">
                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2383 1.75H11.5V0.238281H9.98828V1.75H4.01172V0.238281H2.5V1.75H1.76172C0.917969 1.75 0.25 2.41797 0.25 3.26172V13.7383C0.25 14.582 0.917969 15.25 1.76172 15.25H12.2383C13.082 15.25 13.75 14.582 13.75 13.7383V3.26172C13.75 2.41797 13.082 1.75 12.2383 1.75ZM12.2383 13.7383H1.76172V6.25H12.2383V13.7383ZM1.76172 4.73828V3.26172H12.2383V4.73828H1.76172ZM3.23828 7.76172H10.7617V9.23828H3.23828V7.76172ZM3.23828 10.75H8.51172V12.2617H3.23828V10.75Z" fill="currentColor" />
                </svg>

                August 2022
              </p>
            </div>
          </div>
          <hr />
          <div className="spacing a-container d-flex align-items-center justify-content-between w-100 mt-4 ">
            <div className="d-flex payments flex-column gap-2 ">
              <p className="gray" >28 August</p>
              <div className="d-flex flex-column gap-0 w-100 ">
                <Payment label="Online purchase at Ebay.com" date="28 Aug, 3:00 PM" amount="- $10.480,00" />
                <hr />
                <Payment label="ATM Cash withdrawal" date="28 Aug, 2:15 AM" amount="- $201.50" />
                <hr />
                <Payment label="Online purchase on Amazon.com" date="28 Aug, 5:40 PM" amount="- $184.00" />
                <hr />
                {/* <Payment label="Online purchase at Ebay.com" date="28 Aug, 3:00 PM" amount="- $10.480,00" /> */}
              </div>
              <p className="gray mt-4" >24 August</p>
              <div className="d-flex flex-column gap-0 ">
                <Payment label="Income payment for projects" date="28 Aug, 3:00 PM" amount="+ $3.000,00" />
                <hr />
                <Payment label="Groceries store" date="28 Aug, 2:15 AM" amount="- $400.00" />
                <hr />
                <Payment label="Monthly home rent " date="28 Aug, 5:40 PM" amount="- $400.00" />
                <hr />
                <Payment label="Online purchase at Ebay.com" date="28 Aug, 3:00 PM" amount="- $396.00 " />
                <hr />
                <div className="p-0 m-0 opacity-50">
                  <Payment label="Online purchase at Ebay.com" date="28 Aug, 3:00 PM" amount="- $28,00" />
                </div>
              </div>
            </div>
            <div className="account-details d-flex flex-column gap-4 justify-content-start ">
              <p className="gray" >Linked card</p>
              <div className="visa-gold d-flex gap-3">
                <Card />
                <div className="d-flex flex-column justify-content-between card-infos ">
                  <p className="fw-bolder">Visa Gold Paywave</p>
                  <p className="gray w-100 d-flex justify-content-between flex-shrink-1 lh-lg ">
                    <span>**** 8790</span>
                    <span>03/22</span>
                  </p>
                </div>
              </div>
              <div className="details mt-3 ">
                <p className="gray " >Account Details</p>
                <div className="border mt-3 p-4">
                  <p className="d-flex justify-content-between ">
                    Account name
                    <span className="fw-bold" >Premium Account</span>
                  </p>
                  <hr />
                  <p className="d-flex justify-content-between p-2 ">
                    Account number
                    <span className="fw-bold" >UK64CT0000010034567</span>
                  </p>
                  <hr />
                  <p className="d-flex justify-content-between p-2 ">
                    Account type
                    <span className="fw-bold" >Single Currency</span>
                  </p>
                  <hr />
                  <p className="d-flex justify-content-between p-2 ">
                    Bonus programm
                    <span className="fw-bold" >Premium</span>
                  </p>
                  <hr />
                  <p className="d-flex justify-content-between p-2 ">
                    Insurance
                    <span className="fw-bold" >Enabled</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
