import { useState } from "react";
const EmiCalculator = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [processingFee, serProcessingFee] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [loanPayment, setLoanPayment] = useState(0);
  const [tenure, setTenure] = useState(12);

  const [emi, setEmi] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "totalCost") {
      setTotalCost(+e.target.value);
    }
    if (e.target.name === "interestRate") {
      setInterestRate(+e.target.value);
    }
    if (e.target.name === "processingFee") {
      serProcessingFee(+e.target.value);
    }
    if (e.target.name === "downPayment") {
      setDownPayment(+e.target.value);
    }
    if (e.target.name === "downPayment") {
      setDownPayment(+e.target.value);
    }
    if (e.target.name === "loanPayment") {
      setLoanPayment(+e.target.value);
    }
    if (e.target.name === "tenure") {
      setTenure(+e.target.value);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-8">
      <h2 className="title">Emi Calculator</h2>
      <div className="flex flex-col">
        <label htmlFor="cost">Total cost of Assets</label>
        <input
          type="number"
          value={totalCost}
          onChange={handleChange}
          name="totalCost"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="interestRate">Interest Rate (in %)</label>
        <input
          type="number"
          value={interestRate}
          onChange={handleChange}
          name="interestRate"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="processingFee">Processing Fee (in %)</label>
        <input
          type="number"
          value={processingFee}
          onChange={handleChange}
          name="processingFee"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="downPayment">Down Payment</label>
        {/* <div>Town Down Payment ${totalDownPayment}</div> */}
        <input
          type="range"
          value={downPayment}
          onChange={handleChange}
          name="downPayment"
          min={0}
          max={totalCost}
          className="slider"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="cost">Loan Per month</label>
        {/* <div>Town Loan Amount ${totalDownPayment}</div> */}

        <input
          type="range"
          value={loanPayment}
          onChange={handleChange}
          name="loanPayment"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="tenure">Tenure</label>
        {/* <div>Town Loan Amount ${totalDownPayment}</div> */}

        <input
          type="number"
          value={tenure}
          onChange={handleChange}
          name="tenure"
        />
      </div>
    </div>
  );
};

export default EmiCalculator;
