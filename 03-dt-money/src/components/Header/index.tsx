import logoImg from '../../assets/icons/ignite-logo.svg'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransactionButton>Nova transacao</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
