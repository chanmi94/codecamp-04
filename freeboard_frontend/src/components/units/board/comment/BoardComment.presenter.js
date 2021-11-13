import * as S from "./BoardComment.styles";

export default function BoardDetailUI(props) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoardComments.writer}</S.Writer>
              <S.CreatedAt>
                {props.data?.fetchBoardComments.createdAt}
              </S.CreatedAt>
            </S.Info>
          </S.AvatarWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoardComments.title}</S.Title>
          <S.Contents>{props.data?.fetchBoardComments.contents}</S.Contents>
        </S.Body>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToUpdate}>수정하기</S.Button>
        <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
      </S.BottomWrapper>
      <hr></hr>
      <div>댓글</div>
      <S.WriterWrapper>
        <S.InputWrapper>
          <S.CommentWriter
            type="text"
            placeholder="작성자"
            onChange={props.onChangeMyWriter}
            // defaultValue={props.data?.fetchBoard.writer}
          />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Password
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeMyPassword}
          />
        </S.InputWrapper>
      </S.WriterWrapper>
      <S.InputWrapper>
        <S.CommentContents
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeMyContents}
          // defaultValue={props.data?.fetchBoard.contents}
        />
      </S.InputWrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
          // disabled={props.isEdit ? false : !props.isActive}
          // isActive={props.isEdit ? true : !props.isActive}
        >
          // {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
