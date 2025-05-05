import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const About = () => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const navigate = useNavigate();

  // Theme colors matching your homepage
  const theme = {
    light: {
      bg: "radial-gradient(circle at 10% 20%, #f0fdf4 0%, #dcfce7 90%)",
      cardBg: "rgba(255, 255, 255, 0.96)",
      text: "#1a1a1a",
      textSecondary: "#4b5563",
      border: "#e2e8f0",
      primary: "#10b981",
      accent: "#3b82f6",
      shadow: "0 20px 40px rgba(0,0,0,0.08)",
    },
    dark: {
      bg: "radial-gradient(circle at 10% 20%, #022c22 0%, #064e3b 90%)",
      cardBg: "rgba(15, 23, 42, 0.96)",
      text: "#f8fafc",
      textSecondary: "#9ca3af",
      border: "#334155",
      primary: "#10b981",
      accent: "#60a5fa",
      shadow: "0 20px 40px rgba(0,0,0,0.3)",
    },
  };

  const colors = lightMode ? theme.light : theme.dark;

  return (
    <div
      style={{
        background: colors.bg,
        minHeight: "100vh",
        padding: "clamp(1rem, 5vw, 2rem)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: colors.cardBg,
          borderRadius: "clamp(1rem, 3vw, 1.5rem)",
          padding: "clamp(1.5rem, 5vw, 3rem)",
          boxShadow: colors.shadow,
          border: `1px solid ${colors.border}`,
          width: "100%",
          maxWidth: "900px",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          position: "relative",
          overflow: "hidden",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
            zIndex: 10,
          },
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(1.5rem, 5vw, 2.5rem)",
          }}
        >
          <h1
            style={{
              color: colors.primary,
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              fontWeight: "800",
              marginBottom: "0.5rem",
              background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About QuizMania
          </h1>
          <p
            style={{
              color: colors.textSecondary,
              fontSize: "clamp(0.875rem, 3vw, 1.125rem)",
            }}
          >
            Test your knowledge and climb the leaderboards
          </p>
        </div>

        {/* Content Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(1.5rem, 4vw, 2rem)",
            marginBottom: "clamp(1.5rem, 5vw, 2.5rem)",
          }}
        >
          {/* Feature 1 */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "1rem",
              padding: "1.5rem",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: `0 10px 25px ${
                  lightMode ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.2)"
                }`,
              },
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: colors.primary,
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3
              style={{
                color: colors.text,
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              Diverse Categories
            </h3>
            <p style={{ color: colors.textSecondary, lineHeight: "1.6" }}>
              From science to pop culture, we've got quizzes on every topic you
              can imagine.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "1rem",
              padding: "1.5rem",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: `0 10px 25px ${
                  lightMode ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.2)"
                }`,
              },
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: colors.primary,
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3
              style={{
                color: colors.text,
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              Time Challenges
            </h3>
            <p style={{ color: colors.textSecondary, lineHeight: "1.6" }}>
              Test your speed and knowledge with our timed quiz modes.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.border}`,
              borderRadius: "1rem",
              padding: "1.5rem",
              transition: "all 0.3s ease",
              ":hover": {
                transform: "translateY(-5px)",
                boxShadow: `0 10px 25px ${
                  lightMode ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.2)"
                }`,
              },
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: colors.primary,
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="18" y1="8" x2="23" y2="13"></line>
                <line x1="23" y1="8" x2="18" y2="13"></line>
              </svg>
            </div>
            <h3
              style={{
                color: colors.text,
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "0.75rem",
              }}
            >
              No Login Required
            </h3>
            <p style={{ color: colors.textSecondary, lineHeight: "1.6" }}>
              Jump right into quizzing without any account setup or personal
              data collection.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              padding: "clamp(0.75rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2rem)",
              borderRadius: "2rem",
              border: "none",
              backgroundColor: colors.primary,
              color: "white",
              fontWeight: "600",
              fontSize: "clamp(1rem, 3vw, 1.125rem)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: `0 4px 12px ${
                lightMode
                  ? "rgba(16, 185, 129, 0.3)"
                  : "rgba(16, 185, 129, 0.2)"
              }`,
              ":hover": {
                transform: "translateY(-2px)",
                boxShadow: `0 6px 16px ${
                  lightMode
                    ? "rgba(16, 185, 129, 0.4)"
                    : "rgba(16, 185, 129, 0.3)"
                }`,
              },
            }}
            onClick={() => navigate("/")}
          >
            Start Quizzing Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
