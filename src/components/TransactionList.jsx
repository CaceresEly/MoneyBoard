function TransactionList({ transactions, onDeleteTransaction }) {
  const sortedTransactions = [...transactions].reverse()

  return (
    <section className="transactions-section">
      <h3>Transactions</h3>

      {sortedTransactions.length === 0 && (
        <p className="empty-state">No transactions registered yet.</p>
      )}

      {sortedTransactions.length > 0 && (
        <ul className="transaction-list">
          {sortedTransactions.map((transaction) => {
            const isExpense = transaction.type === 'expense'

            return (
              <li className="transaction-item" key={transaction.id}>
                <span>{transaction.description}</span>

                <div className="transaction-actions">
                  <strong className={isExpense ? 'expense' : 'income'}>
                    {isExpense ? '-' : '+'}
                    {transaction.amount.toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </strong>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => onDeleteTransaction(transaction.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default TransactionList