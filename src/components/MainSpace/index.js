import './index.scss'
import React, { useState } from 'react'
import AlertMsg from '../AlertMsg'
import { useStore } from '../../store'
import { Col, Row, Input, message } from 'antd'
import { setApiKey, getApiKey, removeApiKey } from '../../utils'
const { Search } = Input



const MainSpace = () => {

  const [apiKey, setFrontApiKey] = useState('')
  const [alertMessage, setAlertMessage] = useState('you have to provide a valid Api Key')
  const [alertType, setAlertType] = useState('warning')
  const [chatMessage, setChatMessage] = useState('')
  const { chatStore } = useStore()
  const [alertVisible, setAlertVisible] = useState(false)

  // 点击搜索按钮
  const onSearch = async (value) => {
    // 检查apiKey是否存在
    if (!apiKey && !getApiKey()) {
      setAlertVisible(true)
      console.log('no api key')
      return
    } else if (!getApiKey()) {
      // 如果输入了apiKey且没有存储到localStorage中，则存储
      setApiKey(apiKey)
    }

    // 包装发送给chatGPT的问题，按照需求填写，最后拼接${value}即来自输入框的内容
    const packInfo = `You need to help me generate a html page. Notice: your root html node should be a div and I don't need any explaination. My first request is ${value}`
    await chatStore.getChat({ message: packInfo }).then(res => {
      // 将返回结果设置chatMessage
      setChatMessage(res.choices[0].message.content)
    })

  }

  return (
    <div className='mainspace-container'>
      <AlertMsg visible={alertVisible} message={alertMessage} type={alertType}></AlertMsg>
      <Row align={'middle'} justify={'center'}>
        <div className='out-box'>
          <Col >
            <Row justify={'center'}>
              <h1 className='search-title'>Html Generator</h1>
            </Row>
            <Row className='input-hint'>
              Plz type Your Api Key here:
            </Row>
            <Row>
              {/* apiKey输入框 */}
              <Input
                className='input-box'
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
                className='input-box'
                placeholder="input your request"
                allowClear
                enterButton="chat"
                size="large"
                onPressEnter={onSearch}
                onSearch={onSearch}
              />
            </Row>
            <Row>
              <br />
            </Row>
            <Row className='input-hint'>
              display:
            </Row>
            <Row>
              <div className='result-area'>
                {
                  <div dangerouslySetInnerHTML={{ __html: chatMessage }}>
                  </div>
                }
              </div>
            </Row>
            <Row>
              <br />
            </Row>
            <Row className='input-hint'>
              code:
            </Row>
            <Row >
              <div className='code-area'>
                {chatMessage}
              </div>

            </Row>
          </Col>

        </div>
      </Row>
    </div>

  )
}

export default MainSpace