import { Alert } from 'antd'
import { useState } from 'react'
import './index.scss'

const AlertMsg = (props) => {
  const [visible, setVisible] = useState(false)
  const handleClose = () => {
    setVisible(false)
  }

  return (
    <>
      {visible && (
        <Alert className='alert' message={props.message} banner={true} type={props.type} closable />
      )}
    </>
  )

}

export default AlertMsg