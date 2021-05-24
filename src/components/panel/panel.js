import { Wrapper, Title } from 'components/panel/panel.styles';

const Panel = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Panel;
