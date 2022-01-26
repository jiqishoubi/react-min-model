import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import LazyLoading from '@/components/LazyLoading'
import Layout from '@/layouts/Layout'

const route404 = {
  path: '*',
  element: () => import('@/pages/common/404'),
}

let routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Navigate to="/index1" /> }, // Redirect
      {
        path: 'index1',
        element: () => import('@/pages/index1'),
      },
      {
        path: 'index2',
        element: () => import('@/pages/index2'),
      },
      route404,
    ],
  },
  route404,
]

function LazyElement(props) {
  const { importFunc } = props
  const LazyComponent = lazy(importFunc)
  return (
    <Suspense fallback={<LazyLoading />}>
      <LazyComponent />
    </Suspense>
  )
}

// 处理routes 如果element是懒加载，要包裹Suspense
function dealRoutes(routesArr) {
  if (routesArr && Array.isArray(routesArr) && routesArr.length > 0) {
    routesArr.forEach((route) => {
      if (route.element && typeof route.element == 'function') {
        const importFunc = route.element
        route.element = <LazyElement importFunc={importFunc} />
      }
      if (route.children) {
        dealRoutes(route.children)
      }
    })
  }
}
dealRoutes(routes)

export default routes
