import Dashboard from '../pages/Dashboard'

function MainLayout() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>MoneyBoard</h1>
          <p>Personal finance dashboard</p>
        </div>
      </header>

      <main className="app-main">
        <Dashboard />
      </main>
    </div>
  )
}

export default MainLayout