import React,{useState,useEffect} from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
const ProductDetail = () => {
  const param = useParams();
  console.log("param sau khi ấn vào sản phẩm là ",param)
  const {productId} = param; //lấy ra id từng sản phẩm 
  const [onlyProduct, setOnlyProduct] = useState(null)

  useEffect(()=>{
    fakeData();

  },[productId])
  //call APi sản phẩm khi click vào 
  const fakeData = async()=>{
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const store = await response.json();
    console.log(store)
    setOnlyProduct(store)
  }
  return (
    <div>
      {!onlyProduct && <div className="loading"><ReactLoading type={`spin`} color={`red`} height={667} width={375} /></div>}
       {onlyProduct &&<div className="warpIteam"  >
                <h4>{onlyProduct.title}</h4>
                <div className="onlyProductMid">
                    <img src={onlyProduct.image} alt="" />
                    <p>{onlyProduct.description}</p>
                </div> 
        </div>}
    </div>
  )
}

export default ProductDetail