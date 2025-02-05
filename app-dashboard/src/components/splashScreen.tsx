import { useEffect, useState } from "react";
import Logo from "../assets/logo.svg"

interface Props {
  name: string
  label: string
  timer: number,
}

export default function SplashScreen({ name, label, timer }: Props) {

  const [showSplash, setShowSplash] = useState(false);


  useEffect(() => {

    const timeout = setTimeout(() => setShowSplash(false), timer);

    if (typeof window !== undefined) {

      if (!sessionStorage.getItem('sessionInitialized')) {
        setShowSplash(true);
      } else {
        setShowSplash(false);
      }
      const handleUnload = () => sessionStorage.removeItem('sessionInitialized')

      window.addEventListener("beforeunload", handleUnload);

      return () => {
        clearTimeout(timeout)
        handleUnload
      } 

    }

  }, [timer]);



  return (
    <>
      {showSplash &&

        <div className="splash-screen  w-100 h-100 ">
          <p className="font-normal d-flex gap-2 " >
            <img src={Logo} alt="PayApp Logo" />
            {name}
            <span className="font-thin">{label}</span>
          </p>
        </div>

      }
    </>
  )
}