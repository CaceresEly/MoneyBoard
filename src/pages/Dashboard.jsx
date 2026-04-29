import SummaryCard from '../components/SummaryCard'
import TransactionList from '../components/TransactionList'
import { summaryData } from '../data/summaryData'
import { transactionsData } from '../data/transactionsData'

function Dashboard() {
  return (
    <section>
      <h2>Dashboard</h2>

      <div className="summary-grid">
        {summaryData.map((item) => (
          <SummaryCard key={item.id} title={item.title} amount={item.amount} />
        ))}
      </div>

      <TransactionList transactions={transactionsData} />
    </section>
  )
}

export default Dashboard