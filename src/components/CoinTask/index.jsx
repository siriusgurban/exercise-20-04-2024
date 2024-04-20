import { useEffect, useState } from 'react'
const endpoint = 'https://en.numista.com/catalogue/photos/azerbaidjan/'

function CoinTask() {
  const [count, setCount] = useState(0)
  const [face, setFace] = useState(0)
  const [back, setBack] = useState(0)
  const [img, setImg] = useState('')
  const coinsArr = [
    `${endpoint}277-original.jpg`,
    `${endpoint}278-original.jpg`,
  ]

  function onCoin() {
    setCount((count) => count + 1)
  }

  useEffect(() => {
    const rndNumber = Math.floor(Math.random() * 2)
    setImg(coinsArr[rndNumber])
    rndNumber == 0
      ? setFace((count) => count + 1)
      : setBack((count) => count + 1)
  }, [count])

  return (
    <div>
      <h2>Coin Task</h2>
      <h3>{count}</h3>
      <h2>
        Face: {face}, Back: {back}
      </h2>
      <div>
        <img src={img} alt="arxa-uz" width={200} height={200} />
      </div>
      <button onClick={onCoin}>Flip</button>
    </div>
  )
}

export default CoinTask
