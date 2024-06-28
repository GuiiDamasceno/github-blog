import { HeaderContainer, HeaderContent } from './styles'

import logoBg from '../../assets/Cover.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoBg} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
