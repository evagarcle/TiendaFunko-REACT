# Proyecto de Frontend con React

Este proyecto es una aplicación de frontend desarrollada con React que permite a los usuarios registrarse, iniciar sesión, ver productos, añadirlos al carrito de compras, crear pedidos y gestionar sus perfiles.

## Estructura del Proyecto

La estructura principal del proyecto incluye los siguientes componentes:

```jsx
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Funkos from './components/Funkos/Funkos'
import Profile from './components/Profile/Profile'
import Register from './components/Register/Register'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import { UserProvider } from './context/UserContext/UserState'
import { FunkoProvider } from './context/FunkoContext/FunkoState'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <UserProvider>
        <FunkoProvider>
            <Header />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/funkos" element={<Funkos />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </FunkoProvider>
        </UserProvider>
        
      </BrowserRouter>

    </>
  )
}

export default App
```

## Funcionalidades

El frontend desarrollado tiene las siguientes funcionalidades:

### Registro de Usuarios

Los usuarios pueden registrarse a través del componente `Register`.

### Login de Usuarios

Los usuarios pueden iniciar sesión mediante el componente `Login`.

### Visualización y Adición de Productos al Carrito

Los productos, en este caso Funkos, se pueden ver en el componente `Funkos`. Los usuarios pueden añadir productos al carrito de compras desde esta vista.

### Creación de Pedidos

Una vez los productos se añaden al carrito (`Cart`), los usuarios pueden proceder a crear pedidos.

### Gestión del Perfil de Usuario

En el componente `Profile`, los usuarios pueden ver y gestionar sus datos personales.

### Logout

Los usuarios pueden cerrar sesión desde su perfil u otras secciones designadas de la aplicación.

## Contextos

El estado global de la aplicación se gestiona mediante dos contextos principales:

- `UserContext`: Proporcionado por `UserProvider`, gestiona el estado del usuario.
- `FunkoContext`: Proporcionado por `FunkoProvider`, gestiona el estado de los productos Funkos.

## Estilos

La aplicación utiliza `App.scss` para los estilos globales.

## Navegación

La navegación dentro de la aplicación se gestiona con `react-router-dom`, permitiendo definir rutas y componentes asociados a cada ruta.

## Instrucciones para Ejecutar el Proyecto

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

1. Clona este repositorio.
2. Instala las dependencias usando `npm install`.
3. Inicia la aplicación con `npm start`.
4. Abre tu navegador y navega a `http://localhost:3000`.

## Requisitos Previos

- Node.js
- npm o yarn

## Estructura de Archivos

```
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Cart
│   │   │   └── Cart.js
│   │   ├── Footer
│   │   │   └── Footer.js
│   │   ├── Header
│   │   │   └── Header.js
│   │   ├── Home
│   │   │   └── Home.js
│   │   ├── Login
│   │   │   └── Login.js
│   │   ├── Funkos
│   │   │   └── Funkos.js
│   │   ├── Profile
│   │   │   └── Profile.js
│   │   └── Register
│   │       └── Register.js
│   ├── context
│   │   ├── UserContext
│   │   │   └── UserState.js
│   │   ├── FunkoContext
│   │       └── FunkoState.js
│   ├── App.js
│   └── App.scss
├── package.json
└── README.md
```

Este README proporciona una visión general del proyecto, su estructura, funcionalidades y pasos para ejecutarlo localmente.
