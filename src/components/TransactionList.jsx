function TransactionList({ transactions }) {
  return (
    <div>
      <h3>Transactions</h3>

      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} — ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList