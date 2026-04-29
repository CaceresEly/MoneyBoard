function TransactionForm() {
  return (
    <form className="transaction-form">
      <h3>Add transaction</h3>

      <input type="text" placeholder="Description" />

      <input type="number" placeholder="Amount" />

      <select defaultValue="">
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