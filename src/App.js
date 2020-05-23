import React, {lazy, Suspense} from 'react'
import { importMDX } from 'mdx.macro'
import './App.css'

const Content = lazy(() => importMDX('./Content/index.mdx'))

function App() {
  return (
    <div className="overview-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Content/>
      </Suspense>

    </div>
  )
}

export default App;
