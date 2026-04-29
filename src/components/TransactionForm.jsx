import { useState } from 'react'

function TransactionForm() {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const newTransaction = {
      description,
      amount: Number(amount),
      type,
    }

    console.log(newTransaction)

    // limpar campos
    setDescription('')
    setAmount('')
    setType('')
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

      <button type="submit">Add transaction</button>
    </form>
  )
}

export default TransactionForm