import { useState } from "react";
import styles from "./CalculateForm.module.css";

const CalculateForm = (props) => {
  // const [isCalculated, setIsCalculated] = useState(false);
  // const isCalculatedHandler = () => {
  //   setIsCalculated(true);
  // };
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  const [enteredYearlySavings, setEnteredYearlySavings] = useState("");
  const [enteredExpectedInt, setEnteredExpectedInt] = useState("");
  const [enteredInvestmentDur, setEnteredInvestmentDur] = useState("");

  const currentSavingsChangeHandler = (event) => {
    setEnteredCurrentSavings(event.target.value);
  };
  const yearlySavingsChangeHandler = (event) => {
    setEnteredYearlySavings(event.target.value);
  };
  const expectedIntChangeHandler = (event) => {
    setEnteredExpectedInt(event.target.value);
  };
  const investmentDurChangeHandler = (event) => {
    setEnteredInvestmentDur(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = {
      "current-savings": enteredCurrentSavings,
      "yearly-contribution": enteredYearlySavings,
      "expected-return": enteredExpectedInt,
      duration: enteredInvestmentDur
    };
    props.onCalculate(userInput);
  };
  const resetHandler = () => {
    setEnteredCurrentSavings("");
    setEnteredYearlySavings("");
    setEnteredExpectedInt("");
    setEnteredInvestmentDur("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              value={enteredCurrentSavings}
              onChange={currentSavingsChangeHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              value={enteredYearlySavings}
              onChange={yearlySavingsChangeHandler}
            />
          </p>
        </div>
        <div className={styles["input-group"]}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              value={enteredExpectedInt}
              onChange={expectedIntChangeHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              value={enteredInvestmentDur}
              onChange={investmentDurChangeHandler}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={resetHandler}
          >
            Reset
          </button>
          <button
            type="submit"
            className={styles.button}
            // onClick={isCalculatedHandler}
          >
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};
export default CalculateForm;
