import SummaryCard from '../components/SummaryCard'

function Dashboard() {
  return (
    <section>
      <h2>Dashboard</h2>

      <div className="summary-grid">
        <SummaryCard title="Income" amount="5000" />
        <SummaryCard title="Expenses" amount="2000" />
        <SummaryCard title="Balance" amount="3000" />
      </div>
    </section>
  )
}

export default Dashboard