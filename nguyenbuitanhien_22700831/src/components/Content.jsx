import React, {useEffect, useState} from 'react';
import data from '../data/data.json';

const Content = () => {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        setCakes(data);
    }, []);

    return (
        <div className="bg-white p-30 ">
            <h2 className="text-3xl font-bold mb-4 text-[#F44B87FF] text-center">This Summer Recipes</h2>
            <p className="text-gray-600 mb-8 text-center">We have all your Independence Day sweets covered.</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {cakes.slice(0, 4).map((cake) => (
                    <div key={cake.id} className="rounded-lg overflow-hidden shadow-md">
                        <img src={cake.image} alt={cake.title} className="w-full h-48 object-cover" />
                        <div className="p-8">
                           <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold text-gray-900">{cake.title}</h3>
                            <button type='button' className='hover:cursor-pointer'>
                                    <img src="./images/Icon.png" alt="" />
                            </button>
                           </div>
                           <br />
                           <p className="text-sm text-[#F44B87FF] p-2 w-25 bg-[#FEF0F5FF] rounded-lg">{cake.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl font-bold mb-4 text-[#F44B87FF] text-center">Recipes With Videos</h2>
            <p className="text-gray-600 mb-8 text-center">Cooking Up Culinary Creations with Step-by-Step Videos</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {cakes.slice(4, 8).map((cake) => (
                    <div key={cake.id} className="rounded-lg overflow-hidden shadow-md">
                        <img src={cake.image} alt={cake.title} className="w-full h-48 object-cover" />
                        <div className="p-8">
                            <div className='flex justify-between'>
                            <h3 className="text-lg font-semibold text-gray-900">{cake.title}</h3>
                            <button type='button' className='hover:cursor-pointer'>
                                <img src="./images/Icon.png" alt="" />
                            </button>
                            </div>
                            <br />
                            <p className="text-sm text-[#F44B87FF] p-2 w-25 bg-[#FEF0F5FF] rounded-lg">{cake.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;