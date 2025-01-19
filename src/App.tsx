import './App.css'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage/LoginPage.tsx'

function App() {

  return (
    <div className={'h-full'}>
        <Routes>
            <Route path="/" element={<LoginPage />} />
        </Routes>
    </div>
  )
}

export default App
