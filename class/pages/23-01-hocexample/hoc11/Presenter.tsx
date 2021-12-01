const withAuth = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);

//함수
function aaa(Component) {
  // return function bbb(props){
  //로그인 검증 로직
  //   return"결과물"
  // }
}

//화상표 함수
const withAuth = (Component) => (props) => {
  //로그인 검증 로직!!
  return <Component {...props} />;
};

const asdf = () => 123;
