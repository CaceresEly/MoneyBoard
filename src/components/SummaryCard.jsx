function SummaryCard({ title, amount }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p>
        {amount.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        })}
      </p>
    </div>
  )
}

export default SummaryCard