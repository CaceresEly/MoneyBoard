import { useEffect, useState } from 'react'
import CsvImporter from '../components/CsvImporter'
import ExpenseChart from '../components/ExpenseChart'
import Filters from '../components/Filters'
import SummaryCard from '../components/SummaryCard'
import TransactionForm from '../components/TransactionForm'
import TransactionList from '../components/TransactionList'
import { transactionsData } from '../data/transactionsData'
import { getCategoryLabel } from '../utils/getCategoryLabel'

function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const storedTransactions = localStorage.getItem('transactions')

    if (storedTransactions) {
      return JSON.parse(storedTransactions)
    }

    return transactionsData
  })

  const [selectedType, setSelectedType] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  // 🔎 filtros
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesType =
      selectedType === 'all' || transaction.type === selectedType

    const matchesCategory =
      selectedCategory === 'all' || transaction.category === selectedCategory

    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(search.toLowerCase())

    return matchesType && matchesCategory && matchesSearch
  })

  // 💰 resumo
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

  // 📊 gráfico
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
      category: getCategoryLabel(category),
      amount,
    })
  )

  // ➕ adicionar
  function handleAddTransaction(newTransaction) {
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      {
        id: crypto.randomUUID(),
        ...newTransaction,
      },
    ])
  }

  // 📥 importar CSV
  function handleImportTransactions(importedTransactions) {
    setTransactions((currentTransactions) => [
      ...currentTransactions,
      ...importedTransactions,
    ])
  }

  // ❌ deletar
  function handleDeleteTransaction(transactionId) {
    setTransactions((currentTransactions) =>
      currentTransactions.filter((transaction) => transaction.id !== transactionId)
    )
  }

  // 🧹 limpar tudo
  function handleClearTransactions() {
    const confirmClear = window.confirm(
      'Are you sure you want to delete all transactions?'
    )

    if (confirmClear) {
      setTransactions([])
    }
  }

  // 🔄 limpar filtros
  function handleClearFilters() {
    setSelectedType('all')
    setSelectedCategory('all')
    setSearch('')
  }

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <div>
          <h2>Dashboard</h2>
          <p>Track your income, expenses, and financial balance.</p>
        </div>
      </div>

      <div className="summary-grid">
        {summary.map((item) => (
          <SummaryCard key={item.id} title={item.title} amount={item.amount} />
        ))}
      </div>

      <div className="dashboard-grid">
        <ExpenseChart data={chartData} />
        <TransactionForm onAddTransaction={handleAddTransaction} />
      </div>

      {/* 👇 IMPORTADOR CSV */}
      <CsvImporter onImportTransactions={handleImportTransactions} />

      <Filters
        selectedType={selectedType}
        selectedCategory={selectedCategory}
        search={search}
        onTypeChange={setSelectedType}
        onCategoryChange={setSelectedCategory}
        onSearchChange={setSearch}
        onClearFilters={handleClearFilters}
      />

      <button className="clear-button" onClick={handleClearTransactions}>
        Clear all transactions
      </button>

      <TransactionList
        transactions={filteredTransactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
    </section>
  )
}

export default Dashboard