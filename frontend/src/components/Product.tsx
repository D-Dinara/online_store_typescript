import { useState } from 'react'
import {IProduct} from '../models'

interface ProductProps {
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  return (
    <div className="border py-2 px-4 rounded flex flex-col mb-2 justify-between">
      <div>
        <img src={product.image} className='w-32 h-32' alt={product.title} />
        <p>{product.title}</p>
        <p className='font-bold'>${product.price}</p>
        {details && 
          <div>
            <p>{product.description}</p>
            <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
          </div>
        }
      </div>
      <button 
      onClick={() => setDetails(prev => !prev)}
      className={btnClasses.join(' ')}
      >
       { details ? 'Hide details' : 'Show Details' } 
      </button>
    </div>
  )
}

export default Product;