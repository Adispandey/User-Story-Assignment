import Typography from '@/components/atoms/Typography'
import { Icon, Stack, styled } from '@mui/material'

interface IIconTypography {
  value: React.ReactNode
  icon: React.ReactNode
  backgroundColor?: string
  color?: string
  handleClick: () => void
}

const Bar = styled(Stack)({
  gap: '16px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '16px',
  borderBottom: `1px solid black`,
  cursor: 'pointer',
})
const StyleIcon = styled(Icon)({
  width: '24px',
  height: '24px',
})
const IconTypography = ({
  value,
  icon,
  backgroundColor,
  color,
  handleClick,
}: IIconTypography) => {
  return (
    <Bar
      onClick={handleClick}
      sx={{ backgroundColor: backgroundColor, color: color }}
    >
      <Typography variant="body1">{value}</Typography>
      <StyleIcon>{icon}</StyleIcon>
    </Bar>
  )
}

export default IconTypography
