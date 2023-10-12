import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductService from './ProductService';
import { Pagination } from '@mui/lab';
import './Curd.css'
import axios from 'axios';
const Home=()=> {
  const nav=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 5;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [products, setProducts] = useState([])
  useEffect(() => {
      getAllProducts();
  }, [currentPage,sortBy,sortOrder])

  const getAllProducts = () => {
      axios.get(`http://localhost:8080/products/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const{content,totalPages}=response.data;   
      setProducts(response.data)
      setTotalPages(totalPages);
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteProduct = (employeeId) => {
    if(window.confirm("Sure to Delete?")){
     ProductService.deleteProduct(employeeId).then((response) =>{
      getAllProducts();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllProduct = () => {
    if(window.confirm("Sure to Delete All details?")){
     ProductService.deleteAllProduct().then((response) =>{
      getAllProducts();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const LogoutHandler=()=>{
    if(window.confirm("Sure to Logout?")){
      nav("/admin")
    }
  }
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    
    <div id="container">
            <h1>Donating Hands</h1>
    <Link to="/add"><button id="addbtn">Add Project Details</button></Link>
    <button id="delbtn" onClick={deleteAllProduct} >Delete All Details</button>
  
    <table id="table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>Id {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th  onClick={() => handleSort('name')}>Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  
                  <th>Project Name</th>
                  <th>Location</th>
                  <th  onClick={() => handleSort('amount')}>Amount {sortBy === 'amount' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                products.content&&products.content.map(
                    (product) => (
      <tr key={product.id}>
             <th id="id"> {product.id}</th>
             <th id="name"> {product.name}</th>
             
             <th id="phone"> {product.pname}</th>
             <th id="pos"> {product.location}</th>
             <th id="salary"> {product.amount}</th>
             <th id="action"><Link  to={`/update/${product.id}`}><button id="actions">Update</button></Link> 
             <button id="action-del"  onClick = {() => deleteProduct(product.id)}
            > Delete!</button></th>
            
      </tr>
    ))}
              </tbody>
            </table>
            <Pagination className='page'
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
    <button id="logout" onClick={LogoutHandler}>Logout</button>
        
    </div>
  )
}

export default Home