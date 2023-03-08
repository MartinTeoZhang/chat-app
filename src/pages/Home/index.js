import './index.scss'
import { Layout, Col, Row } from 'antd'
import HeadBar from '../../components/HeadBar'
import MainSpace from '../../components/MainSpace'

const { Header, Footer, Sider, Content } = Layout

//home组件
const Home = () => {
  return (
    <Layout className="container">
      <HeadBar />
      <Content>
        <Row align={"center"} justify={"center"} wrap={false}>

          <Col span={4}>

          </Col>
          <Col span={14}>
            <MainSpace />
          </Col>
          <Col span={4}>

          </Col>

        </Row>
      </Content>
      <Footer className='footer'>
        react-app
      </Footer>

    </Layout>
  )
}

export default Home

