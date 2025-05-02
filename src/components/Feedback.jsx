import { useSelector } from "react-redux";

const Feedback = () => {
  const lightMode = useSelector((state) => state.color.lightMode);

  // Theme colors matching your existing design
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
      inputBg: "#f8fafc",
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
      inputBg: "#1e293b",
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
      {/* ONLY CHANGE: Adjusted maxWidth to 900px to match About component */}
      <div
        style={{
          backgroundColor: colors.cardBg,
          borderRadius: "clamp(1rem, 3vw, 1.5rem)",
          padding: "clamp(1.5rem, 5vw, 3rem)",
          boxShadow: colors.shadow,
          border: `1px solid ${colors.border}`,
          width: "100%",
          maxWidth: "900px", // This is the only line changed from original
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
        {/* Header - unchanged */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(1.5rem, 5vw, 2.5rem)",
          }}
        >
          <h1
            style={{
              color: colors.primary,
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              fontWeight: "800",
              marginBottom: "0.5rem",
              background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Send Feedback
          </h1>
          <p
            style={{
              color: colors.textSecondary,
              fontSize: "clamp(0.875rem, 3vw, 1rem)",
            }}
          >
            Help us improve QuizMania
          </p>
        </div>

        {/* Form - completely unchanged */}
        <form style={{ display: "grid", gap: "1.5rem" }}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              style={{
                display: "block",
                color: colors.text,
                fontWeight: "600",
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              Your Name (Optional)
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.75rem",
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.inputBg,
                color: colors.text,
                fontSize: "1rem",
                transition: "all 0.2s ease",
                ":focus": {
                  outline: "none",
                  borderColor: colors.primary,
                  boxShadow: `0 0 0 3px ${
                    lightMode
                      ? "rgba(16, 185, 129, 0.2)"
                      : "rgba(16, 185, 129, 0.3)"
                  }`,
                },
              }}
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                color: colors.text,
                fontWeight: "600",
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              Email (Optional)
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.75rem",
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.inputBg,
                color: colors.text,
                fontSize: "1rem",
                transition: "all 0.2s ease",
                ":focus": {
                  outline: "none",
                  borderColor: colors.primary,
                  boxShadow: `0 0 0 3px ${
                    lightMode
                      ? "rgba(16, 185, 129, 0.2)"
                      : "rgba(16, 185, 129, 0.3)"
                  }`,
                },
              }}
            />
          </div>

          {/* Feedback Type */}
          <div>
            <label
              style={{
                display: "block",
                color: colors.text,
                fontWeight: "600",
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              Feedback Type
            </label>

            <div style={{ position: "relative" }}>
              <select
                style={{
                  width: "100%",
                  padding: "0.75rem 2.5rem 0.75rem 1rem",
                  borderRadius: "0.75rem",
                  border: `1px solid ${colors.border}`,
                  backgroundColor: colors.inputBg,
                  color: colors.text,
                  fontSize: "0.9rem",
                  appearance: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  ":hover": {
                    borderColor: colors.primary,
                  },
                  ":focus": {
                    outline: "none",
                    borderColor: colors.primary,
                    boxShadow: `0 0 0 3px ${
                      lightMode
                        ? "rgba(16, 185, 129, 0.2)"
                        : "rgba(16, 185, 129, 0.3)"
                    }`,
                  },
                }}
              >
                <option value="">Select feedback type</option>
                <option value="suggestion">Suggestion</option>
                <option value="bug">Bug Report</option>
                <option value="question">Question</option>
                <option value="compliment">Compliment</option>
                <option value="other">Other</option>
              </select>

              {/* Custom dropdown arrow */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "1rem",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: colors.textSecondary,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                color: colors.text,
                fontWeight: "600",
                marginBottom: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              Your Feedback
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="What would you like to tell us?"
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                borderRadius: "0.75rem",
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.inputBg,
                color: colors.text,
                fontSize: "1rem",
                transition: "all 0.2s ease",
                resize: "vertical",
                minHeight: "120px",
                ":focus": {
                  outline: "none",
                  borderColor: colors.primary,
                  boxShadow: `0 0 0 3px ${
                    lightMode
                      ? "rgba(16, 185, 129, 0.2)"
                      : "rgba(16, 185, 129, 0.3)"
                  }`,
                },
              }}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              padding: "clamp(0.75rem, 3vw, 1rem)",
              borderRadius: "0.75rem",
              border: "none",
              backgroundColor: colors.primary,
              color: "white",
              fontWeight: "600",
              fontSize: "1rem",
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
          >
            Submit Feedback
          </button>
        </form>

        {/* Thank You Note */}
        <p
          style={{
            textAlign: "center",
            color: colors.textSecondary,
            fontSize: "0.875rem",
            marginTop: "2rem",
          }}
        >
          We appreciate your time helping us improve!
        </p>
      </div>
    </div>
  );
};

export default Feedback;
