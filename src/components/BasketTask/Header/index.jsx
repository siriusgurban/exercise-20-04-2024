import { useGlobalContext } from '../../../store/global/GlobalProvider'

function Header() {
  const {
    state: { basket },
  } = useGlobalContext()

  return (
    <div
      style={{
        display: 'flex',
        padding: '20px',
        backgroundColor: 'red',
        justifyContent: 'space-around',
      }}
    >
      <div>E-commerce</div>
      <div>Home</div>
      <div>
        Basket
        <span style={{ backgroundColor: 'orange', padding: '5px' }}>
          {basket?.length}
        </span>
      </div>
    </div>
  )
}

export default Header
