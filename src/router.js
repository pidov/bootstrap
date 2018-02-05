
const Home = () => 'Hello from Home'
const MainLayout = () => 'Hello from MainLayout'
const NotFound = () => 'Hello from NotFound'

export default [{
  path: '/',
  exact: true,
  component: Home,
  layout: MainLayout
}, {
  component: NotFound
}]
