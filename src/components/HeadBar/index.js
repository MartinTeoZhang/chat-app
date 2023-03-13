import { Layout, Col, Row, Breadcrumb, Menu, theme } from 'antd'
// import { useNavigate } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import { history } from '../../utils/history'
const { Header } = Layout



const HeadBar = () => {
  const [current, setCurrent] = useState('html')

  const items = [
    { key: 'html', label: 'HtmlGenerator', path: '/' },
    { key: 'image', label: 'ImageGenerator', path: '/image' },
  ]


  const onClick = (e) => {
    setCurrent(e.key)
    history.push(items.filter(item => item.key === e.key)[0].path)

  }

  return (
    <>
      <Header>
        <h1 className='brand'>Chatter</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[current]}
          items={items}
          onClick={onClick}
        />
      </Header>

    </>
  )
}

export default HeadBar