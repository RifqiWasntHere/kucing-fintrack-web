import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { MainLayout } from './styles/Layouts'
import bg from './img/bg.png'

import Orb from './Components/Orb/orb.js'
import Navigation from './Components/Navigation/Navigation.js'
import Dashboard from './Components/Dashboard/Dashboard'
import Income from './Components/Income/Income'
import Expense from './Components/Expense/Expense'
import { Login } from './Components/Login/Login'
import { useGlobalContext } from './context/globalContext'

function App() {
  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global)

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4:
        return <Expense />
      default:
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  return (
    <AppStyled bg={bg} className='App'>
      {orbMemo}
      <MainLayout>
        {/* <Login /> */}
        <Navigation active={active} setActive={setActive} />
        <main>{displayData()}</main>
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`
export default App
