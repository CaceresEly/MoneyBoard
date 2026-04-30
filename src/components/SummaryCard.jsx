function SummaryCard({ title, amount }) {
  const formattedAmount = amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p>{formattedAmount}</p>
    </div>
  )
}

export default SummaryCard