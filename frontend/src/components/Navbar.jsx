import React, { useEffect, useState } from "react";

import { Code2, LogIn, UserPlus, LogOut, Trophy, Menu, X } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { navbarStyles } from "../assets/dummyStyle";

const Navbar = () => {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("token")),
  );

  const [user, setUser] = useState(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  // ===============================
  // LOAD USER
  // ===============================

  const loadUser = () => {
    const token = localStorage.getItem("token");

    const storedUser = localStorage.getItem("user");

    setLoggedIn(Boolean(token));

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();

    const handleAuthChange = () => {
      loadUser();
    };

    window.addEventListener("authChanged", handleAuthChange);

    window.addEventListener("storage", handleAuthChange);

    return () => {
      window.removeEventListener("authChanged", handleAuthChange);

      window.removeEventListener("storage", handleAuthChange);
    };
  }, []);

  // ===============================
  // NAVIGATION
  // ===============================

  const handleNavigation = (path) => {
    setMobileOpen(false);

    navigate(path);
  };

  // ===============================
  // LOGOUT
  // ===============================

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    setLoggedIn(false);

    setUser(null);

    setMobileOpen(false);

    window.dispatchEvent(new Event("authChanged"));

    navigate("/login");
  };

  return (
    <nav
      className="
        w-full
        bg-white
        shadow-sm
        relative
        z-50
      "
    >
      <div
        className="
          w-full
          px-4
          sm:px-6
          lg:px-8
          h-20
          flex
          items-center
          justify-between
          gap-4
        "
      >
        {/* =========================
            LOGO
        ========================== */}

        <button
          type="button"
          onClick={() => handleNavigation("/")}
          className="
            flex
            items-center
            gap-1
            shrink-0
            cursor-pointer
            border-none
            bg-transparent
          "
        >
          <Code2 size={32} className="text-[#40545c]" />

          <span
            className="
              text-3xl
              sm:text-4xl
              font-bold
              text-[#4d8a78]
            "
          >
            CodePlay
          </span>
        </button>

        {/* =========================
            DESKTOP RIGHT SIDE
        ========================== */}

        <div
          className="
            hidden
            md:flex
            items-center
            justify-end
            gap-3
            ml-auto
            shrink-0
          "
        >
          {loggedIn ? (
            <>
              {/* MY RESULT */}

              <button
                type="button"
                onClick={() => handleNavigation("/my-result")}
                className={`
                  ${navbarStyles.resultsButton}
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                `}
              >
                <Trophy className={navbarStyles.buttonIcon} />

                <span>My Result</span>
              </button>

              {/* USER NAME */}

              {user && (
                <span
                  className="
                    text-[#40545c]
                    font-medium
                    whitespace-nowrap
                    px-1
                  "
                >
                  {user.name || user.username || user.email || ""}
                </span>
              )}

              {/* LOGOUT */}

              <button
                type="button"
                onClick={handleLogout}
                className={`
                  ${navbarStyles.logoutButton}
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                `}
              >
                <LogOut className={navbarStyles.buttonIcon} />

                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              {/* LOGIN */}

              <button
                type="button"
                onClick={() => handleNavigation("/login")}
                className={`
                  ${navbarStyles.loginButton}
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                `}
              >
                <LogIn className={navbarStyles.buttonIcon} />

                <span>Login</span>
              </button>

              {/* SIGN UP */}

              <button
                type="button"
                onClick={() => handleNavigation("/signup")}
                className={`
                  ${navbarStyles.signupButton}
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                `}
              >
                <UserPlus className={navbarStyles.buttonIcon} />

                <span>Sign Up</span>
              </button>
            </>
          )}
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}

        <button
          type="button"
          className="
            md:hidden
            shrink-0
            p-2
            rounded-lg
            text-[#40545c]
            hover:bg-[#edf7ef]
            cursor-pointer
          "
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}

      {mobileOpen && (
        <div
          className="
            md:hidden
            absolute
            top-full
            right-0
            w-64
            bg-white
            shadow-xl
            border
            border-[#dce8e5]
            rounded-bl-xl
            p-4
            z-50
          "
        >
          <div
            className="
              flex
              flex-col
              gap-2
            "
          >
            {loggedIn ? (
              <>
                {/* MOBILE MY RESULT */}

                <button
                  type="button"
                  onClick={() => handleNavigation("/my-result")}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    text-left
                    text-[#315d4a]
                    bg-[#eaf5e9]
                    hover:bg-[#dff1e5]
                    cursor-pointer
                  "
                >
                  <Trophy size={20} />

                  <span>My Result</span>
                </button>

                {/* MOBILE USER */}

                {user && (
                  <div
                    className="
                      px-4
                      py-2
                      text-sm
                      text-[#64747a]
                    "
                  >
                    {user.name || user.username || user.email || ""}
                  </div>
                )}

                {/* MOBILE LOGOUT */}

                <button
                  type="button"
                  onClick={handleLogout}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    text-left
                    text-[#a04c43]
                    bg-[#fff1ef]
                    hover:bg-[#ffe4e0]
                    cursor-pointer
                  "
                >
                  <LogOut size={20} />

                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                {/* MOBILE LOGIN */}

                <button
                  type="button"
                  onClick={() => handleNavigation("/login")}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    text-left
                    text-[#315d4a]
                    bg-[#dff1e5]
                    hover:bg-[#c9ebd4]
                    cursor-pointer
                  "
                >
                  <LogIn size={20} />

                  <span>Login</span>
                </button>

                {/* MOBILE SIGNUP */}

                <button
                  type="button"
                  onClick={() => handleNavigation("/signup")}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-xl
                    text-left
                    text-[#40545c]
                    bg-[#f7f1e3]
                    hover:bg-[#eaf6fb]
                    cursor-pointer
                  "
                >
                  <UserPlus size={20} />

                  <span>Sign Up</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
