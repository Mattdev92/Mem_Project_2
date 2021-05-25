import { Wrapper, Title } from 'components/panel/panel.styles';
import Mem from 'components/mem/mem';
import { useSelector } from 'react-redux';
import { whichCategory } from 'components/panel/panel-helpers';

const Panel = ({ category }) => {
  const memData = useSelector(({ memReducer }) => memReducer.memData);
  return (
    <Wrapper>
      <Title>{category}</Title>
      {whichCategory(category, memData).map((memInfo) => (
        <Mem key={memInfo[1].title} data={memInfo[1]} />
      ))}
    </Wrapper>
  );
};

export default Panel;
