import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import { ProductItem } from '../components/ProductItem';



const Collection = () => {

  const {products,search,showSearch} = useContext(ShopContext);
  const [showFilter,setshowFilter] = useState(false);
  const [filteProducts,setfilteProducts]= useState([]);
  const [category,setcategory] = useState([]);
  const [subCategory,setsubCategory] = useState([]);
  const [sortType,setSortType] = useState('relavent');

  const toggleCategory = (e) =>{
    if(category.includes(e.target.value)){
      setcategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setcategory(prev => [...prev,e.target.value])
    }
  }

  const togglesubCategory = (e) =>{
    if(subCategory.includes(e.target.value)){
      setsubCategory(prev=> prev.filter(item => item !== e.target.value))
    }
    else{
      setsubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () =>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(category.length>0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    } 
    if(subCategory.length>0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    } 
    setfilteProducts(productsCopy)
  }
  const sortProduct = () =>{
    let fpCopy = filteProducts.slice();
    switch(sortType){
      case 'Low-to-high':
        setfilteProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
        break;
      case 'High-to-low':
        setfilteProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter option */}
      <div className='min-w-60'>
        <p onClick={()=>setshowFilter(!showFilter)}className='my-2 text-xl flex items-center cursor-pointer'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
            </p>
          </div>
        </div>
        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium '>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={togglesubCategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={togglesubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={togglesubCategory}/>Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'}/>
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)}className='border-2 border-gray-300 text-sm px-2'>
            <option value="Relavent">Sort by: Relavancy</option>
            <option value="Low-to-high">Sort by: High to low</option>
            <option value="High-to-low">Sort by: Low to High</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filteProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Collection