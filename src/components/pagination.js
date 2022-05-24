import { Pagination } from 'react-bootstrap';
import { useState, useContext, useEffect } from "react";
import arrayContext from '../context/arrayContext';

function PaginationData() {
  const {data, setData,  tempArray, setTempArray } = useContext(arrayContext);
  var PaginationCount=0;
  let active ;

  if(tempArray.length%2 == 0){
    PaginationCount = tempArray.length/2;
   }
   else{
    PaginationCount=parseInt(tempArray.length/2)+1;
   }
   useEffect(() => {
    clickitem()
  }, []);

   function clickitem(number){
     console.log(number)
     active=number;
   }
  //  window.onload = function(){ 
  //  // document.getElementById("cl").onclick = function() {}; 
  //   document.getElementsByName("cl").addEventListener("click", function (){
  //     clickitem( document.getElementsByName("cl")[0].value);
  //   })};
 

  
  let items = [];
  for (let number = 1; number <= PaginationCount; number++) {
    items.push(
      <Pagination.Item name="cl" onClick={()=>clickitem(this.number)}   key={number} active={number === active}> 
        {number}
      </Pagination.Item>
    );
  }
  
  const paginationBasic = (
    <div class="pagination" >
      <Pagination >{items}</Pagination>
      <br />
    </div>
  );
  
return(paginationBasic);
}
export default PaginationData;