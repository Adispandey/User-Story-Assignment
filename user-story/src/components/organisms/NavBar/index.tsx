import Typography from '@/components/atoms/Typography'
import IconTypography from '@/components/molecules/IconTypography'
import {
  DASHBOARD,
  HOME,
  INFO,
  RECENT,
  SETTING,
  SIDEBAR_DATA,
} from '@/strings/string'
import { Card, Stack, styled } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MainContainer = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
})
const NavContainer = styled(Card)({
  width: '20%',
  height: '99vh',
  border: '1px solid black',
  backgroundColor: '#9AC1E9',
})
const Content = styled(Stack)({
  justifyContent: 'center',
  marginLeft: '30%',
})
const NavBar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState<string>('Home')
  const handleClick = (label: string) => {
    setActive(label)
    switch (label) {
      case HOME:
        navigate('/')
        break
      case DASHBOARD:
        navigate('/dashboard')
        break
      case INFO:
        navigate('/info')
        break
      case RECENT:
        navigate('/recent')
        break
      case SETTING:
        navigate('/setting')
        break
      default:
        break
    }
  }
  return (
    <MainContainer>
      <NavContainer>
        {SIDEBAR_DATA.map((bar) => (
          <IconTypography
            key={bar.id}
            value={bar.label}
            icon={<bar.icon />}
            backgroundColor={active === bar.label ? '#4B0082' : '#9AC1E9'}
            color={active === bar.label ? 'white' : ''}
            handleClick={() => handleClick(bar.label)}
          />
        ))}
      </NavContainer>
      <Content>
        <Typography variant="h2">{active}</Typography>
      </Content>
    </MainContainer>
  )
}

export default NavBar
