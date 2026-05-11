function ChartPeriodFilter({ selectedPeriod, onPeriodChange }) {
  return (
    <div className="chart-period-filter">
      <button
        type="button"
        className={selectedPeriod === 'daily' ? 'period-button active' : 'period-button'}
        onClick={() => onPeriodChange('daily')}
      >
        Daily
      </button>

      <button
        type="button"
        className={selectedPeriod === 'weekly' ? 'period-button active' : 'period-button'}
        onClick={() => onPeriodChange('weekly')}
      >
        Weekly
      </button>

      <button
        type="button"
        className={selectedPeriod === 'monthly' ? 'period-button active' : 'period-button'}
        onClick={() => onPeriodChange('monthly')}
      >
        Monthly
      </button>
    </div>
  )
}

export default ChartPeriodFilter