import { categorizeTransaction } from '../utils/categorizeTransaction'

function CsvImporter({ onImportTransactions }) {
  function handleFileChange(e) {
    const file = e.target.files[0]

    if (!file) {
      return
    }

    const reader = new FileReader()

    reader.onload = (event) => {
      const text = event.target.result
      const rows = text
        .split('\n')
        .map((row) => row.trim())
        .filter(Boolean)

      const headers = rows[0].split(',').map((header) => header.trim().toLowerCase())

      const descriptionIndex = headers.indexOf('description')
      const amountIndex = headers.indexOf('amount')
      const typeIndex = headers.indexOf('type')
      const dateIndex = headers.indexOf('date')

      if (descriptionIndex === -1 || amountIndex === -1) {
        alert('Invalid CSV format. Required columns: description and amount.')
        e.target.value = ''
        return
      }

      const importedTransactions = rows.slice(1).map((row) => {
        const columns = row.split(',').map((column) => column.trim())

        const description = columns[descriptionIndex]
        const rawAmount = Number(columns[amountIndex])
        const typeFromCsv = typeIndex !== -1 ? columns[typeIndex].toLowerCase() : null
        const date = dateIndex !== -1 ? columns[dateIndex] : null

        const type =
          typeFromCsv || (rawAmount >= 0 ? 'income' : 'expense')

        return {
          id: crypto.randomUUID(),
          description,
          amount: Math.abs(rawAmount),
          type,
          category: categorizeTransaction(description),
          date,
        }
      })

      onImportTransactions(importedTransactions)
      e.target.value = ''
    }

    reader.readAsText(file)
  }

  return (
    <section className="csv-importer">
      <div>
        <h3>Import transactions</h3>
        <p>Upload a CSV file with date, description, and amount.</p>
      </div>

      <label className="csv-upload-button">
        Upload CSV
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </label>
    </section>
  )
}

export default CsvImporter