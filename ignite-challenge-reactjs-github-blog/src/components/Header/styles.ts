import styled from "styled-components";

interface HeaderProps {
  image: string;
}

export const HeaderContainer = styled.header<HeaderProps>`
  background: url(${props => props.image}) no-repeat;
  background-size: cover;
  padding: 4.38rem 0 8rem;
`;

export const HeaderContent = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
