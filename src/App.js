import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { history } from './utils'
import React from 'react'
import { Layout, Col, Row } from 'antd'

import './App.css'

const { Header, Footer, Sider, Content } = Layout
const MainSpace = lazy(() => import('./pages/MainSpace'))
const ImageGenerate = lazy(() => import('./pages/ImageGenerate'))
const HeadBar = lazy(() => import('./components/HeadBar'))

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
        <Layout className="container">
          <HeadBar />
          <Content>
            <Row align={"center"} justify={"center"} wrap={false}>

              <Col span={4}>

              </Col>
              <Col span={14}>

                <HistoryRouter history={history}>

                  <Routes>
                    <Route path='/' element={<MainSpace />}></Route>
                    <Route path='image' element={<ImageGenerate />}></Route>
                  </Routes>
                </HistoryRouter>

              </Col>
              <Col span={4}>

              </Col>

            </Row>
          </Content>
          <Footer className='footer'>
            react-app
          </Footer>

        </Layout>

      </Suspense>
    </div>

  )
}

export default App
