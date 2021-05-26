import styled from 'styled-components';

type RadioButtonGroupContainerStyleProps = {
  vertical?: boolean;
};

export const Container = styled.div`
  display: flex;
  padding-top: 5px;
  ${({ vertical }: RadioButtonGroupContainerStyleProps) =>
    vertical && `flex-direction: column;`}
`;

export const Label = styled.label`
  padding-top: 5px;
`;
