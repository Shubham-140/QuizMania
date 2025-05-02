import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ExitConfirmationOverlay = ({ setShowExitOverlay }) => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const navigate = useNavigate();

  // Theme colors matching exactly from HomePage component
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
      warning: "#ef4444",
      warningLight: "#fef2f2",
      overlayBg: "rgba(255, 255, 255, 0.96)",
      overlayBackdrop: "rgba(255,255,255,0.9)",
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
      warning: "#dc2626",
      warningLight: "#450a0a",
      overlayBg: "rgba(15, 23, 42, 0.96)",
      overlayBackdrop: "rgba(0,0,0,0.9)",
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
        backgroundColor: colors.overlayBackdrop,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        padding: "clamp(16px, 5vw, 32px)",
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: colors.cardBg,
          borderRadius: "clamp(16px, 3vw, 24px)",
          padding: "clamp(20px, 5vw, 32px)",
          boxShadow: `0 20px 40px ${colors.shadow}`,
          border: `1px solid ${colors.border}`,
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          transform: "translateY(0)",
          animation: "fadeInUp 0.4s ease-out",
        }}
      >
        {/* Warning icon with animated pulse effect */}
        <div
          style={{
            width: "clamp(60px, 15vw, 80px)",
            height: "clamp(60px, 15vw, 80px)",
            margin: "0 auto clamp(16px, 4vw, 24px)",
            backgroundColor: colors.warningLight,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: `2px solid ${colors.warning}`,
            animation: "pulse 2s infinite",
          }}
        >
          <svg
            width="clamp(32px, 8vw, 40px)"
            height="clamp(32px, 8vw, 40px)"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.warning}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>

        {/* Title with gradient text matching HomePage */}
        <h2
          style={{
            fontSize: "clamp(1.25rem, 5vw, 1.75rem)",
            fontWeight: "800",
            marginBottom: "clamp(8px, 2vw, 12px)",
            lineHeight: "1.3",
            background: `linear-gradient(to right, ${colors.primary}, ${colors.primaryDark})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Are you sure you want to leave?
        </h2>

        {/* Description with secondary text color */}
        <p
          style={{
            color: colors.textSecondary,
            fontSize: "clamp(0.875rem, 3vw, 1rem)",
            marginBottom: "clamp(20px, 5vw, 28px)",
            lineHeight: "1.5",
          }}
        >
          Your current quiz progress will be lost if you exit now.
        </p>

        {/* Buttons container */}
        <div
          style={{
            display: "flex",
            gap: "clamp(12px, 3vw, 16px)",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Cancel button - matches secondary button style from HomePage */}
          <button
            style={{
              padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 24px)",
              borderRadius: "clamp(8px, 2vw, 12px)",
              border: `2px solid ${colors.primary}`,
              backgroundColor: "transparent",
              color: colors.primary,
              fontWeight: "600",
              fontSize: "clamp(0.875rem, 3vw, 1rem)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              flex: "1 1 40%",
              minWidth: "120px",
              ":hover": {
                backgroundColor: lightMode ? "#ecfdf5" : "#064e3b",
                transform: "translateY(-2px)",
              },
            }}
            onClick={() => setShowExitOverlay(false)}
          >
            Cancel
          </button>

          {/* Exit button - matches warning style from HomePage */}
          <button
            style={{
              padding: "clamp(12px, 3vw, 16px) clamp(20px, 5vw, 24px)",
              borderRadius: "clamp(8px, 2vw, 12px)",
              border: "none",
              backgroundColor: colors.warning,
              color: "white",
              fontWeight: "600",
              fontSize: "clamp(0.875rem, 3vw, 1rem)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              flex: "1 1 40%",
              minWidth: "120px",
              boxShadow: `0 4px 12px ${
                lightMode ? "rgba(239, 68, 68, 0.3)" : "rgba(220, 38, 38, 0.2)"
              }`,
              ":hover": {
                backgroundColor: lightMode ? "#dc2626" : "#b91c1c",
                transform: "translateY(-2px)",
                boxShadow: `0 6px 16px ${
                  lightMode
                    ? "rgba(220, 38, 38, 0.4)"
                    : "rgba(185, 28, 28, 0.3)"
                }`,
              },
            }}
            onClick={() => {
              navigate("/");
              setShowExitOverlay(false);
            }}
          >
            Exit Quiz
          </button>
        </div>

        {/* Animations */}
        <style>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes pulse {
              0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
              }
              70% {
                transform: scale(1.05);
                box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
              }
              100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
              }
            }
          `}</style>
      </div>
    </div>
  );
};
