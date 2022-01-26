import { Outlet, Link } from 'react-router-dom'
import styles from './index.less'

function Index() {
  return (
    <div>
      <div className={styles.tab_wrap}>
        <Link className={styles.tab_item} to="index1">
          示例index1
        </Link>
        <Link className={styles.tab_item} to="index2">
          示例index2
        </Link>
      </div>
      <div className={styles.page_content}>
        <Outlet />
      </div>
    </div>
  )
}

export default Index
