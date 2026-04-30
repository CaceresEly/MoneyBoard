import { useEffect, useState } from 'react'
import ExpenseChart from '../components/ExpenseChart'
import SummaryCard from '../components/SummaryCard'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'
import { transactionsData } from '../data/transactionsData'

function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem('transactions')

    if (storedTransactions) {
      return JSON.parse(storedTransactions)
    }

    return transactionsData
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

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

  const expensesByCategory = transactions
    .filter((transaction) => transaction.type === 'expense')
    .reduce((acc, transaction) => {
      const category = transaction.category || 'other'

      if (!acc[category]) {
        acc[category] = 0
      }

      acc[category] += transaction.amount

      return acc
    }, {})

  const chartData = Object.entries(expensesByCategory).map(
    ([category, amount]) => ({
      category,
      amount,
    })
  )

  function handleAddTransaction(newTransaction) {
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      {
        id: crypto.randomUUID(),
        ...newTransaction,
      },
    ])
  }

  function handleDeleteTransaction(transactionId) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter((transaction) => transaction.id !== transactionId)
    )
  }

  function handleClearTransactions() {
    const confirmClear = window.confirm('Are you sure you want to delete all transactions?')

    if (confirmClear) {
      setTransactions([])
    }
  }

  return (
    <section>
      <h2>Dashboard</h2>

      <div className="summary-grid">
        {summary.map((item) => (
          <SummaryCard key={item.id} title={item.title} amount={item.amount} />
        ))}
      </div>

      <ExpenseChart data={chartData} />

      <TransactionForm onAddTransaction={handleAddTransaction} />

      <button className="clear-button" onClick={handleClearTransactions}>
        Clear all transactions
      </button>

      <TransactionList
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </section>
  )
}

export default Dashboard