import { Layout } from './layout/Layout'

function App() {


  const LayoutStructure = {
    header: <h1>Header</h1>,
    footer: <h2>Footer</h2>,
    _default: (data: any) => <h2>{data?.layout}</h2>
  }

  return (
   <>
   
    <Layout {...LayoutStructure}/>
  
   
   </>
    
  )
}

export default App
