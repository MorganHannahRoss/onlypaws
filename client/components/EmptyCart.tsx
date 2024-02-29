function EmptyCartButton() {
  const emptyCart = () => {
    console.log('empty cart')
    localStorage.setItem('trolleyList', JSON.stringify([]))
  }

  return (
    <div>
      <button onclick={emptyCart}>Empty Cart</button>
    </div>
  )
}

export default EmptyCartButton
