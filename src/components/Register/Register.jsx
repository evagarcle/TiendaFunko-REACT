import { Button, Form, Input, notification } from 'antd'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const { createUser } = useContext(UserContext)
  const navigate = useNavigate()
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z_]{2,3}$/

  const onFinish = async (values) => {
    try {
      await createUser(values)
      navigate("/profile")
      notification.success({
        message: "Usuario registrado correctamente"
      })
    } catch (error) {
      notification.error({
        message: "Error al registrar el usuario",
        description: error.message
      })
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Form
        name="register"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="on"
      >
        <Form.Item
          label="Nombre"
          name="firstName"
          rules={[
            { required: true, message: 'Por favor inserta tu nombre' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Apellido"
          name="lastName"
          rules={[
            { required: true, message: 'Por favor inserta tu apellido' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Correo electrónico"
          name="email"
          rules={[
            { required: true, message: 'Por favor inserta un correo válido' },
            { pattern: emailRegex, message: 'Por favor inserta un correo válido' }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            { required: true, message: 'Por favor inserta tu contraseña' }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Registrarme
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
