import Dashboard from '../pages/Dashboard'

function MainLayout() {
  return (
    <div>
      <header>
        <h1>MoneyBoard</h1>
      </header>

      <main>
        <Dashboard />
      </main>
    </div>
  )
}

export default MainLayout