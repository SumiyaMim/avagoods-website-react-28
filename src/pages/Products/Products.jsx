/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductsCard from './ProductsCard';

const Products = () => {

    // const [products,setProducts] = useState([])

    // useEffect(()=>{
    //     fetch(`https://dummyjson.com/products`)
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data.products))
    // },[])

    const {products} = useLoaderData()
    // console.log(products);

  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 md:p-10'>
            {products?.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)}
        </div>    
    </div>
  )
}

export default Products
