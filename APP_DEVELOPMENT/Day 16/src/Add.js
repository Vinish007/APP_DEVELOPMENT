import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProductService from './ProductService';
import './Add.css'
const AddOrUpdate=()=> {
    const nav=useNavigate();
  const[amount,setamount]=useState('');
  const[name,setname]=useState('');
  const[pname,setpname]=useState('');
  const[location,setlocation]=useState('');
  const {id} = useParams();
    const saveOrUpdateProduct = (e) => {
      e.preventDefault();
      if(amount.length==0||location.length==0||name.length==0||pname.length==0){
        alert("Enter All fields")
      }
      else{
      if (window.confirm("Confirm Details!") == true) {
        e.preventDefault();
          const product = {id, name,pname,amount,location}
          if(id){
              ProductService.updateProduct(id, product).then((response) => {
                  nav('/crud')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
              ProductService.createProduct(product).then((response) =>{
                  console.log(response.data)
                  nav('/crud');
              }).catch(error => {
                  console.log(error)
              })
          }
        }
      }
    } 
  
      useEffect(() => {
          ProductService.getProductById(id).then((response) =>{
              setname(response.data.name)
              setpname(response.data.pname)
              setamount(response.data.amount)
              setlocation(response.data.location)
          }).catch(error => {
              console.log(error)
          })
      }, [])
      const title = () => {

        if(id){
            return <h1>Update Details</h1>
        }else{
            return <h1>Add Details</h1>
        }
    }
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        {title()}
        <p>Enter Product Details</p>
      </div>
      <form>
        <div className="input">
          <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Project Name" value={pname}  pattern="[0-9]+"
                   maxLength="10"  onChange={(e)=>setpname(e.target.value)} />
        </div>

        <div className="input">
          <input type="text" placeholder="Location" value={location} onChange={(e)=>setlocation(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Amount" value={amount} pattern="[0-9]+"   onChange={(e)=>setamount(e.target.value)} />
        </div>
        
        <input onClick={saveOrUpdateProduct} className="e-signup-btn" type="submit" value="Submit" />
      <Link to="/crud">  <button className="e-cancel-btn" >Cancel </button></Link>
        </form>
    </div>
  </div>
    </div>
  )
}

export default AddOrUpdate