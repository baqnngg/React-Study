import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

// let Box = styled.div`
//     padding : 20px;
//     color : grey;    
// `;

// let YellowBtn = styled.button`
//     background : ${props => props.bg};
//     color : black;
//     padding : 10px;
// `;

function Detail (props) {
    // useEffect(() => {
    //     console.log("안녕안녕");
    // });

    // let [count, setCount] = useState(0);

    // let [alert, setAlert] = useState(true)
    // useEffect(() => {
    //     let timer = setTimeout(() => {setAlert(false)},2000)
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [] )

    let {id} = useParams();
    let myItem = props.shoes.find((x)=> x.id==id);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={`/shoe${id}.png`} width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                {/* <div>
                    <Box>
                        <YellowBtn bg='orange' onClick={() => {setCount(count+1)}}>오렌지 버튼</YellowBtn>
                        <YellowBtn bg='blue'>파란 버튼</YellowBtn>
                        {alert == true ? <YellowBtn>2초후에 사라짐</YellowBtn> : null}
                    </Box>
                </div> */}
                <div>
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="link0">버튼 0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link1">버튼 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link2">버튼 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div>내용 0</div>
                    <div>내용 1</div>
                    <div>내용 2</div>
                </div>
            </div>
        </div>
    )
}
export default Detail;