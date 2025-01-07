import { HeaderContainer, HeaderContent } from "./styles"

import backgroundImage from '../../assets/bg-header.png';
import logoImg from '../../assets/logo-github-blog.svg'

export const Header = () => {
  return (
    <HeaderContainer image={backgroundImage}>
      <HeaderContent>
        <img src={logoImg} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}

