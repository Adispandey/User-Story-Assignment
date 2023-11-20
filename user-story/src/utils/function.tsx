import {
  DASHBOARD,
  HOME,
  INFO,
  RECENT,
  SETTING,
  dashboard,
  home,
  info,
  recent,
  setting,
} from '@/strings/string'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const [active, setActive] = useState<string>('Home')
const navigate = useNavigate()
export const handleClick = (label: string) => {
  setActive(label)
  switch (label) {
    case HOME:
      navigate(home)
      break
    case DASHBOARD:
      navigate(dashboard)
      break
    case INFO:
      navigate(info)
      break
    case RECENT:
      navigate(recent)
      break
    case SETTING:
      navigate(setting)
      break
    default:
      break
  }
}
