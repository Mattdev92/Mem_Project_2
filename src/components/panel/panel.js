import { Wrapper, Title } from 'components/panel/panel.styles';
import Mem from 'components/mem/mem';
import { useSelector } from 'react-redux';

const Panel = ({ category }) => {
  const memData = useSelector(({ memReducer }) => memReducer.memData);
  return (
    <Wrapper>
      <Title>{category}</Title>
      {category === 'HOT' &&
        Object.entries(memData)
          .filter((item) => item[1].upvotes - item[1].downvotes > 5)
          .map((item, i) => <Mem key={i} data={item[1]} />)}
      {category === 'REGULAR' &&
        Object.entries(memData)
          .filter((item) => item[1].upvotes - item[1].downvotes <= 5)
          .map((item, i) => <Mem key={i} data={item[1]} />)}
      {category === 'DEFAULT' &&
        Object.entries(memData).map((item, i) => (
          <Mem key={i} data={item[1]} />
        ))}
    </Wrapper>
  );
};

export default Panel;
