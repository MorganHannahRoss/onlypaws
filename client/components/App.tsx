import Checkout from './Checkout'
import SavingCounter from './SavingCounter'
import EmptyCart from './EmptyCart'

function App() {
  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      <SavingCounter name="button-1" />
      <SavingCounter name="button-2" />
      <Checkout />
      <EmptyCart />
    </div>
  )
}

export default App
