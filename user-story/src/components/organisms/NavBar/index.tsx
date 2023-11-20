import Typography from '@/components/atoms/Typography'
import IconTypography from '@/components/molecules/IconTypography'
import { SIDEBAR_DATA } from '@/strings/string'
import { handleClick } from '@/utils/function'
import { Card, Stack, styled } from '@mui/material'
import { useState } from 'react'

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
  const [active, setActive] = useState<string>('Home')
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
    </MainContainer>
  )
}

export default NavBar
