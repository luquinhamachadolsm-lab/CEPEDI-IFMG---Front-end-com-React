import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
function Products() {
    return (
      <div>
        <h1>Products Page</h1>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/car">Cars</Link> |{" "}
          <Link to="/bike">Bikes</Link>
        </nav> 
        <Outlet /> 
      </div>
    );
  }
  
  export default Products