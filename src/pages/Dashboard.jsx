import { useState } from 'react'
import SummaryCard from '../components/SummaryCard'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'
import { transactionsData } from '../data/transactionsData'

function Dashboard() {
    const [transactions, setTransactions] = useState(transactionsData)
    
    const income = transactions
    .filter((transaction) => transaction.type === 'income')
    .reduce((total, transaction) => total + transaction.amount, 0)

    const expenses = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((total, transaction) => total + transaction.amount, 0)

    const balance = income - expenses

    const summary = [
        { id: 1, title: 'Income', amount: income },
        { id: 2, title: 'Expenses', amount: expenses },
        { id: 3, title: 'Balance', amount: balance },
    ]

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
        {summary.map((item) => (
          <SummaryCard key={item.id} title={item.title} amount={item.amount} />
        ))}
      </div>

      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </section>
  )
}

export default Dashboard