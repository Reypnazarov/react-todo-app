import { createContext } from "react"
import { useReducer } from "react"
import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import Register from "./pages/Login/Register/Register"
import { authReducer, initialState } from "./store/authReducer"

export const AuthContext = createContext()

function App() {
  const [ state, dispatch ] = useReducer(authReducer, initialState)
  return (
    <div>
     <AuthContext.Provider value={{ state, dispatch }}>
     <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
     </AuthContext.Provider>
    </div>
  )
}

export default App