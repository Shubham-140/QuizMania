import { useDispatch, useSelector } from "react-redux";
import { setNumberOfQues, setTotalTime } from "../features/UserChoicesSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Settings = () => {
  const lightMode = useSelector((state) => state.color.lightMode);
  const totalTime = useSelector((state) => state.userChoices.totalTime);
  const numberOfQuestions = useSelector(
    (state) => state.userChoices.numberOfQuestions
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reduxHydrated, setReduxHydrated] = useState(false);

  useEffect(() => {
    if (!reduxHydrated) {
      return;
    }

    localStorage.setItem("totalTime", JSON.stringify(totalTime));
    localStorage.setItem(
      "numberOfQuestions",
      JSON.stringify(numberOfQuestions)
    );
    setReduxHydrated(true);
  }, [numberOfQuestions, totalTime, reduxHydrated]);

  useEffect(() => {
    const time = localStorage.getItem("totalTime");
    const questions = localStorage.getItem("numberOfQuestions");

    if (time && questions) {
      dispatch(setTotalTime(JSON.parse(time)));
      dispatch(setNumberOfQues(JSON.parse(questions)));
    }

    setReduxHydrated(true);
  }, [dispatch]);

  const theme = {
    light: {
      bg: "rgba(255, 255, 255, 0.96)",
      text: "#1a1a1a",
      border: "#e2e8f0",
      primary: "#10b981",
      secondary: "#f8fafc",
      shadow: "0 20px 40px rgba(0,0,0,0.08)",
      accent: "#3b82f6",
    },
    dark: {
      bg: "rgba(15, 23, 42, 0.96)",
      text: "#f8fafc",
      border: "#334155",
      primary: "#10b981",
      secondary: "#1e293b",
      shadow: "0 20px 40px rgba(0,0,0,0.3)",
      accent: "#60a5fa",
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
      <div
        style={{
          backgroundColor: colors.bg,
          borderRadius: "1.5rem",
          padding: "2rem",
          boxShadow: colors.shadow,
          border: `1px solid ${colors.border}`,
          width: "100%",
          maxWidth: "600px",
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
        <h2
          style={{
            color: colors.text,
            fontSize: "1.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={colors.primary}
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          Quiz Settings
        </h2>

        {/* Number of Questions */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              color: colors.text,
              fontWeight: "600",
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            Number of Questions
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <select
              style={{
                flex: 1,
                backgroundColor: colors.secondary,
                border: `1px solid ${colors.border}`,
                borderRadius: "0.75rem",
                padding: "0.75rem",
                color: colors.text,
                fontSize: "1rem",
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none",
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${colors.text.replace(
                  "#",
                  "%23"
                )}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem",
                paddingRight: "2.5rem",
                transition: "all 0.2s ease",
                ":hover": {
                  borderColor: colors.primary,
                },
              }}
              onChange={(e) => dispatch(setNumberOfQues(e.target.value))}
              value={numberOfQuestions}
            >
              <option value="5">5 Questions</option>
              <option value="10">10 Questions</option>
              <option value="15">15 Questions</option>
              <option value="20">20 Questions</option>
            </select>
          </div>
        </div>

        {/* Time Limit */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              color: colors.text,
              fontWeight: "600",
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            Time Limit (For whole Quiz)
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <select
              style={{
                flex: 1,
                backgroundColor: colors.secondary,
                border: `1px solid ${colors.border}`,
                borderRadius: "0.75rem",
                padding: "0.75rem",
                color: colors.text,
                fontSize: "1rem",
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none",
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='${colors.text.replace(
                  "#",
                  "%23"
                )}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem",
                paddingRight: "2.5rem",
                transition: "all 0.2s ease",
                ":hover": {
                  borderColor: colors.primary,
                  boxShadow: `0 0 0 1px ${colors.primary}`,
                },
                ":focus": {
                  outline: "none",
                  borderColor: colors.primary,
                  boxShadow: `0 0 0 2px ${
                    lightMode
                      ? "rgba(16, 185, 129, 0.3)"
                      : "rgba(16, 185, 129, 0.2)"
                  }`,
                },
              }}
              onChange={(e) => dispatch(setTotalTime(e.target.value))}
              value={totalTime}
            >
              <option value="60">1 minute</option>
              <option value="120">2 minutes</option>
              <option value="180">3 minutes</option>
              <option value="300">5 minutes</option>
              <option value="999999">No limit</option>
            </select>
          </div>
        </div>

        {/* Save Button */}
        <button
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "0.75rem",
            border: "none",
            backgroundColor: colors.primary,
            color: "white",
            fontWeight: "600",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "all 0.2s ease",
            boxShadow: `0 4px 12px ${
              lightMode ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.2)"
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
          Go to HomePage
        </button>
      </div>
    </div>
  );
};
