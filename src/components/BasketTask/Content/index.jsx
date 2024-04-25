import CardItem from '../CardItem'
import { data } from '../../../constants/data'

function Content() {
  return (
    <div
      style={{
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {console.log(data, 'data')}
      {data?.map((item, index) => {
        return <CardItem {...item} key={index} />
      })}
    </div>
  )
}

export default Content
