
import {Row, Column} from "./Boardlist.styles"


export default function BoardListUI(props){

// const Row=styled.div`
//     display: flex;
//     flex-direction: row; //:default 값

// `
// const Column =styled.div`
//     width: 20%;
// `
    return(
        <div> 
           {props.data?.fetchBoards.map((el,index)=>(
               <Row key={el.number}>
                   <Column> <input type="checkbox"/></Column>
                   <Column>{index+1}</Column>
                   <Column>{el.writer}</Column>
                   <Column>{el.title}</Column>
                   <Column>{el.createdAt}</Column>
                   {/* <span>
                       <button id={el.number}onClick={onClickDelete}>삭제하기</button>
                   </span> */}
               </Row>
               
           ))}  
        </div>
       
        
    )
}