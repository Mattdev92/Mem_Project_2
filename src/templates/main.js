import Nav from 'components/navigation/nav';

const MainTemplate = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default MainTemplate;
