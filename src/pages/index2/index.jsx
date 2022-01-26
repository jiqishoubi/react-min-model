// import useAppModel from '@/model'
import { Button } from 'antd'
import generateModel from '@/redux'
import Detail from './Detail'
import styles from '@/pages/index1/index.less'
export const { connectProvider, useModel } = generateModel(require('./model'))
function Index() {
  const { state, dispatch, getLoading } = useModel()
  const { count } = state
  return (
    <div className={styles.box}>
      <div>index2</div>
      <div>局部的store（model）</div>
      <div>index2的count：{count}</div>
      <Button
        onClick={() => {
          dispatch('addCount')
        }}
        loading={getLoading('addCount')}
      >
        add index2的count
      </Button>
      <Detail />
    </div>
  )
}
export default connectProvider(Index)
