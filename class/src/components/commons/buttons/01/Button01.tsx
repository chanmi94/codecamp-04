import styled from "@emotion/styled";

interface IMyButtonprops {
  isValid: boolean;
}

const MyButton = styled.button`
  background-color: ${(props: IMyButtonprops) =>
    props.isValid ? "yellow" : ""};
`;

export default function Button01(props) {
  return (
    <MyButton type={props.type} isValid={props.isValid}>
      {props.name}
    </MyButton>
  );
}
