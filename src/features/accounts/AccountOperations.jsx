import { useState } from "react";

const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");
  return (
    <div>
      <h2>You account operations</h2>
      <div className="inputs">
        <div>
          <label htmlFor="depositAmount">Deposit</label>
          <input
            type="number"
            id="depositAmount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            name="currency"
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button>Deposit {depositAmount}</button>
        </div>
        <div>
          <label htmlFor="withdrawalAmount">Withdraw</label>
          <input
            type="number"
            id="withdrawalAmount"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button>Withdraw {withdrawalAmount}</button>
        </div>
        <div>
          <label htmlFor="loanPurpose">Request Loan</label>
          <input
            type="number"
            id="loanAmount"
            placeholder="Loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
          <input
            type="text"
            id="loanPurpose"
            placeholder="Loan purpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <button>Request Loan</button>
        </div>
        <div>
          <span>Payback $X </span>
          <button> Pay loan</button>
        </div>
      </div>
    </div>
  );
};

export default AccountOperations;
