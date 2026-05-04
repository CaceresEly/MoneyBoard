import { categories } from '../data/categories'

export function getCategoryLabel(categoryValue) {
  const category = categories.find((item) => item.value === categoryValue)

  return category ? category.label : 'Other'
}