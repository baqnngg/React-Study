import { useParams } from "react-router-dom";
import styled from "styled-components";

let Box = styled.div`
    padding : 20px;
    color : grey;    
`;

let YellowBtn = styled.button`
    background : ${props => props.bg};
    color : black;
    padding : 10px;
`;

function Detail (props) {
    let {id} = useParams();
    let myItem = props.shoes.find((x)=> x.id==id);
    // let myItem = props.shoes.find(function(x){
    //     return x.id == id;
    // });

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src="/shoe1.png" width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                <div>
                    <Box>
                        <YellowBtn bg='orange'>오렌지 버튼</YellowBtn>
                        <YellowBtn bg='blue'>파란 버튼</YellowBtn>
                    </Box>
                </div>
            </div>
        </div>
    )
}
export default Detail;