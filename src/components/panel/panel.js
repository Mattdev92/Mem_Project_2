import { Suspense } from 'react';
import { Wrapper, Title } from 'components/panel/panel.styles';
import { useSelector } from 'react-redux';
import { whichCategory } from 'components/panel/panel-helpers';
import { MemLazy } from 'components/mem/memLazy/memlazy';
import Loader from 'react-loader-spinner';

const Panel = ({ category }) => {
  const memData = useSelector(({ memReducer }) => memReducer.memData);
  const memTab = useSelector(({ memReducer }) => memReducer.memTab);
  return (
    <Wrapper>
      {category === 'DEFAULT' ? (
        <Title>All available MEM</Title>
      ) : (
        <Title>{category}</Title>
      )}

      {whichCategory(category, memData).map((memInfo) => (
        <Suspense
          fallback={
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
          }
          key={memInfo[1].title}
        >
          <MemLazy data={memInfo[1]} mem={memTab[memInfo[1].id - 1]} />
        </Suspense>
      ))}
    </Wrapper>
  );
};

export default Panel;
