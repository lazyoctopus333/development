
import './App.css';
import { useState } from "react";
import ShoeData from "./shoeitems.json";
import ShoeItem from "./shoes.js";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [cartItems,setCartItems] = useState([])
  const [sortedList, setSortedList] = useState(ShoeData)
  const [displayList, setDisplayList] = useState(ShoeData)
  const [totalData,setTotal] = useState(ShoeData)
  const [sort, setSort] = useState("")
  const [filt, setFilter] = useState("")
  const [yearfilt,setYearFilt] = useState("")


  function addToCart (item) {
    setCartItems([...cartItems,item])
  }

  function chooseModel (item){
    var curlist = []
    
    if (item === "jordan 1"){
      curlist = sortedList.filter(item => item.model.toLocaleLowerCase() === "jordan 1")
    }
    else if (item === "jordan 11"){
      curlist = sortedList.filter(item => item.model.toLocaleLowerCase() === "jordan 11")
    }
    else{
      curlist = sortedList
    }
    
    setDisplayList(curlist)
    setFilter(item)
  }

  function chooseYear (item){
    var curlist = []
    if (item == "> 2020"){
      curlist = sortedList.filter(item=> item.year > 2020)
    }
    else if (item === "< 2020"){
      curlist = sortedList.filter(item => item.year < 2020)
    }
    else{
      curlist = sortedList
    }

    setDisplayList(curlist)
    setYearFilt(item)
  }
  
  function sortbyPrice(){
    setSort("price")
    let final_array = [...totalData]
    
    final_array.sort((a,b) => a.price - b.price)
    
    setSortedList(final_array)
    chooseModel(filt)
    setSortedList(final_array)
    chooseModel(filt)
  }
  function removeFromCart(item){ 
    setCartItems(cartItems.filter(cartItem => cartItem !== item))
  }

  function resetSort(){
    let new_list = [...totalData]
    setSortedList(new_list)
    chooseModel(filt)
    setSortedList(new_list)
    chooseModel(filt)
   }
     
  function calculateTotal () {
    let total = 0
    for (let i = 0; i < cartItems.length; i++){
      total += cartItems[i].price
    }
    return total
  }

  return (
    <div className="App">
        <div className='container'>
        <h1>
        Welcome to Orlando's Shoe Store
        </h1>
        <h3>Cart Total Price: ${calculateTotal()} x {cartItems.length}: </h3>
        {cartItems.map((item,index) => (<p>{item.name}</p>))}
        <nav className='navbar navbar-light bg-light'>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Choose By Model
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <input type="radio" name= 'Shoe Model' onClick={() => chooseModel("jordan 1")} />
          <label>Jordan 1</label>
          <br></br>
          <input type="radio" name='Shoe Model' onClick={() => chooseModel("jordan 11")} />
          <label>Jordan 11</label>
          <br></br>
          <input type="radio" name='Shoe Model' onClick={() => chooseModel("")} defaultChecked/>
          <label>None</label>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Choose By Year
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <input type="radio" name= 'Shoe Year' onClick={() => chooseYear("< 2020")} />
          <label> Before 2020</label>
          <br></br>
          <input type="radio" name='Shoe Year' onClick={() => chooseYear("> 2020")} />
          <label>After 2020</label>
          <br></br>
          <input type="radio" name='Shoe Year' onClick={() => chooseYear("")} defaultChecked/>
          <label>None</label>
        </div>
      </li>
          <button onClick={() => {sortbyPrice(); sortbyPrice()}}>Sort by Price</button>
          <button onClick={() => {resetSort(); resetSort()}}>Reset Sort</button>
        </nav>
        </div>
       <div className='container' >
        {displayList.map((item,index) => (<div className='row'> <ShoeItem item = {item} addToCart= {addToCart} removeFromCart= {removeFromCart}/></div>))}
       </div>
    </div>
  );
}

export default App;
