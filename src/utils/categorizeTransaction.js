export function categorizeTransaction(description) {
  const text = description.toLowerCase()

  if (text.includes('salary') || text.includes('payroll')) {
    return 'salary'
  }

  if (
    text.includes('ifood') ||
    text.includes('restaurant') ||
    text.includes('food')
  ) {
    return 'food'
  }

  if (
    text.includes('uber') ||
    text.includes('bus') ||
    text.includes('transport')
  ) {
    return 'transport'
  }

  if (
    text.includes('netflix') ||
    text.includes('spotify') ||
    text.includes('entertainment')
  ) {
    return 'entertainment'
  }

  if (
    text.includes('internet') ||
    text.includes('energy') ||
    text.includes('bill')
  ) {
    return 'bills'
  }

  return 'other'
}