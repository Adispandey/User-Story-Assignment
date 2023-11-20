import Typography from '@/components/atoms/Typography'
import NavBar from '@/components/organisms/NavBar'
import { RECENT } from '@/strings/string'
import { Stack } from '@mui/material'

const Recent = () => {
  return (
    <Stack>
      <NavBar />
      <Typography variant="h2">{RECENT}</Typography>
    </Stack>
  )
}

export default Recent
