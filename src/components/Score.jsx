import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Score = () => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const score = useSelector((state) => state.performance.score);
  const numberOfQuestions = useSelector(
    (state) => state.userChoices.numberOfQuestions
  );
  const [showCalculating, setShowCalculating] = useState(true);
  const timeTaken = useSelector((state) => state.performance.timeTaken);

  useEffect(() => {
    const timer = setTimeout(() => setShowCalculating(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Theme colors
  const theme = {
    light: {
      bg: "rgba(255, 255, 255, 0.96)",
      text: "#1a1a1a",
      border: "#e2e8f0",
      primary: "#10b981",
      secondary: "#f8fafc",
      shadow: "0 20px 40px rgba(0,0,0,0.08)",
      accent: "#3b82f6",
      correct: "#10b981",
      wrong: "#ef4444",
    },
    dark: {
      bg: "rgba(15, 23, 42, 0.96)",
      text: "#f8fafc",
      border: "#334155",
      primary: "#10b981",
      secondary: "#1e293b",
      shadow: "0 20px 40px rgba(0,0,0,0.3)",
      accent: "#60a5fa",
      correct: "#10b981",
      wrong: "#ef4444",
    },
  };

  const colors = lightMode ? theme.light : theme.dark;

  return (
    <div
      style={{
        background: lightMode
          ? "radial-gradient(circle at 10% 20%, #f0fdf4 0%, #dcfce7 90%)"
          : "radial-gradient(circle at 10% 20%, #022c22 0%, #064e3b 90%)",
        minHeight: "100vh",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}
    >
      {/* Calculating Score Overlay */}
      {showCalculating && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: lightMode
              ? "rgba(255,255,255,0.9)"
              : "rgba(0,0,0,0.9)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              width: "clamp(60px, 15vw, 80px)",
              height: "clamp(60px, 15vw, 80px)",
              marginBottom: "clamp(1rem, 5vw, 2rem)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: `8px solid ${lightMode ? "#e5e7eb" : "#4b5563"}`,
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                border: `8px solid transparent`,
                borderTopColor: colors.primary,
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
          </div>

          <h2
            style={{
              fontSize: "clamp(1.25rem, 5vw, 2rem)",
              fontWeight: "700",
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "clamp(0.5rem, 3vw, 1rem)",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            Calculating Your Score
          </h2>

          <p
            style={{
              color: lightMode ? "#4b5563" : "#9ca3af",
              fontSize: "clamp(0.875rem, 3vw, 1rem)",
              maxWidth: "min(300px, 90vw)",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            Preparing your detailed performance analysis...
          </p>

          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* Score Display Content */}
      <div
        style={{
          backgroundColor: colors.bg,
          borderRadius: "clamp(1rem, 3vw, 1.5rem)",
          padding: "clamp(1rem, 3vw, 2rem)",
          boxShadow: colors.shadow,
          border: `1px solid ${colors.border}`,
          width: "100%",
          maxWidth: "min(800px, 95vw)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: `linear-gradient(90deg, ${colors.primary}, ${colors.accent})`,
            zIndex: 10,
          }}
        />

        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(1rem, 3vw, 2rem)",
          }}
        >
          <h1
            style={{
              color: colors.primary,
              fontSize: "clamp(1.25rem, 4vw, 2rem)",
              fontWeight: "800",
              marginBottom: "clamp(0.25rem, 1vw, 0.5rem)",
            }}
          >
            Quiz Completed!
          </h1>
          <p
            style={{
              color: colors.text,
              opacity: 0.8,
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
            }}
          >
            Here's how you performed
          </p>
        </div>

        {/* Score Card */}
        <div
          style={{
            backgroundColor: colors.secondary,
            borderRadius: "clamp(0.75rem, 2vw, 1rem)",
            padding: "clamp(1rem, 2vw, 1.5rem)",
            border: `1px solid ${colors.border}`,
            marginBottom: "clamp(1rem, 3vw, 2rem)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "clamp(1.5rem, 8vw, 3.5rem)",
              fontWeight: "800",
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "clamp(0.25rem, 1vw, 0.5rem)",
            }}
          >
            {score}/{numberOfQuestions}
          </div>
          <div
            style={{
              color: colors.text,
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              fontWeight: "600",
            }}
          >
            Your Score
          </div>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "clamp(0.75rem, 2vw, 1rem)",
            marginBottom: "clamp(1rem, 3vw, 2rem)",
          }}
        >
          <div
            style={{
              backgroundColor: colors.secondary,
              borderRadius: "clamp(0.5rem, 2vw, 0.75rem)",
              padding: "clamp(0.75rem, 2vw, 1rem)",
              border: `1px solid ${colors.border}`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: colors.correct,
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                fontWeight: "700",
                marginBottom: "clamp(0.125rem, 0.5vw, 0.25rem)",
              }}
            >
              {score}
            </div>
            <div
              style={{
                color: colors.text,
                opacity: 0.8,
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              }}
            >
              Correct
            </div>
          </div>
          <div
            style={{
              backgroundColor: colors.secondary,
              borderRadius: "clamp(0.5rem, 2vw, 0.75rem)",
              padding: "clamp(0.75rem, 2vw, 1rem)",
              border: `1px solid ${colors.border}`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: colors.wrong,
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                fontWeight: "700",
                marginBottom: "clamp(0.125rem, 0.5vw, 0.25rem)",
              }}
            >
              {numberOfQuestions - score}
            </div>
            <div
              style={{
                color: colors.text,
                opacity: 0.8,
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              }}
            >
              Incorrect
            </div>
          </div>
          <div
            style={{
              backgroundColor: colors.secondary,
              borderRadius: "clamp(0.5rem, 2vw, 0.75rem)",
              padding: "clamp(0.75rem, 2vw, 1rem)",
              border: `1px solid ${colors.border}`,
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: colors.primary,
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                fontWeight: "700",
                marginBottom: "clamp(0.125rem, 0.5vw, 0.25rem)",
              }}
            >
              {`${timeTaken}s`}
            </div>
            <div
              style={{
                color: colors.text,
                opacity: 0.8,
                fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
              }}
            >
              Time Taken
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "clamp(0.75rem, 2vw, 1rem)",
          }}
        >
          <button
            style={{
              padding: "clamp(0.5rem, 2vw, 0.75rem)",
              borderRadius: "clamp(0.5rem, 2vw, 0.75rem)",
              border: `1px solid ${colors.primary}`,
              backgroundColor: "transparent",
              color: colors.primary,
              fontWeight: "600",
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              ":hover": {
                backgroundColor: lightMode ? "#ecfdf5" : "#064e3b",
              },
            }}
          >
            Review Answers
          </button>
          <Link
            to="/"
            style={{
              display: "inline-flex", // Makes it behave like a button
              justifyContent: "center", // Centers the content inside the Link
              alignItems: "center", // Vertically aligns the content
              padding: "clamp(0.5rem, 2vw, 0.75rem)",
              borderRadius: "clamp(0.5rem, 2vw, 0.75rem)",
              border: "none",
              backgroundColor: colors.primary,
              color: "white",
              fontWeight: "600",
              fontSize: "clamp(0.875rem, 2vw, 1rem)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              textDecoration: "none", // Remove underline from the link
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
          >
            Go to HomePage
          </Link>
        </div>
      </div>
    </div>
  );
};
