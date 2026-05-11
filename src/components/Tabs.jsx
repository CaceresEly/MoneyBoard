function Tabs({ activeTab, onTabChange }) {
  return (
    <nav className="tabs">
      <button
        type="button"
        className={activeTab === 'dashboard' ? 'tab active' : 'tab'}
        onClick={() => onTabChange('dashboard')}
      >
        Dashboard
      </button>

      <button
        type="button"
        className={activeTab === 'transactions' ? 'tab active' : 'tab'}
        onClick={() => onTabChange('transactions')}
      >
        Transactions
      </button>
    </nav>
  )
}

export default Tabs