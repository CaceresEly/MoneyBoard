import { formatCurrency } from '../utils/formatCurrency'

function SummaryCard({ title, amount }) {
  return (
    <div className="summary-card">
      <h3>{title}</h3>
      <p>{formatCurrency(amount)}</p>
    </div>
  )
}

export default SummaryCard