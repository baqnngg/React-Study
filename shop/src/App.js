import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import data from './Routes/data.js'
import Detail from './Routes/Detail.js';
import Cart from './Routes/Cart.js';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data)
  let [재고, 재고변경] = useState([10,11,12]);
  let navigate = useNavigate();

  // 누가 Detail 페이지에 접속하면
  // 그 페이지에 보이는 상품 id를 가져와서
  // localStorage에 watched 항목에 추가

  // useEffect(() => {
  //   localStorage.setItem("watched", JSON.stringify([]))
  // }, [])

  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);
  
  return (  
    <div className="Main">
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>HOME</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/0')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((결과) =>{
                let copy = [...shoes,...결과.data]
                setShoes(copy)
                console.log(copy)
              }).catch(() => {console.log("가져오기 실패")});
            }}>가져오기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <WatchedItem></WatchedItem>
      
      <Routes>
        <Route path='/' element={
          <>
          <div className='main-bg'></div>
          <div className='container'>
            <div className='row'>
              {shoes.map((a,i) => {
                return (<Card shoes={shoes[i]} i={i} key={i}></Card>)
              })}
            </div>
          </div>
          </>
        }></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}></Route>
        <Route path='*' element={<div>없는 페이지입니다<p></p>404</div>}></Route>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버</div>}></Route>
          <Route path='location' element={<About/>}></Route>
        </Route>
        <Route path='/event' element={<EventPage></EventPage>}>
        <Route path='one' element={<p>첫 주문시 신발 1+1 이벤트</p>}></Route>
        <Route path='two' element={<p>생일 기념 쿠폰 발급받기</p>}></Route>
        </Route>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  );
}

function About (){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function EventPage(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return (
    <div className='col-md-4'>
        <img src={process.env.PUBLIC_URL + '/shoe'+props.i+'.png'} width="70%"></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
    </div>
  )
}

function WatchedItem() {
  let [watchedItems, setwatchedItems] = useState([]);

  useEffect(() => {
    let watched = JSON.parse(localStorage.getItem('watched')) || [];   // || [] 추가 된
    setwatchedItems(watched);
  }, []);

  return (
    <div>
      <h4>최근 본 항목</h4>
      <ul>
        {watchedItems.map((id, index) => (
          <li key={index}>상품 ID : {id}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;