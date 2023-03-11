import './index.scss'
import React, { useState } from 'react'
import AlertMsg from '../AlertMsg'
import { useStore } from '../../store'
import { Col, Row, Input } from 'antd'
import { setApiKey, getApiKey, removeApiKey } from '../../utils'
const { Search } = Input



const MainSpace = () => {

  const [apiKey, setFrontApiKey] = useState('')
  const [alertMessage, setAlertMessage] = useState('you have to provide a valid Api Key')
  const [alertType, setAlertType] = useState('warning')
  const { chatStore } = useStore()
  // 点击搜索按钮
  const onSearch = async (value) => {
    //检查apiKey是否存在，如果不存在就存储
    if (!apiKey && !getApiKey()) {
      <AlertMsg message={alertMessage} type={alertType} />
    } else if (!getApiKey()) {
      setApiKey(apiKey)
    }


    await chatStore.getChat({ message: value }).then(res => {
      console.log(res)
    })

  }

  return (
    <div className='mainspace-container'>
      <AlertMsg></AlertMsg>
      <Row align={'middle'} justify={'center'}>
        <div className='out-box'>
          <Col >
            <Row justify={'center'}>
              <h1 className='search-title'>Chatting Now</h1>
            </Row>
            <Row className='input-hint'>
              Plz type Your Api Key here:
            </Row>
            <Row>
              {/* apiKey输入框 */}
              <Input
                placeholder="Your Api Key"
                allowClear
                size="large"
                width={400}
                onChange={e => setFrontApiKey(e.target.value)}
                value={apiKey}
              />
            </Row>
            <Row className='input-hint'>
              <br />
              what html you want:
            </Row>
            <Row>
              {/* 内容输入框 */}
              <Search
                placeholder="input your request"
                allowClear
                enterButton="chat"
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