import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

function ExpenseChart({ data }) {
  return (
    <section className="chart-section">
      <h3>Expenses by category</h3>

      {data.length === 0 ? (
        <p className="empty-state">No expense data available yet.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#111827" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </section>
  )
}

export default ExpenseChart