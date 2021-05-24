import { Wrapper, Title } from 'components/panel/panel.styles';
import Mem from 'components/mem/mem';
const tabHot = [1, 2, 3, 4, 5];
const Panel = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {tabHot.map((item, i) => (
        <Mem key={i} />
      ))}
    </Wrapper>
  );
};

export default Panel;
