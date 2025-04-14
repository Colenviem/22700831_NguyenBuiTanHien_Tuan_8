import React, {useState,useEffect} from "react";
import data from "../data/pick.json";

const EditorsPick = () => {
    const [picks, setPicks] = useState([]);

    useEffect(() => {
        setPicks(data);
    }, []);

    return (
        <div className="bg-white py-12">
            <h2 className="text-3xl font-bold mb-4 text-[#F44B87FF] text-center">Editor's pick</h2>
            <p className="text-gray-600 mb-8 text-center">Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
                {picks.map((pick) => (
                    <div key={pick.id} className="rounded-lg overflow-hidden shadow-md bg-gray-50 flex flex-col md:flex-row">
                        <img src={pick.image} alt={pick.title} className="w-full md:w-1/2 h-48 object-cover" />
                        <div className="p-4 flex flex-col justify-between">
                            <div>
                              <div className='flex justify-between'>
                              <h3 className="text-lg font-semibold text-gray-900">{pick.title}</h3>
                              <img src="./images/Icon.png" alt="" />
                              </div>
                                <p className="text-sm text-gray-500 mb-2">{pick.time}</p>
                                <div className='flex items-center py-2'> 
                                    <img src="./images/avatar.png" alt="" className="w-12 h-12 rounded-full mr-2" /> 
                                    <p className="text-xs font-italic text-gray-600 mb-2">By {pick.author}</p>
                                </div>
                                <p className="text-gray-700">{pick.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EditorsPick
