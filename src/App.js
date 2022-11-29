
import './App.css';
import { useState } from "react";
import ShoeData from "./shoeitems.json";
import ShoeItem from "./shoes.js";


function App() {

  const [cartItems,setCartItems] = useState([])
  const [sortedList, setSortedList] = useState(ShoeData)
  const [displayData,setDisplay] = useState(ShoeData)
  //const [models, setModellist] = useState([])
  const [totalData,setTotal] = useState(ShoeData)
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("")

  function addToCart (item) {
    setCartItems([...cartItems,item])
  }

  function changeDisplay (item){
   // setFilter(item)
    var filtered_list = []
    var curlist = []
    
    if (item == "jordan 1"){
      curlist = totalData.filter(item => item.model.toLocaleLowerCase() === "jordan 1")
      console.log("yo")
    }
    else if (item === "jordan 11"){
      curlist = totalData.filter(item => item.model.toLocaleLowerCase() === "jordan 11")
    }
    else{
      curlist = totalData
    }
    setDisplay(curlist)
    setSortedList(curlist)
  //   var newModels = models
  //   if (models.includes(item)){
  //     console.log("here")
  //     const index = newModels.indexOf(item)
  //     newModels.splice(index,1)
  //   }
  //   else{
  //     newModels.push(item)
  //  }
  
  //  //models = ["jordan 1","jordan 11"]
   
  //  var filtered_list = []
  //  if (newModels.length === 0){
  //   filtered_list = [...sortedList]
  //  }
  //  else{
  //   for (let i = 0; i < newModels.length; i++){
  //     var curlist = sortedList.filter(item => item.model === newModels[i])  
  //     filtered_list = curlist.concat(filtered_list)
  //    }
  //  }
  //  if (sort == "price") {
  //   filtered_list.sort((a,b) => a.price - b.price)
  //  }
  //   setModellist(newModels)
  //   setDisplay(filtered_list)
  }

  function sortbyPrice(){
    // let updatedDisplay = [...displayData];
    // updatedDisplay.sort((a,b) => a.price - b.price)
    // setDisplay(updatedDisplay)
    // setSort("price")
    let updatedDisplay = [...sortedList];
    updatedDisplay.sort((a,b) => a.price - b.price)
    changeDisplay(updatedDisplay)
    //setSortedList(updatedDisplay)
   // setSort("price")
   // 
  }

  function sortbyYear(){
    let updatedDisplay = [...displayData];
    updatedDisplay.sort((a,b) => a.year - b.year)
  }

  function resetSort() {
    setSortedList(totalData)
    setSort("")
    changeDisplay(filter)
  }
     
  function calculateTotal () {
    let total = 0
    for (let i = 0; i < cartItems.length; i++){
      total += cartItems[i].price
    }
    return total
  }

  // {ShoeData.map((item,index) => (<ShoeItem item = {item} addToCart= {addToCart}/>))}
//   {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
//   <BakeryItem item={item} addToCart={addToCart}/>// replace with BakeryItem component
// ))}
  return (
    <div className="App">
        <div className='App-header'>
        <h1>
        Welcome to Orlando's Shoe Store
        </h1>
        <h2>Cart Total Price: ${calculateTotal()} x {cartItems.length}</h2>
        {/* <button onClick={() => changeDisplay()}>Filter</button> */}
        <div display="flex" flex-direction="row" margin="1%">
        <input type="radio" name= 'Shoe Model' onClick={() => changeDisplay("jordan 1")} />
        <label>Jordan 1</label>
        <input type="radio" name='Shoe Model' onClick={() => changeDisplay("jordan 11")} />
        <label>Jordan 11</label>
        <input type="radio" name='Shoe Model' onClick={() => changeDisplay("")} />
        <label>None</label>
        <button onClick={() => sortbyPrice()}>Sort by Price</button>
        <button onClick={() => resetSort()}>Reset Sort</button>
        </div>
        </div>
       <div className='shoe-container'>
       {displayData.map((item,index) => (<ShoeItem item = {item} addToCart= {addToCart}/>))}
       </div>
        
        {/* {cartItems.map((item,index) => (<p>{item.name}</p>))} */}
    </div>
  );
}

export default App;
