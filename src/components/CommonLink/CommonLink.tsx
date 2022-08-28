import * as SC from './commonLink.style'

interface CommonLinkProps {
  children: any,
  to: string
}

const CommonLink = ({ children, to }: CommonLinkProps) => {
  return (
    <SC.CommonLinkStyled to={to}>{children}</SC.CommonLinkStyled>
  )
}

export default CommonLink