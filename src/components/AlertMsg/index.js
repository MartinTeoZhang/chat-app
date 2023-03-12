import { Alert } from 'antd'
import { useState } from 'react'
import './index.scss'

const AlertMsg = (props) => {
  const [visible, setVisible] = useState(props.visible)
  const handleClose = () => {
    setVisible(false)
  }

  return (
    <>
      {props.visible && (
        <Alert className='alert' message={props.message} banner={true} type={props.type} closable afterClose={handleClose} />
      )}
    </>
  )

}

export default AlertMsg