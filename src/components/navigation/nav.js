import { Nav } from 'components/navigation/nav.styles';
import { useSelector, useDispatch } from 'react-redux';

const Navigation = () => {
  const author = useSelector(
    ({ navigationReducer }) => navigationReducer.author
  );
  const dispatch = useDispatch();
  console.log(author);
  return (
    <Nav>
      <div>Nav</div>
      <button onClick={() => dispatch({ type: 'EXAMPLE_ACTION' })}>
        Click me
      </button>
    </Nav>
  );
};

export default Navigation;
