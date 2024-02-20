import logoImg from '../../assets/icons/ignite-logo.svg'
import * as Dialog from '@radix-ui/react-dialog';

import { NewTransactionModal } from '../NewTransactionModal/index';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transacao</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
