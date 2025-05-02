import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumberOfQues, setTotalTime } from "./features/UserChoicesSlice";

function App() {
  const [reduxHydrated, setReduxHydrated] = useState(false);
  const totalTime = useSelector((state) => state.userChoices.totalTime);
  const numberOfQuestions = useSelector(
    (state) => state.userChoices.numberOfQuestions
  );
  const dispatch = useDispatch();

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

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ margin: "-8px" }}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
