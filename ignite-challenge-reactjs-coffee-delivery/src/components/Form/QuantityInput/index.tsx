import { Minus, Plus } from '@phosphor-icons/react'

import { Container } from './styles'

type Props = {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

const QuantityInput = ({ quantity, incrementQuantity, decrementQuantity }: Props) => {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus />
      </button>
    </Container>
  )
}

export { QuantityInput }
