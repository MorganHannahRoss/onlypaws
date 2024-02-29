interface Props {
  trolley: string[]
  setTrolley: (trolley: string[]) => void
}

function EmptyCartButton(props: Props) {
  const emptyCart = () => {
    props.setTrolley([])
  }

  return (
    <div>
      <button onClick={emptyCart}>Empty Cart</button>
    </div>
  )
}

export default EmptyCartButton
