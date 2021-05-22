import { connect } from 'react-redux';
import { exampleAction } from 'actions/navigation-action';
import { Nav } from 'components/navigation/nav.styles';
import { useSelector } from 'react-redux';

const Navigation = ({ ExampleAction }) => {
  const author = useSelector(
    ({ navigationReducer }) => navigationReducer.author
  );
  console.log(author);
  return (
    <Nav>
      <div>Nav</div>
      <button onClick={ExampleAction}>Click me</button>
    </Nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  ExampleAction: () => dispatch(exampleAction()),
});

export default connect(null, mapDispatchToProps)(Navigation);
