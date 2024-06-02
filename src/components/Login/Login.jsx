import { Button, Form, Input } from 'antd'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'

const Login = () => {
  const {login} = useContext(UserContext)
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z_]{2,3}$/
  const navigate = useNavigate()
  const onFinish = (values) => {
    login(values)
    navigate("/profile")
    notification.success({
      message: "Welcome"
    })
  }

  return (
    <div>
      <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="on"
  >
    <Form.Item
      label="Correo electrónico"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
        {
          pattern: emailRegex,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Contraseña"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Iniciar sesión
      </Button>
    </Form.Item>
  </Form>
    </div>
  )
}

export default Login