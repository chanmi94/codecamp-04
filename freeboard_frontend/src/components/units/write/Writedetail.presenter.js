import {
    Avatar,
    AvatarWrapper,
    Body,
    Button,
    Contents,
    CreatedAt,
    BottomWrapper,
    Header,
    Info,
    Title,
    Wrapper,
    Writer,
    CardWrapper,
    Image
  } from "../../../../styles/BoardsDetail";
  export default function WriteDetailUI(props) {

    return (
        <Wrapper>
          <CardWrapper>
            <Header>
              <AvatarWrapper>
                <Avatar src="/images/avatar.png" />
                <Info>
                  <Writer>{props.data?.fetchBoard.writer}</Writer>
                  <CreatedAt>{props.data?.fetchBoard.createdAt}</CreatedAt>
                </Info>
              </AvatarWrapper>
            </Header>
            <Body>
              <Title>{props.data?.fetchBoard.title}</Title>
              <Contents>{props.data?.fetchBoard.contents}</Contents>
              
            </Body>
            <Image>사진넣으라</Image>
          </CardWrapper>
          <BottomWrapper>
            <Button>목록으로</Button>
            <Button>수정하기</Button>
            <Button>삭제하기</Button>
          </BottomWrapper>
        </Wrapper>
      );
    }
    