import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CountdownOverlay } from "./CountdownOverlay";

const HomePage = () => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const navigate = useNavigate();
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [showCountdown, setShowCountdown] = useState(false);
  const [selectCategoryWarning, setSelectCategoryWarning] = useState(false);
  const [selectDifficultyWarning, setSelectDifficultyWarning] = useState(false);

  // Theme colors
  const theme = {
    light: {
      primary: "#10b981",
      primaryDark: "#059669",
      primaryLight: "#d1fae5",
      background: "#f8f9fa",
      cardBg: "#ffffff",
      text: "#333333",
      textSecondary: "#555555",
      border: "#e5e7eb",
      shadow: "rgba(0, 0, 0, 0.1)",
      gradient: "linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)",
    },
    dark: {
      primary: "#10b981",
      primaryDark: "#059669",
      primaryLight: "#064e3b",
      background: "#1a1a1a",
      cardBg: "#2d2d2d",
      text: "#f5f5f5",
      textSecondary: "#d1d5db",
      border: "#4b5563",
      shadow: "rgba(0, 0, 0, 0.3)",
      gradient: "linear-gradient(135deg, #064e3b 0%, #022c22 100%)",
    },
  };

  const colors = lightMode ? theme.light : theme.dark;

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: colors.background,
      backgroundImage: colors.gradient,
      padding: "16px",
      fontFamily:
        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      boxSizing: "border-box",
      transition: "all 0.3s ease",
    },
    card: {
      backgroundColor: colors.cardBg,
      borderRadius: "20px",
      boxShadow: `0 12px 40px ${colors.shadow}`,
      padding: "clamp(24px, 5vw, 48px)",
      width: "100%",
      maxWidth: "640px",
      minWidth: "280px",
      textAlign: "center",
      margin: "0 auto",
      border: `1px solid ${colors.border}`,
      transition: "all 0.3s ease",
    },
    logoContainer: {
      marginBottom: "clamp(24px, 5vw, 36px)",
      position: "relative",
    },
    logo: {
      width: "clamp(72px, 16vw, 96px)",
      height: "clamp(72px, 16vw, 96px)",
      margin: "0 auto",
      backgroundColor: colors.primary,
      color: "white",
      borderRadius: "24px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "clamp(32px, 8vw, 42px)",
      fontWeight: "800",
      boxShadow: `0 8px 20px ${
        lightMode ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"
      }`,
      transition: "all 0.3s ease",
      transform: "rotate(-5deg)",
      ":hover": {
        transform: "rotate(0deg) scale(1.05)",
      },
    },
    title: {
      color: colors.text,
      marginTop: "clamp(12px, 3vw, 20px)",
      fontSize: "clamp(32px, 8vw, 48px)",
      fontWeight: "800",
      background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryDark})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      lineHeight: "1.2",
      letterSpacing: "-0.5px",
      marginBottom: "8px",
    },
    subtitle: {
      color: colors.textSecondary,
      fontSize: "clamp(14px, 3vw, 16px)",
      fontWeight: "400",
      marginBottom: "clamp(20px, 5vw, 32px)",
    },
    section: {
      marginBottom: "clamp(20px, 5vw, 32px)",
      textAlign: "left",
    },
    sectionTitle: {
      color: colors.textSecondary,
      marginBottom: "12px",
      fontSize: "clamp(14px, 3.5vw, 16px)",
      fontWeight: "600",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
    },
    dropdown: {
      width: "100%",
      padding: "16px",
      borderRadius: "12px",
      border: `1px solid ${colors.border}`,
      backgroundColor: lightMode ? "#f9f9f9" : "#3a3a3a",
      color: colors.text,
      fontSize: "clamp(14px, 3.5vw, 16px)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      appearance: "none",
      backgroundImage:
        'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2310b981%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 16px center",
      backgroundSize: "12px auto",
      ":focus": {
        outline: "none",
        borderColor: colors.primary,
        boxShadow: `0 0 0 3px ${
          lightMode ? "rgba(16, 185, 129, 0.2)" : "rgba(16, 185, 129, 0.3)"
        }`,
      },
    },
    difficultyButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "clamp(12px, 3vw, 16px)",
      marginBottom: "16px",
      flexWrap: "wrap",
    },
    difficultyButtonEasy: {
      padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 24px)",
      borderRadius: "24px",
      border: "none",
      backgroundColor: "#34d399",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "clamp(14px, 3.5vw, 16px)",
      boxShadow: `0 4px 12px ${
        lightMode ? "rgba(52, 211, 153, 0.3)" : "rgba(52, 211, 153, 0.2)"
      }`,
      ":hover": {
        backgroundColor: "#10b981",
        transform: "translateY(-2px)",
        boxShadow: `0 6px 16px ${
          lightMode ? "rgba(16, 185, 129, 0.4)" : "rgba(16, 185, 129, 0.3)"
        }`,
      },
    },
    difficultyButtonMedium: {
      padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 24px)",
      borderRadius: "24px",
      border: "none",
      backgroundColor: "#f59e0b",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "clamp(14px, 3.5vw, 16px)",
      boxShadow: `0 4px 12px ${
        lightMode ? "rgba(245, 158, 11, 0.3)" : "rgba(245, 158, 11, 0.2)"
      }`,
      ":hover": {
        backgroundColor: "#d97706",
        transform: "translateY(-2px)",
        boxShadow: `0 6px 16px ${
          lightMode ? "rgba(217, 119, 6, 0.4)" : "rgba(217, 119, 6, 0.3)"
        }`,
      },
    },
    difficultyButtonHard: {
      padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 24px)",
      borderRadius: "24px",
      border: "none",
      backgroundColor: "#ef4444",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontSize: "clamp(14px, 3.5vw, 16px)",
      boxShadow: `0 4px 12px ${
        lightMode ? "rgba(239, 68, 68, 0.3)" : "rgba(239, 68, 68, 0.2)"
      }`,
      ":hover": {
        backgroundColor: "#dc2626",
        transform: "translateY(-2px)",
        boxShadow: `0 6px 16px ${
          lightMode ? "rgba(220, 38, 38, 0.4)" : "rgba(220, 38, 38, 0.3)"
        }`,
      },
    },
    actionButtons: {
      display: "flex",
      flexDirection: "column",
      gap: "clamp(12px, 3vw, 16px)",
      marginTop: "clamp(20px, 5vw, 32px)",
    },
    secondaryButtons: {
      display: "flex",
      gap: "clamp(12px, 3vw, 16px)",
      width: "100%",
    },
    startButton: {
      padding: "clamp(16px, 4vw, 20px)",
      borderRadius: "12px",
      border: "none",
      backgroundColor: colors.primary,
      color: "white",
      fontWeight: "600",
      fontSize: "clamp(16px, 4vw, 18px)",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: `0 6px 16px ${
        lightMode ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"
      }`,
      letterSpacing: "0.5px",
      ":hover": {
        backgroundColor: colors.primaryDark,
        transform: "translateY(-2px)",
        boxShadow: `0 8px 20px ${
          lightMode ? "rgba(16, 185, 129, 0.4)" : "rgba(16, 185, 129, 0.3)"
        }`,
      },
    },
    rulesButton: {
      padding: "clamp(12px, 3vw, 16px)",
      borderRadius: "12px",
      border: `2px solid ${colors.primary}`,
      backgroundColor: "transparent",
      color: colors.primary,
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      flex: 1,
      fontSize: "clamp(14px, 3.5vw, 16px)",
      ":hover": {
        backgroundColor: lightMode ? "#ecfdf5" : "#064e3b",
        transform: "translateY(-2px)",
      },
    },
    settingsButton: {
      padding: "clamp(12px, 3vw, 16px)",
      borderRadius: "12px",
      border: "none",
      backgroundColor: lightMode ? "#e5e7eb" : "#4b5563",
      color: lightMode ? "#333" : "#f3f4f6",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
      flex: 1,
      fontSize: "clamp(14px, 3.5vw, 16px)",
      ":hover": {
        backgroundColor: lightMode ? "#d1d5db" : "#374151",
        transform: "translateY(-2px)",
      },
    },
    themeToggle: {
      position: "absolute",
      top: "-10px",
      right: "0",
      backgroundColor: colors.cardBg,
      border: `1px solid ${colors.border}`,
      borderRadius: "20px",
      padding: "8px 12px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      ":hover": {
        transform: "translateY(-2px)",
        boxShadow: `0 4px 8px ${colors.shadow}`,
      },
    },
    "@media (max-width: 480px)": {
      difficultyButtons: {
        flexDirection: "column",
        alignItems: "center",
      },
      difficultyButtonEasy: {
        width: "100%",
        maxWidth: "240px",
      },
      difficultyButtonMedium: {
        width: "100%",
        maxWidth: "240px",
      },
      difficultyButtonHard: {
        width: "100%",
        maxWidth: "240px",
      },
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.card}>
          {/* Logo and Theme Toggle */}
          <div style={styles.logoContainer}>
            <div style={styles.logo}>QM</div>
            <h1 style={styles.title}>QuizMania</h1>
            <p style={styles.subtitle}>
              Test your knowledge across various categories
            </p>
          </div>

          {/* Category Selection */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Select Category</h2>
            <select
              style={{
                ...styles.dropdown,
                ...(selectCategoryWarning && {
                  borderColor: lightMode ? "#ef4444" : "#dc2626",
                  animation: "shake 0.5s ease-in-out",
                }),
              }}
              onClick={(e) => {
                if (e.target.value !== "") {
                  setCategory(e.target.value);
                }
              }}
            >
              <option value="">Select a category</option>
              <option value="general_knowledge">General Knowledge</option>
              <option value="film">Movies & Film</option>
              <option value="music">Music</option>
              <option value="science">Science</option>
              <option value="arts_and_literature">Arts & Literature</option>
              <option value="history">History</option>
              <option value="geography">Geography</option>
              <option value="society_and_culture">Society & Culture</option>
              <option value="food_and_drink">Food & Drink</option>
              <option value="sports">Sports</option>
            </select>

            {/* Premium Warning - same style as difficulty */}
            {selectCategoryWarning && (
              <div
                style={{
                  position: "relative",
                  marginTop: "1rem",
                  padding: "1rem",
                  backgroundColor: lightMode ? "#fef2f2" : "#450a0a",
                  borderLeft: `4px solid ${lightMode ? "#ef4444" : "#dc2626"}`,
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  animation: "shake 0.5s ease-in-out",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={lightMode ? "#ef4444" : "#fca5a5"}
                  strokeWidth="2"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span
                  style={{
                    color: lightMode ? "#ef4444" : "#fca5a5",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                  }}
                >
                  Please select a category to continue
                </span>
              </div>
            )}
          </div>

          {/* Difficulty Selection */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Select Difficulty</h2>
            <div style={styles.difficultyButtons}>
              <button
                style={styles.difficultyButtonEasy}
                onClick={() => setDifficulty("easy")}
              >
                Easy {difficulty === "easy" && "✓"}
              </button>
              <button
                style={styles.difficultyButtonMedium}
                onClick={() => setDifficulty("medium")}
              >
                Medium {difficulty === "medium" && "✓"}
              </button>
              <button
                style={styles.difficultyButtonHard}
                onClick={() => setDifficulty("hard")}
              >
                Hard {difficulty === "hard" && "✓"}
              </button>
            </div>

            {/* Premium Warning */}
            {selectDifficultyWarning && (
              <div
                style={{
                  position: "relative",
                  marginTop: "1rem",
                  padding: "1rem",
                  backgroundColor: lightMode ? "#fef2f2" : "#450a0a",
                  borderLeft: `4px solid ${lightMode ? "#ef4444" : "#dc2626"}`,
                  borderRadius: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  animation: "shake 0.5s ease-in-out",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={lightMode ? "#ef4444" : "#fca5a5"}
                  strokeWidth="2"
                >
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span
                  style={{
                    color: lightMode ? "#ef4444" : "#fca5a5",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                  }}
                >
                  Please select a difficulty level to continue
                </span>
              </div>
            )}
          </div>
          <style>{`
 @keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-4px); }
  40%, 80% { transform: translateX(4px); }
}
  `}</style>

          {/* Action Buttons */}
          <div style={styles.actionButtons}>
            <button
              style={styles.startButton}
              onClick={() => {
                if (category === "") {
                  setSelectCategoryWarning(true);
                  setTimeout(() => {
                    setSelectCategoryWarning(false);
                  }, 1000);
                  return;
                } else if (difficulty === "") {
                  setSelectDifficultyWarning(true);
                  setTimeout(() => {
                    setSelectDifficultyWarning(false);
                  }, 1000);
                  return;
                }
                setShowCountdown(true);
              }}
            >
              Start Quiz
            </button>
            <div style={styles.secondaryButtons}>
              <button
                style={styles.rulesButton}
                onClick={() => navigate("/rules")}
              >
                Rules
              </button>
              <button
                style={styles.settingsButton}
                onClick={() => navigate("/settings")}
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
      {showCountdown && (
        <CountdownOverlay
          lightMode={lightMode}
          onCountdownEnd={() => navigate(`/quiz/${category}/${difficulty}`)}
        />
      )}
    </>
  );
};

export default HomePage;
