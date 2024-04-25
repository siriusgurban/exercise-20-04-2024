import BasketList from './BasketList'
import Content from './Content'
import Header from './Header'

function BasketTask() {
  return (
    <div>
      <h2>Basket Task</h2>
      <Header />
      <div style={{ display: 'flex', gap: '20px' }}>
        <Content />
        <BasketList />
      </div>
    </div>
  )
}

export default BasketTask
