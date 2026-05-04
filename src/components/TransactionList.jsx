import { getCategoryLabel } from '../utils/getCategoryLabel'
import { formatCurrency } from '../utils/formatCurrency'

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <section className="transactions-section">
      <h3>Transactions</h3>

      {transactions.length === 0 && (
        <p className="empty-state">No transactions registered yet.</p>
      )}

      {transactions.length > 0 && (
        <ul className="transaction-list">
          {transactions.map((transaction) => {
            const isExpense = transaction.type === 'expense'

            return (
              <li className="transaction-item" key={transaction.id}>
                <div>
                  <span>{transaction.description}</span>
                  <small className="transaction-type">
                    {transaction.type} • {getCategoryLabel(transaction.category)}
                  </small>
                </div>

                <div className="transaction-actions">
                  <strong className={isExpense ? 'expense' : 'income'}>
                    {isExpense ? '-' : '+'}
                    {formatCurrency(transaction.amount)}
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