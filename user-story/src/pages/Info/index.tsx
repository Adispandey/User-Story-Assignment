import Typography from '@/components/atoms/Typography'
import NavBar from '@/components/organisms/NavBar'
import { INFO } from '@/strings/string'
import { Stack } from '@mui/material'

const Info = () => {
  return (
    <Stack>
      <NavBar />
      <Typography variant="h2">{INFO}</Typography>
    </Stack>
  )
}

export default Info
