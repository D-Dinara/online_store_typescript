import { useState } from 'react'
import {IProduct} from '../models'

interface ProductProps {
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false)

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className='w-1/6' alt={product.title} />
      <p>{product.title}</p>
      <p className='font-bold'>{product.price}</p>
      {details && <p>{product.description}</p>}
      <button 
      onClick={() => setDetails(true)}
      className='py-2 px-4 border bg-yellow-400'
      >
        Show Details
      </button>
    </div>
  )
}

export default Product;