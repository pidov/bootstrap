import NotFound from '@components/NotFound'
import Widget from '@layouts/Widget'
console.log(Widget)
const Home = () => 'Hello from Home'
// const MainLayout = () => 'Hello from MainLayout'

export default [{
  path: '/',
  exact: true,
  component: Home,
  layout: Widget
}, {
  component: NotFound,
  layout: Widget
}]
