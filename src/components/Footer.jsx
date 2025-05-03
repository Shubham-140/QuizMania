import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const isQuizActive = window.location.pathname.startsWith("/quiz");

  // Theme colors matching your existing design
  const theme = {
    light: {
      bg: "#ffffff",
      text: "#333333",
      border: "#e5e7eb",
      primary: "#10b981",
      secondary: "#f9f9f9",
      footerBg: "#f8faf9",
    },
    dark: {
      bg: "#2d2d2d",
      text: "#f5f5f5",
      border: "#4b5563",
      primary: "#10b981",
      secondary: "#3a3a3a",
      footerBg: "#1e1e1e",
    },
  };

  const colors = lightMode ? theme.light : theme.dark;

  // Define navigation items with paths
  const navItems = [
    { name: "Go to Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Rules", path: "/rules" },
    { name: "Give us Feedback", path: "/feedback" },
  ];

  return (
    <footer
      style={{
        backgroundColor: colors.footerBg,
        borderTop: `1px solid ${colors.border}`,
        padding: "clamp(30px, 5vw, 50px) 0",
        marginTop: "auto",
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 40px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "clamp(20px, 4vw, 40px)",
        }}
      >
        {/* Logo Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: colors.primary,
                color: "white",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                fontWeight: "800",
                boxShadow: `0 4px 12px ${
                  lightMode
                    ? "rgba(16, 185, 129, 0.3)"
                    : "rgba(16, 185, 129, 0.2)"
                }`,
                transform: "rotate(-5deg)",
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "rotate(0deg) scale(1.05)",
                },
              }}
            >
              QM
            </div>
            <span
              style={{
                background: `linear-gradient(to right, ${colors.primary}, #059669)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "800",
                fontSize: "20px",
              }}
            >
              QuizMania
            </span>
          </div>
          <p
            style={{
              color: colors.text,
              lineHeight: "1.6",
              opacity: 0.8,
            }}
          >
            Test your knowledge across various categories and climb the
            leaderboard!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              color: colors.primary,
              marginBottom: "20px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Quick Links
          </h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                {isQuizActive ? (
                  <span
                    style={{
                      color: colors.text,
                      opacity: 0.5,
                      cursor: "not-allowed",
                    }}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    style={{
                      color: colors.text,
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                      ":hover": {
                        color: colors.primary,
                      },
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3
            style={{
              color: colors.primary,
              marginBottom: "20px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Contact
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: colors.primary }}>✉️</span>
              <span style={{ color: colors.text }}>contact@quizmania.com</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ color: colors.primary }}>🌐</span>
              <span style={{ color: colors.text }}>quizmania.vercel.app</span>
            </div>
          </div>
        </div>

        {/* Developer Hub */}
        <div>
          <h3
            style={{
              color: colors.primary,
              marginBottom: "20px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Developer Hub
          </h3>
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {/* GitHub Link */}
            {isQuizActive ? (
              <div
                style={{
                  backgroundColor: colors.secondary,
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: 0.5,
                  cursor: "not-allowed",
                }}
              >
                <span style={{ color: colors.primary }}>💻</span>
                <span style={{ color: colors.text, fontSize: "14px" }}>
                  GitHub
                </span>
              </div>
            ) : (
              <Link
                to="https://github.com/Shubham-140"
                style={{
                  backgroundColor: colors.secondary,
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
                target="_blank"
              >
                <span style={{ color: colors.primary }}>💻</span>
                <span style={{ color: colors.text, fontSize: "14px" }}>
                  GitHub
                </span>
              </Link>
            )}

            {/* LeetCode Link */}
            {isQuizActive ? (
              <div
                style={{
                  backgroundColor: colors.secondary,
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  opacity: 0.5,
                  cursor: "not-allowed",
                }}
              >
                <span style={{ color: colors.primary }}>🧠</span>
                <span style={{ color: colors.text, fontSize: "14px" }}>
                  LeetCode
                </span>
              </div>
            ) : (
              <Link
                to="https://leetcode.com/u/Shubham-140/"
                style={{
                  backgroundColor: colors.secondary,
                  borderRadius: "8px",
                  padding: "8px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
                target="_blank"
              >
                <span style={{ color: colors.primary }}>🧠</span>
                <span style={{ color: colors.text, fontSize: "14px" }}>
                  LeetCode
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        style={{
          borderTop: `1px solid ${colors.border}`,
          marginTop: "clamp(30px, 5vw, 50px)",
          paddingTop: "20px",
          textAlign: "center",
          color: colors.text,
          opacity: 0.7,
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} QuizMania. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;