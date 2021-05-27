import { Suspense } from 'react';
import { Wrapper, Title } from 'components/panel/panel.styles';
import { useSelector } from 'react-redux';
import { whichCategory, memTab } from 'components/panel/panel-helpers';
import { MemLazy } from 'components/mem/memLazy/memlazy';
import Loader from 'react-loader-spinner';

const Panel = ({ category }) => {
  const memData = useSelector(({ memReducer }) => memReducer.memData);
  return (
    <Wrapper>
      <Title>{category}</Title>
      {whichCategory(category, memData).map((memInfo) => (
        <Suspense
          fallback={
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
          }
        >
          <MemLazy
            key={memInfo[1].title}
            data={memInfo[1]}
            mem={memTab[memInfo[1].id]}
          />
        </Suspense>
      ))}
    </Wrapper>
  );
};

export default Panel;
