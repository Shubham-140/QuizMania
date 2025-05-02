import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RulesComponent = () => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const navigate = useNavigate();

  const theme = {
    light: {
      primary: "#10b981",
      cardBg: "#ffffff",
      text: "#333333",
      border: "#e5e7eb",
      shadow: "rgba(0, 0, 0, 0.1)",
      secondaryBg: "#f9f9f9",
    },
    dark: {
      primary: "#10b981",
      cardBg: "#2d2d2d",
      text: "#f5f5f5",
      border: "#4b5563",
      shadow: "rgba(0, 0, 0, 0.3)",
      secondaryBg: "#3a3a3a",
    },
  };

  const colors = lightMode ? theme.light : theme.dark;

  return (
    <div
      style={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: lightMode ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: 0,
        boxSizing: "border-box",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          backgroundColor: colors.cardBg,
          borderRadius: 0,
          boxShadow: `0 12px 40px ${colors.shadow}`,
          padding: "24px",
          width: "100%",
          height: "100%",
          overflowY: "auto",
          border: `1px solid ${colors.border}`,
          position: "relative",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        {/* Title */}
        <h2
          style={{
            color: colors.text,
            fontSize: "28px",
            fontWeight: "800",
            marginBottom: "24px",
            textAlign: "center",
            background: `linear-gradient(to right, ${colors.primary}, #059669)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingBottom: "12px",
            borderBottom: `2px solid ${colors.primary}`,
            marginTop: "16px",
          }}
        >
          Rules of the Quiz Game
        </h2>

        {/* Rules List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "0 16px",
          }}
        >
          {/* Rule 1 */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "16px",
              borderRadius: "12px",
              backgroundColor: colors.secondaryBg,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                minWidth: "32px",
                borderRadius: "50%",
                backgroundColor: colors.primary,
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              1
            </div>
            <div
              style={{
                flex: 1,
                color: colors.text,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Each quiz consists of{" "}
              <span style={{ fontWeight: "600" }}>10 questions</span> from your
              selected category.
            </div>
          </div>

          {/* Rule 2 */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "16px",
              borderRadius: "12px",
              backgroundColor: colors.secondaryBg,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                minWidth: "32px",
                borderRadius: "50%",
                backgroundColor: colors.primary,
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              2
            </div>
            <div
              style={{
                flex: 1,
                color: colors.text,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              You have <span style={{ fontWeight: "600" }}>15 seconds</span> to
              answer each question.
            </div>
          </div>

          {/* Rule 3 */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "16px",
              borderRadius: "12px",
              backgroundColor: colors.secondaryBg,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                minWidth: "32px",
                borderRadius: "50%",
                backgroundColor: colors.primary,
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              3
            </div>
            <div
              style={{
                flex: 1,
                color: colors.text,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Correct answers earn you{" "}
              <span style={{ fontWeight: "600" }}>10 points</span> each.
            </div>
          </div>

          {/* Rule 4 */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "16px",
              borderRadius: "12px",
              backgroundColor: colors.secondaryBg,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                minWidth: "32px",
                borderRadius: "50%",
                backgroundColor: colors.primary,
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              4
            </div>
            <div
              style={{
                flex: 1,
                color: colors.text,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              Points decrease by{" "}
              <span style={{ fontWeight: "600" }}>1 per second</span> after 5
              seconds.
            </div>
          </div>

          {/* Rule 5 */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "16px",
              borderRadius: "12px",
              backgroundColor: colors.secondaryBg,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                minWidth: "32px",
                borderRadius: "50%",
                backgroundColor: colors.primary,
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "700",
                fontSize: "16px",
              }}
            >
              5
            </div>
            <div
              style={{
                flex: 1,
                color: colors.text,
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              There's <span style={{ fontWeight: "600" }}>no penalty</span> for
              wrong answers.
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div
          style={{
            padding: "24px 16px 16px",
            position: "sticky",
            bottom: 0,
            backgroundColor: colors.cardBg,
            borderTop: `1px solid ${colors.border}`,
          }}
        >
          <button
            style={{
              padding: "16px 24px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: colors.primary,
              color: "white",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
              width: "100%",
              boxShadow: `0 4px 12px ${
                lightMode
                  ? "rgba(16, 185, 129, 0.3)"
                  : "rgba(16, 185, 129, 0.2)"
              }`,
            }}
            onClick={() => navigate("/")}
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesComponent;
