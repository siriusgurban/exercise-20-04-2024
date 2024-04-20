import { useEffect, useState } from 'react'
const endpoint = 'https://en.numista.com/catalogue/photos/azerbaidjan/'
const defaultImg =
  'https://media-s3-us-east-1.ceros.com/woundedwarriorproject/images/2023/05/17/7eae891d05abcc202e3c32c178b4f608/nickel.png'

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
    onCoinChange()
  }

  function onCoinChange() {
    const rndNumber = Math.floor(Math.random() * 2)
    setImg(coinsArr[rndNumber])
    rndNumber == 0
      ? setFace((count) => count + 1)
      : setBack((count) => count + 1)
  }

  return (
    <div>
      <h2>Coin Task</h2>
      <h3>{count}</h3>
      <h2>
        Face: {face}, Back: {back}
      </h2>
      <div>
        <img
          src={img == undefined ? defaultImg : img}
          alt="arxa-uz"
          width={200}
          height={200}
        />
      </div>
      <button onClick={onCoin}>Flip</button>
    </div>
  )
}

export default CoinTask
