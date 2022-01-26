import { useModel } from './index'
import styles from '@/pages/index1/index.less'
function Index() {
  const { state } = useModel()
  const { count } = state
  return (
    <div className={styles.box}>
      <div>index2的Detail</div>
      <div> {count}</div>
    </div>
  )
}
export default Index
