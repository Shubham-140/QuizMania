import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitQuizModal } from "./SubmitQuizModal";
import { setScore, setTimeTaken } from "../features/PerformanceInfoSlice";

const QuestionDisplay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lightMode = useSelector((state) => state.color.lightMode);
  const { category, difficulty } = useParams();
  const [index, setIndex] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  const [options, setOptions] = useState([]);
  const numberOfQuestions = useSelector(
    (state) => state.userChoices.numberOfQuestions
  );
  const [correctIndices, setCorrectedIndices] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [submitOverlay, setSubmitOverlay] = useState(false);
  const totalTime = useSelector((state) => state.userChoices.totalTime);
  const [localTotalTime, setLocalTotalTime] = useState(null);

  useEffect(() => {
    if (totalTime !== null) {
      setLocalTotalTime(totalTime);
    }
  }, [totalTime]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Triggers the "Reload site?" dialog
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    function handleCalculateScore() {
      let localScore = 0;
      for (let i = 0; i < numberOfQuestions; i++) {
        if (selectedIndex[i] === correctIndices[i]) {
          localScore++;
        }
      }
      dispatch(setTimeTaken(totalTime));
      dispatch(setScore(localScore));
      navigate("/score");
    }

    if (localTotalTime === 0) {
      handleCalculateScore();
    }
  }, [
    totalTime,
    dispatch,
    selectedIndex,
    correctIndices,
    navigate,
    numberOfQuestions,
    localTotalTime,
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (localTotalTime > 0) {
        setLocalTotalTime(localTotalTime - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [localTotalTime, dispatch]);

  useEffect(() => {
    fetch(
      `https://the-trivia-api.com/api/questions?categories=${category}&limit=${numberOfQuestions}&difficulty=${difficulty}`
    )
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setQuizData(data);
      })
      .finally(() => {
        setHydrated(true);
      });
  }, [category, difficulty, numberOfQuestions]);

  useEffect(() => {
    if (!hydrated || quizData.length === 0) {
      return;
    }

    const allCorrectOptions = [];

    const allOptions = quizData.map((elem) => {
      const opts = [elem.correctAnswer, ...elem.incorrectAnswers];
      const shuffled = opts.sort(() => {
        return Math.random() - 0.5;
      });
      const correctIndex = shuffled.indexOf(elem.correctAnswer);
      allCorrectOptions.push(correctIndex);
      return shuffled;
    });

    setCorrectedIndices(allCorrectOptions);
    setOptions(allOptions);
  }, [numberOfQuestions, quizData, hydrated]);

  useEffect(() => {
    if (hydrated) {
      console.log("The quiz data is here: ", quizData);
    }
  }, [hydrated, quizData]);

  function handleSelect(questionIndex, optionIndex) {
    setSelectedIndex((prev) => {
      const updated = [...prev];
      updated[questionIndex] = optionIndex;
      return updated;
    });
  }

  // Premium gradient background
  const backgroundStyle = lightMode
    ? {
        background:
          "radial-gradient(circle at 10% 20%, #f0fdf4 0%, #dcfce7 90%)",
      }
    : {
        background:
          "radial-gradient(circle at 10% 20%, #022c22 0%, #064e3b 90%)",
      };

  const theme = {
    light: {
      text: "#1a1a1a",
      border: "#e2e8f0",
      primary: "#10b981",
      secondary: "#f8fafc",
      cardBg: "rgba(255, 255, 255, 0.96)",
      shadow: "0 20px 40px rgba(0,0,0,0.08)",
      optionHover: "#f0fdf4",
    },
    dark: {
      text: "#f8fafc",
      border: "#334155",
      primary: "#10b981",
      secondary: "#1e293b",
      cardBg: "rgba(15, 23, 42, 0.96)",
      shadow: "0 20px 40px rgba(0,0,0,0.3)",
      optionHover: "#064e3b",
    },
  };

  const colors = lightMode ? theme.light : theme.dark;

  return (
    <div
      style={{
        ...backgroundStyle,
        minHeight: "calc(100vh - clamp(48px, 5.2vw, 56px))",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          height: "calc(100vh - clamp(48px, 5.2vw, 56px))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Optimized Question Card */}
        <div
          style={{
            backgroundColor: colors.cardBg,
            borderRadius: "1.5rem",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            boxShadow: colors.shadow,
            border: `1px solid ${colors.border}`,
            height: "calc(100% - 28px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
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
              background: `linear-gradient(90deg, ${colors.primary}, #3b82f6)`,
              zIndex: 10,
            },
          }}
        >
          {/* Dynamic Content Area */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            {/* Header & Question */}
            <div
              style={{
                overflow: "auto",
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none", // For IE/Edge
                "&::WebkitScrollbar": {
                  // For Chrome/Safari
                  display: "none",
                },
                flex: "1 1 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                }}
              >
                <div
                  style={{
                    color: colors.primary,
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  QUESTION {index + 1} OF {numberOfQuestions}
                </div>
                {totalTime !== "999999" && (
                  <div
                    style={{
                      backgroundColor:
                        localTotalTime <= 20 ? "#ef4444" : colors.primary,
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "2rem",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                      boxShadow: `0 4px 12px ${
                        lightMode
                          ? localTotalTime <= 20
                            ? "rgba(239, 68, 68, 0.4)"
                            : "rgba(16, 185, 129, 0.3)"
                          : localTotalTime <= 20
                          ? "rgba(220, 38, 38, 0.5)"
                          : "rgba(16, 185, 129, 0.2)"
                      }`,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      animation:
                        localTotalTime <= 20
                          ? "premiumPulse 0.8s infinite alternate"
                          : "none",
                      border:
                        localTotalTime <= 20
                          ? "2px solid rgba(255,255,255,0.3)"
                          : "none",
                      position: "relative",
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      style={{
                        color: "white",
                        transform:
                          localTotalTime <= 20 ? "scale(1.1)" : "scale(1)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span
                      style={{
                        fontWeight: localTotalTime <= 20 ? 700 : 600,
                        transform:
                          localTotalTime <= 20 ? "scale(1.05)" : "scale(1)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {`${
                        Math.floor(localTotalTime / 60) < 10 ? "0" : ""
                      }${Math.floor(localTotalTime / 60)}:${
                        localTotalTime % 60 < 10 ? "0" : ""
                      }${localTotalTime % 60}`}
                    </span>
                  </div>
                )}

                <style>{`
  @keyframes premiumPulse {
    0% { 
      transform: scale(1);
      box-shadow: 0 4px 12px ${
        lightMode ? "rgba(239, 68, 68, 0.4)" : "rgba(220, 38, 38, 0.5)"
      };
    }
    100% { 
      transform: scale(1.03);
      box-shadow: 0 6px 16px ${
        lightMode ? "rgba(239, 68, 68, 0.5)" : "rgba(220, 38, 38, 0.6)"
      };
    }
  }
`}</style>
              </div>

              <h2
                style={{
                  color: colors.text,
                  fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                  fontWeight: "700",
                  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                  lineHeight: "1.5",
                }}
              >
                {hydrated && quizData[index].question}
              </h2>

              {/* Optimized Options Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "0.75rem",
                  marginBottom: "clamp(1rem, 2vw, 1.5rem)",
                }}
              >
                {hydrated &&
                  options[index]?.map((option, ind) => {
                    const isSelected = selectedIndex[index] === ind;
                    const optionLetter = String.fromCharCode(65 + ind); // A, B, C, etc.

                    return (
                      <div
                        key={option}
                        style={{
                          backgroundColor: isSelected
                            ? lightMode
                              ? "#ecfdf5" // Light green background for light mode
                              : "#064e3b" // Dark green background for dark mode
                            : colors.secondary,
                          borderRadius: "0.75rem",
                          padding: "1rem",
                          border: `2px solid ${
                            isSelected ? colors.primary : colors.border
                          }`,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          position: "relative",
                          overflow: "hidden",
                          boxShadow: isSelected
                            ? `0 4px 12px ${
                                lightMode
                                  ? "rgba(16, 185, 129, 0.3)"
                                  : "rgba(16, 185, 129, 0.2)"
                              }`
                            : "none",
                          ":hover": {
                            transform: "translateY(-2px)",
                            boxShadow: `0 4px 12px ${
                              lightMode ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.3)"
                            }`,
                            borderColor: colors.primary,
                            backgroundColor: isSelected
                              ? lightMode
                                ? "#d1fae5" // Slightly darker green when selected+hover (light)
                                : "#022c22" // Slightly darker green when selected+hover (dark)
                              : colors.optionHover,
                          },
                          "::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "4px",
                            backgroundColor: colors.primary,
                            opacity: isSelected ? 1 : 0,
                            transition: "opacity 0.2s ease",
                          },
                        }}
                        onClick={() => handleSelect(index, ind)}
                      >
                        <span
                          style={{
                            color: isSelected ? colors.primary : colors.text,
                            fontWeight: isSelected ? "700" : "600",
                            fontSize: "1rem",
                            position: "relative",
                            zIndex: 2,
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                          }}
                        >
                          {isSelected ? (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                backgroundColor: colors.primary,
                                color: "white",
                                flexShrink: 0,
                              }}
                            >
                              {optionLetter}
                            </div>
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                border: `2px solid ${colors.text}`,
                                color: colors.text,
                                flexShrink: 0,
                              }}
                            >
                              {optionLetter}
                            </div>
                          )}
                          {option}
                          {isSelected && (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke={colors.primary}
                              strokeWidth="2.5"
                              style={{ marginLeft: "auto" }}
                            >
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          )}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Navigation Buttons - Tightly coupled */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                marginTop: "0.5rem", // Reduced gap
                paddingTop: "0.5rem", // Reduced padding
              }}
            >
              <button
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.75rem",
                  border: `1px solid ${colors.primary}`,
                  backgroundColor: "transparent",
                  color: colors.primary,
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  ":hover": {
                    backgroundColor: lightMode ? "#ecfdf5" : "#064e3b",
                  },
                }}
                onClick={() => {
                  if (index < 1) {
                    return;
                  }
                  setIndex((prev) => {
                    return prev - 1;
                  });
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Previous
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
                  boxShadow: `0 4px 12px ${
                    lightMode
                      ? "rgba(16, 185, 129, 0.3)"
                      : "rgba(16, 185, 129, 0.2)"
                  }`,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  ":hover": {
                    transform: "translateY(-2px)",
                    boxShadow: `0 6px 16px ${
                      lightMode
                        ? "rgba(16, 185, 129, 0.4)"
                        : "rgba(16, 185, 129, 0.3)"
                    }`,
                  },
                }}
                onClick={() => {
                  if (index === numberOfQuestions - 1) {
                    setSubmitOverlay(true);
                    return;
                  }
                  setIndex(index + 1);
                }}
              >
                {index === numberOfQuestions - 1 ? "Submit" : "Next"}
                {index !== numberOfQuestions - 1 && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {submitOverlay && (
        <SubmitQuizModal
          setSubmitOverlay={setSubmitOverlay}
          correctIndices={correctIndices}
          selectedIndex={selectedIndex}
          localTotalTime={localTotalTime}
        />
      )}
    </div>
  );
};

export default QuestionDisplay;
