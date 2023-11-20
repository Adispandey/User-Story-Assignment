import Typography from '@/components/atoms/Typography'
import NavBar from '@/components/organisms/NavBar'
import { DASHBOARD } from '@/strings/string'
import { Stack } from '@mui/material'

const Dashboard = () => {
  return (
    <Stack>
      <NavBar />
      <Typography variant="h2">{DASHBOARD}</Typography>
    </Stack>
  )
}

export default Dashboard
