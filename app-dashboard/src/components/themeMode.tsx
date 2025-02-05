import { useEffect, useState } from "react";
import "../css/themeMode.css"

export default function Theme() {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
    <div className="theme d-flex justify-content-between flex-nowrap " onClick={() => handleTheme()}>
      {theme == "light" &&
        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="45" height="45" rx="7.5" stroke="#CFDBD5" strokeOpacity="0.7" strokeLinecap="square" />
          <path d="M21.4883 16.9883C24.793 16.9883 27.5 19.6953 27.5 23C27.5 26.3047 24.793 29.0117 21.4883 29.0117C21.2422 29.0117 20.9961 28.9766 20.75 28.9414C22.1914 27.3242 23 25.2148 23 23C23 20.7852 22.1914 18.6758 20.75 17.0586C20.9961 17.0234 21.2422 16.9883 21.4883 16.9883ZM21.4883 15.5117C20.1523 15.5117 18.8516 15.8633 17.7617 16.4961C19.9766 17.7969 21.4883 20.2227 21.4883 23C21.4883 25.7773 19.9766 28.2031 17.7617 29.5039C18.8516 30.1367 20.1523 30.4883 21.4883 30.4883C25.6367 30.4883 29.0117 27.1484 29.0117 23C29.0117 18.8516 25.6367 15.5117 21.4883 15.5117Z" fill="currentColor" />
        </svg>
      }
      {theme == "dark" &&
        <div className="svgLight">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
          </svg>
        </div>
      }
      </div>
    </>
  )
}