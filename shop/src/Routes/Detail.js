import { useState } from "react";

function Detail () {
    let [shoes] = useState();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src="/shoe1.png" width="100%"></img>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">상품명</h4>
                    <p>상품설명</p>
                    <p>120000원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}
export default Detail;