import { useState } from 'react'
import { useGlobalContext } from '../../../store/global/GlobalProvider'
import { TYPES } from '../../../store/global/types'

function CardItem({ name, price, image, inBasket }) {
  const [outBasket, setOutBasket] = useState(false)
  const {
    state: { basket },
    dispatch,
  } = useGlobalContext()

  function handleInDecrement() {
    console.log('handleInDecrement')

    dispatch({
      type: TYPES.BASKET,
      payload: {
        name,
        price,
        image,
        inBasket: () => setOutBasket((prev) => !prev),
      },
    })
  }
  return (
    <div>
      <div style={{ border: '1px solid black' }}>
        <img src={image} alt="apple" width={200} />
        <div>{name}</div>
        <div>{price} $</div>
        <div
          style={{
            display: 'flex',
            padding: '20px',
            justifyContent: 'center',
            gap: '50px',
          }}
        >
          {console.log(inBasket, 'basket')}
          <button
            style={{ backgroundColor: inBasket ? 'red' : 'green' }}
            onClick={handleInDecrement}
          >
            {inBasket ? '-' : '+'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardItem
