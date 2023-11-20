import Typography from '@/components/atoms/Typography'
import NavBar from '@/components/organisms/NavBar'
import { SETTING } from '@/strings/string'
import { Stack } from '@mui/material'

const Setting = () => {
  return (
    <Stack>
      <NavBar />
      <Typography variant="h2">{SETTING}</Typography>
    </Stack>
  )
}

export default Setting
