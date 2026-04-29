import { useState } from 'react'
import SummaryCard from '../components/SummaryCard'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'
import { summaryData } from '../data/summaryData'
import { transactionsData } from '../data/transactionsData'

function Dashboard() {
  const [transactions, setTransactions] = useState(transactionsData)

  function handleAddTransaction(newTransaction) {
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      {
        id: crypto.randomUUID(),
        ...newTransaction,
      },
    ])
  }

  return (
    <section>
      <h2>Dashboard</h2>

      <div className="summary-grid">
        {summaryData.map((item) => (
          <SummaryCard key={item.id} title={item.title} amount={item.amount} />
        ))}
      </div>

      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </section>
  )
}

export default Dashboard