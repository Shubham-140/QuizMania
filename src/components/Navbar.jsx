import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMode } from "../features/ColorSlice";
import { ExitConfirmationOverlay } from "./ExitConfirmationOverlay";
import { useState, useEffect } from "react";

const Navbar = () => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const dispatch = useDispatch();
  const [showExitOverlay, setShowExitOverlay] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Theme colors matching your existing design
  const theme = {
    light: {
      bg: "#ffffff",
      text: "#333333",
      border: "#e5e7eb",
      primary: "#10b981",
      secondary: "#f9f9f9",
    },
    dark: {
      bg: "#2d2d2d",
      text: "#f5f5f5",
      border: "#4b5563",
      primary: "#10b981",
      secondary: "#3a3a3a",
    },
  };

  const colors = lightMode ? theme.light : theme.dark;

  return (
    <nav
      style={{
        height: "clamp(48px, 5.2vw, 56px)",
        backgroundColor: colors.bg,
        boxShadow: `0 2px 20px ${
          lightMode ? "rgba(0,0,0,0.08)" : "rgba(0,0,0,0.2)"
        }`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(16px, 5vw, 40px)",
        zIndex: 1000,
        borderBottom: `1px solid ${colors.border}`,
        fontFamily: "'Inter', -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Left - Logo (unchanged) */}
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer",
          textDecoration: "none",
          zIndex: 1001,
        }}
        onClick={(e) => {
          if (window.location.pathname.startsWith("/quiz")) {
            e.preventDefault();
            setShowExitOverlay(true);
            return;
          }
        }}
      >
        <div
          style={{
            width: "clamp(30px, 4.5vw, 36px)",
            height: "clamp(30px, 4.5vw, 36px)",
            backgroundColor: colors.primary,
            color: "white",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "clamp(14px, 2.4vw, 18px)",
            fontWeight: "800",
            boxShadow: `0 4px 12px ${
              lightMode ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"
            }`,
            transform: "rotate(-5deg)",
            transition: "transform 0.3s ease",
          }}
        >
          QM
        </div>
        <h1
          style={{
            background: `linear-gradient(to right, ${colors.primary}, #059669)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
            fontSize: "clamp(16px, 2.4vw, 20px)",
            letterSpacing: "-0.5px",
            margin: 0,
          }}
        >
          QuizMania
        </h1>
      </Link>

      {/* Middle - Navigation Links (Desktop only) */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: "clamp(16px, 3vw, 24px)",
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {["Home", "About", "Rules", "Feedback"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              style={{
                padding: "6px 0",
                position: "relative",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  color: colors.text,
                  fontWeight: "600",
                  fontSize: "clamp(14px, 1.8vw, 18px)", // Larger font size
                }}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Right - Theme Toggle (unchanged) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          zIndex: 1001,
        }}
      >
        <div onClick={() => dispatch(toggleMode())}>
          <button
            style={{
              width: "44px",
              height: "24px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: lightMode ? "#e5e7eb" : "#4b5563",
              position: "relative",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              padding: "0 3px",
              transition: "background-color 0.3s ease",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: "white",
                transform: lightMode ? "translateX(0)" : "translateX(20px)",
                transition: "transform 0.3s ease",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "10px",
              }}
            >
              {lightMode ? "☀️" : "🌙"}
            </div>
          </button>
        </div>

        {/* Hamburger Menu (Mobile only) */}
        {isMobile && (
          <div
            style={{
              width: "24px",
              height: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              cursor: "pointer",
              marginLeft: "10px",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: colors.text,
                transform: mobileMenuOpen
                  ? "translateY(6px) rotate(45deg)"
                  : "none",
                transition: "all 0.3s ease",
              }}
            />
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: colors.text,
                opacity: mobileMenuOpen ? 0 : 1,
                transition: "all 0.3s ease",
              }}
            />
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: colors.text,
                transform: mobileMenuOpen
                  ? "translateY(-6px) rotate(-45deg)"
                  : "none",
                transition: "all 0.3s ease",
              }}
            />
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay (Mobile only) */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundColor: colors.bg,
            zIndex: 999,
            display: mobileMenuOpen ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "32px",
            transition: "opacity 0.3s ease",
          }}
        >
          {["Home", "About", "Rules", "Feedback"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              style={{
                textDecoration: "none",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span
                style={{
                  color: colors.text,
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              >
                {item}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Exit Confirmation Overlay (unchanged) */}
      {showExitOverlay && (
        <ExitConfirmationOverlay setShowExitOverlay={setShowExitOverlay} />
      )}
    </nav>
  );
};

export default Navbar;
