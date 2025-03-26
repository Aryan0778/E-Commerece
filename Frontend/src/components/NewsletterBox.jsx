import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefautlt();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now and get 20%  off</p>
        <p className='text-gray-400 mt-3 '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod praesentium quos debitis velit voluptate illum obcaecati, impedit dicta voluptas. Quibusdam facilis debitis similique ratione labore id dolorem, quas facere omnis.
        </p>
        <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
            <button className='bg-black text-white text-xs px-20 py-6'type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox