import { Button } from 'antd'
import Detail from './Detail'
import useAppModel from '@/model'
import styles from './index.less'

function Index() {
  const { state, dispatch, getLoading } = useAppModel()
  const {
    global: { globalCount },
  } = state
  return (
    <div>
      <div className={styles.box}>
        <div>index1</div>
        <div>全局状态:</div>
        <div>globalCount:{globalCount}</div>
        <Button
          onClick={() => {
            dispatch('global/addGlobalCount')
          }}
          loading={getLoading('global/addGlobalCount')}
        >
          add全局的globalCount
        </Button>

        <Detail />
      </div>
    </div>
  )
}
export default Index
