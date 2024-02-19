function formatCurrency(value) {
  return Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
const BalanceDisplay = () => {
  return <div className="balance">{formatCurrency(123456)}</div>;
};

export default BalanceDisplay;
