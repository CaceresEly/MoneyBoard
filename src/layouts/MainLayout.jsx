import Dashboard from '../pages/Dashboard'

function MainLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>MoneyBoard</h1>
      </header>

      <main className="app-main">
        <Dashboard />
      </main>
    </div>
  )
}

export default MainLayout