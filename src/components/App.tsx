import {useCallback, useState } from 'react'
import { Layout } from './layout/Layout'

function App() {

  const [count, setCount] = useState<number>(0)


  const counter = useCallback(() => {
    setCount(count => count + 1)
  }, [])
   


  return (
    <>

     <button onClick={counter}>Click {count}</button>
   
      <Layout header={<h2>Header</h2>} footer={<h2>Footer</h2>}>
        <h1>Content</h1>
      </Layout>
  
   
    </>
    
  )
}

export default App
