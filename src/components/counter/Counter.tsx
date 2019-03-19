import { increment, decrement } from '@store/counter/counterActions'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { AppState } from '@store/store'

interface CounterProps {
  count: number
  add: () => void
  remove: () => void
}

const Counter: React.SFC<CounterProps> = ({ count, add, remove }) => {
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
    </>
  )
}

const mapStateToProps = ({ counter }: AppState) => ({
  count: counter.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: () => dispatch(increment),
  remove: () => dispatch(decrement),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)