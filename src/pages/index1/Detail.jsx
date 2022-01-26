import useAppModel from '@/model'
import styles from './index.less'

function Index() {
  const { state } = useAppModel()
  const {
    global: { globalCount },
  } = state
  return (
    <div>
      <div className={styles.box}>
        <div>index1的Detail</div>
        <div>全局状态:</div>
        <div>globalCount:{globalCount}</div>
      </div>
    </div>
  )
}
export default Index
