import SummaryCard from '../components/SummaryCard'
import { summaryData } from '../data/summaryData'

function Dashboard() {
  return (
    <section>
      <h2>Dashboard</h2>

      <div className="summary-grid">
        {summaryData.map((item) => (
          <SummaryCard key={item.id} title={item.title} amount={item.amount} />
        ))}
      </div>
    </section>
  )
}

export default Dashboard