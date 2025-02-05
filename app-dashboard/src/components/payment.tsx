interface Props {
  label: string,
  date: string,
  amount: string
}

export default function Payment({ label, date, amount }: Props) {

  return (
    <>

      <div className="payment d-flex align-items-center justify-content-between gap-2 p w-100">
        <div className="d-flex align-items-center justify-content-between gap-3 ">
          <span><svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <circle cx="16" cy="16.5" r="16" fill="url(#pattern0_615_271)" />
            <defs>
              <pattern id="pattern0_615_271" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_615_271" transform="scale(0.015625)" />
              </pattern>
              <image id="image0_615_271" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAONJREFUeF7t20EOhEAIRFG4/6F7DvEnYeFzryQIv6pBd2behOu9dPvsbog+k+NLgArQAqmJcw9iAAhSgZKB3IJkkAySQTJ4CiE+gA8oBeg0mH3Ai084P89HhqwEqIA209ICsQdjAeaZIgaAYKxBDMCAYy8fXwAIgiAIcoJpJEYGI4VjB3YrbC9gL2AvkCB43cM5PgZgAAZgQFnNZAhdGykQBEEQBEEQDBmgAm2glM/z+QUYisYUGoldO7kY32IEAzCg6RgIRgjFAsw+AgRBMNYgBmCAT2TCYfoPPz/HCqQCX1eBHzHnv7C7WhBSAAAAAElFTkSuQmCC" />
            </defs> 
          </svg>
          </span>
          <div className="">
            <span className="d-flex flex-column gap-1" >
              {label}
            </span>
            <span className="gray t-thin">{date}</span>
          </div>
        </div>
        <span className="d-flex flex-column gap-1 text-nowrap " >
          <p className="d-flex align-items-start fw-bold amount ">
            {amount}
          </p>
          <p className="hidden">.</p>
        </span>
      </div>
    </>
  )
}