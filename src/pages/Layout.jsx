import { Outlet, useLocation } from "react-router-dom";
import { useInView } from "react-hook-inview";

import Navbar from "../components/Navbar";
import PageFooter from "../components/PageFooter";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Layout({ theme, setTheme }) {
  const [ref, isVisible] = useInView({
    threshold: 0.86,
  });

  const [scrolledRef, isScrolled] = useInView({
    threshold: 1,
  });

  const [navigateRef, isNavigate] = useInView({
    threshold: 1,
  });

  function scrollToTop() {
    document.documentElement.scrollTo(0, 0);
  }

  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        <div
          className={`App w-full relative bg-white dark:bg-[#191B21] dark:text-white select-none`}
        >
          <div
            className={`fixed w-full top-2 ${
              isNavigate ? "" : "-translate-y-2"
            } z-50 flex justify-center mb-2 transition-transform  ${
              isVisible === true
                ? "-translate-y-28 duration-1000"
                : "duration-700"
            }`}
          >
            <Navbar
              newHome={true}
              theme={theme}
              setTheme={setTheme}
              isNavigate={isNavigate}
            />
          </div>

          <div className="absolute top-0 w-full bg-white dark:bg-[#191B21]">
            <button
              onClick={() => scrollToTop()}
              className={`fixed h-14 w-14 z-40 bg-amber-500 bg-opacity-75 dark:bg-amber-500 dark:bg-opacity-60 rounded-full right-12 transition-all duration-500 ${
                isScrolled ? "bottom-10 animate-bounce" : " -bottom-24"
              }`}
            >
              <KeyboardArrowUpIcon fontSize="large" />
            </button>
            <div
              ref={scrolledRef}
              className="absolute top-[1200px] h-full"
            ></div>
            <div
              ref={navigateRef}
              className="absolute top-[800px] h-full"
            ></div>
            <Outlet />
            <div ref={ref}>
              <PageFooter isVisible={isVisible} moreVisible={true} />
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
}

export default Layout;
