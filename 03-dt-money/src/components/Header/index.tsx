import logoImg from '../../assets/icons/ignite-logo.svg'
import * as Dialog from '@radix-ui/react-dialog';

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import { Portal } from '../../../node_modules/@radix-ui/react-dialog/dist/index.d';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transacao</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay>
              <Dialog.Content>
                <Dialog.Title>Nova transacao</Dialog.Title>
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Overlay>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
