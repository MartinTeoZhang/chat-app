import { Layout, Col, Row, Breadcrumb, Menu, theme } from 'antd'
import './index.scss'

const { Header } = Layout



const HeadBar = () => {
  const state = {
    items: [
      { key: 1, label: '首页' },
    ]
  }

  return (
    <>
      <Header>
        <h1 className='brand'>Chatter</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={state.items}
        />
      </Header>

    </>
  )
}

export default HeadBar