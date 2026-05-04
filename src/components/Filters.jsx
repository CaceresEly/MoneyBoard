import { categories } from '../data/categories'

function Filters({
  selectedType,
  selectedCategory,
  search,
  onTypeChange,
  onCategoryChange,
  onSearchChange,
}) {
  return (
    <section className="filters">
      <input
        type="text"
        placeholder="Search description..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={selectedType} onChange={(e) => onTypeChange(e.target.value)}>
        <option value="all">All types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="all">All categories</option>

        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
    </section>
  )
}

export default Filters