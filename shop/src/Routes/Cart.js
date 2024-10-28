import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, addAge, addCount, decreaseCount } from '../store';

function Cart() {

  localStorage.setItem('데이터 이름','데이터'); //만들기
  localStorage.getItem('데이터이름');      //가져오기
  // localStorage.removeItem('데이터 이름');  //삭제

  localStorage.setItem('obj', JSON.stringify({name:'kim'}));
  console.log(localStorage)
  // let aaa = localStorage.getItem('obj')
  // console.log(aaa)
  // let b = JSON.parse(aaa)
  // console.log(b)

  let state = useSelector((state) => state)
  let dispatch = useDispatch()
  return (
    <div>
      {state.user.name}의 장바구니
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
        </tr>
        </thead>
        <tbody>
          {
            state.cart.map((a,i) => (
              <tr key={i}>
                <td>{i+1}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={() =>{
                    dispatch(changeName('jack'))
                    dispatch(addCount(i))
                  }}>+</button>
                </td>
                <td>
                <button onClick={() =>{
                    dispatch(decreaseCount(i))
                  }}>-</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
export default Cart;