import NotFound from './Notfound'

const Home = () => 'Hello from Home'
const MainLayout = () => 'Hello from MainLayout'

export default [{
  path: '/',
  exact: true,
  component: Home,
  layout: MainLayout
}, {
  component: NotFound
}]
