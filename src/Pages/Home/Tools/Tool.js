import React from 'react';
import { useNavigate } from 'react-router-dom';


const Tool = ({tool}) => {
    const {_id, name, img, description, price} = tool;
    const navigate = useNavigate();

    const navigateToPurchase = id =>{
        navigate(`/tool/${id}`);
      }
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={tool.img} alt="Shoes" className="rounded-xl w-3/4" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{tool.name}</h2>
          <p>minimum order quantity: {tool.orderQuantity}</p>
          <p>available quantity: {tool.availableQuantity}</p>
          <h4>price: $ {tool.price}</h4>
          <h4>description: {tool.description}</h4>
          <div className="card-actions">
            <button onClick={() => navigateToPurchase(_id)} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default Tool;