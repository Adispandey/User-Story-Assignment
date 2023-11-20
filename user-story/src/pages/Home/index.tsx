import Typography from '@/components/atoms/Typography'
import NavBar from '@/components/organisms/NavBar'
import { HOME } from '@/strings/string'
import { Stack } from '@mui/material'

const Home = () => {
  return (
    <Stack>
      <NavBar />
      <Typography variant="h2">{HOME}</Typography>
    </Stack>
  )
}

export default Home
