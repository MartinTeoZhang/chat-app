import './index.scss'
import { Col, Row, Input, Space } from 'antd'

const { Search } = Input

const MainSpace = () => {
  const onSearch = (value) => {

  }

  return (
    <div className='mainspace-container'>
      <Row align={'middle'} justify={'center'}>
        <div className='out-box'>
          <Col >
            <Row justify={'center'}>
              <h1 className='search-title'>Chatting Now</h1>
            </Row>
            <Row>
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </Row>
          </Col>

        </div>
      </Row>
    </div>

  )
}

export default MainSpace