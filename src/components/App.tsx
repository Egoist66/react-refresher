import { Layout } from './layout/Layout'

function App() {

  return (
    <Layout
     header={<h1>Header</h1>}
     footer={() => <h2>Footer</h2>}
     _default={(data) => <h2>{data?.layout}</h2>}
    >
    </Layout>
  )
}

export default App
