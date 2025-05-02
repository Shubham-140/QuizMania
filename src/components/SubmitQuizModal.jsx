import { useDispatch, useSelector } from "react-redux";
import { setScore, setTimeTaken } from "../features/PerformanceInfoSlice";
import { useNavigate } from "react-router-dom";

export const SubmitQuizModal = ({
  setSubmitOverlay,
  selectedIndex,
  correctIndices,
  localTotalTime,
}) => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const totalTime = useSelector((state) => state.userChoices.totalTime);
  const numberOfQuestions = useSelector(
    (state) => state.userChoices.numberOfQuestions
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      danger: "#ef4444",
    },
    dark: {
      bg: "rgba(15, 23, 42, 0.96)",
      text: "#f8fafc",
      border: "#334155",
      primary: "#10b981",
      secondary: "#1e293b",
      shadow: "0 20px 40px rgba(0,0,0,0.3)",
      accent: "#60a5fa",
      danger: "#dc2626",
    },
  };

  const colors = lightMode ? theme.light : theme.dark;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: lightMode ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        padding: "1rem",
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: colors.bg,
          borderRadius: "1.5rem",
          padding: "2rem",
          boxShadow: colors.shadow,
          border: `1px solid ${colors.border}`,
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
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
        {/* Warning Icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: lightMode ? "#fef2f2" : "#450a0a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto 1.5rem",
            border: `2px solid ${lightMode ? "#fecaca" : "#ef4444"}`,
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={lightMode ? "#ef4444" : "#fca5a5"}
            strokeWidth="2"
          >
            <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* Title */}
        <h2
          style={{
            color: colors.text,
            fontSize: "clamp(1.5rem, 5vw, 1.75rem)",
            fontWeight: "700",
            marginBottom: "1rem",
            lineHeight: "1.3",
          }}
        >
          Submit Your Quiz?
        </h2>

        {/* Message */}
        <p
          style={{
            color: lightMode ? "#4b5563" : "#9ca3af",
            fontSize: "clamp(1rem, 3vw, 1.125rem)",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          Are you sure you want to submit your answers? You won't be able to
          make changes after submission.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.secondary,
              color: colors.text,
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              minWidth: "120px",
              ":hover": {
                backgroundColor: lightMode ? "#f3f4f6" : "#374151",
                transform: "translateY(-2px)",
              },
            }}
            onClick={() => setSubmitOverlay(false)}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              border: "none",
              backgroundColor: colors.primary,
              color: "white",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.2s ease",
              minWidth: "120px",
              boxShadow: `0 4px 12px ${
                lightMode
                  ? "rgba(16, 185, 129, 0.3)"
                  : "rgba(16, 185, 129, 0.2)"
              }`,
              ":hover": {
                backgroundColor: colors.primaryDark,
                transform: "translateY(-2px)",
                boxShadow: `0 6px 16px ${
                  lightMode
                    ? "rgba(16, 185, 129, 0.4)"
                    : "rgba(16, 185, 129, 0.3)"
                }`,
              },
            }}
            onClick={() => {
              let localScore = 0;
              for (let i = 0; i < numberOfQuestions; i++) {
                if (selectedIndex[i] === correctIndices[i]) {
                  localScore++;
                }
              }
              dispatch(setScore(localScore));
              navigate("/score");
              dispatch(setTimeTaken(totalTime - localTotalTime));
            }}
          >
            Submit Quiz
          </button>
        </div>
      </div>
    </div>
  );
};
