function TransactionList({ transactions }) {
  return (
    <section className="transactions-section">
      <h3>Transactions</h3>

      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <li className="transaction-item" key={transaction.id}>
            <span>{transaction.description}</span>
            <strong>
              {transaction.amount.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </strong>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TransactionList