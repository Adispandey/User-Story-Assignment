interface IIcon {
  src: React.ReactNode
  alt: string
  sx: React.CSSProperties
}
const Icon = (props: IIcon) => {
  return <img {...props} />
}

export default Icon
