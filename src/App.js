import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { history } from './utils'

import './App.css'

const Home = lazy(() => import('./pages/Home'))

function App () {
  return (

    <div className='App'>
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
              // marginTop: 200
            }}
          >
            loading...
          </div>
        }
      >

        <HistoryRouter history={history}>

          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </HistoryRouter>

      </Suspense>
    </div>

  )
}

export default App
