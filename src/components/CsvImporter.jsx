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
      const rows = text.split('\n').filter(Boolean)

      const importedTransactions = rows.slice(1).map((row) => {
        const [description, amount, type] = row.split(',')

        return {
          id: crypto.randomUUID(),
          description: description.trim(),
          amount: Math.abs(Number(amount)),
          type: type.trim().toLowerCase(),
          category: categorizeTransaction(description),
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
        <p>Upload a CSV file with description, amount, and type.</p>
      </div>

      <label className="csv-upload-button">
        Upload CSV
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </label>
    </section>
  )
}

export default CsvImporter