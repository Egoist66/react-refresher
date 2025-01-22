import {PureComponent, useCallback, useState } from 'react'
import { Layout } from './layout/Layout'

interface GreetingProps {
  text?: string
}

function WithGreeting(text: string = ''){

  const [greeting, setGreeting] = useState<string>(text)
  return class Greeting extends PureComponent<GreetingProps> {

    constructor(props: GreetingProps) {
      super(props)
    }

    componentDidMount(): void {
      setGreeting(text)
    }


   
    render(){
      return <h1>{greeting || this.props.text}</h1>
    }
  }
}

function App() {

  const [count, setCount] = useState<number>(0)
  const Wrapper = WithGreeting('')


  const counter = useCallback(() => {
    setCount(count => count + 1)
  }, [])
   


  return (
    <>

     <button onClick={counter}>Click {count}</button>
   
      <Layout header={<h2>Header</h2>} footer={<h2>Footer</h2>}>
        <h1>Content</h1>
        <Wrapper text='i love you' />
      </Layout>
  
   
    </>
    
  )
}

export default App

