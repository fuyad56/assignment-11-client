import React from 'react';
import Fan from "../../../image/header 1.jpg"

const Header = () => {
    return (
        <main className='desktop:mt-[100px] laptop:mt-[80px] phone:mt-[60px] tablet:mt-[-70px] mx-[200px] desktop:mx-[180px] laptop:mx-[120px] tablet:mx-[80px] phone:mx-[30px] mb-10'>
            <div className='desktop:flex laptop:flex justify-between items-center tablet:grid phone:grid grid-rows-2'>
                <div className='desktop:w-[600px] laptop:w-[400px]'>
                    <h3 className='desktop:text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl font-medium leading-[3.5rem] mb-2'>Welcome to</h3>
                    <h1 className='text-[#183D3D] desktop:text-5xl laptop:text-4xl tablet:text-3xl phone:text-2xl mb-6' style={{ fontFamily: "Croissant One" }}>TSC Electronics</h1>
                    <p className='text-md font-medium mb-8 w-auto mr-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus deserunt voluptate numquam iusto, quo dicta ipsam quaerat suscipit cupiditate error cumque laboriosam minima molestiae perferendis architecto aliquid perspiciatis unde optio maiores. Cupiditate nisi unde iusto similique. Facere rem quos ex autem et porro esse, dolorem perferendis. Nam, assumenda officia. Quo.</p>
                    <button className='border-2 border-[#183D3D] text-lg font-semibold text-slate-800 py-1 px-4 rounded hover:rounded-full hover:bg-[#183D3D] hover:text-slate-200'>Buy Now</button>
                </div>
                <div className='tablet:mt-[-47px] desktop:m-0'>
                    <img src={Fan} alt="" className='desktop:h-[600px] laptop:h-[400px] rounded-3xl shadow-xl' />
                </div>
            </div>
        </main>
    );
};

export default Header;