import { useState } from 'react'
import { categories } from '../data/categories'

function TransactionForm({ onAddTransaction }) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!description || !amount || !type || !category) {
      alert('Please fill in all fields')
      return
    }

    if (Number(amount) <= 0) {
      alert('Amount must be greater than 0')
      return
    }

    const newTransaction = {
      description,
      amount: Number(amount),
      type,
      category,
    }

    onAddTransaction(newTransaction)

    setDescription('')
    setAmount('')
    setType('')
    setCategory('')
  }

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h3>Add transaction</h3>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="" disabled>
          Select type
        </option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>
          Select category
        </option>

        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      <button type="submit">Add transaction</button>
    </form>
  )
}

export default TransactionForm