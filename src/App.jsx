import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const addImage = () => {
    const newImage = prompt("Enter image URL:");
    if (newImage) {
      setImages([...images, newImage]);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <div className="w-1/2"></div>
      <div className="w-1/2 p-8 flex flex-col space-y-8">
        {/* Tab Widget */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-4 text-white">
          <div className="flex space-x-4 mb-4">
            {['about', 'experiences', 'recommended'].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`py-2 px-4 rounded-t-lg ${activeTab === tab ? 'bg-black' : 'bg-gray-700'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="overflow-y-auto h-32">
            {activeTab === 'about' && (
              <p>
                Hello! my name is Brajpal Singh, I'm  from mainpuri and recently completed my B.tech from 
                IIMT College of Engineering Meerut. 
                My strengths are I am self motivating person and I have strong communication skill also.

My short-term goal is to get a job in a reputed company and long term goal is to achieve a good position like your's. 
Where I can build my career and help the organization too.


              </p>
            )}
            {activeTab === 'experiences' && (
              <p>
                I have technical skills like Java,  Python, Html,css,javascript ,React.js and good knowledge of data structures and algorithms. 
                I’m eager to contribute to your team and further develop my skills in a professional environment. I look forward to discussing how my background and experiences can be an asset to your organization.

              </p>
              
            )}
            {activeTab === 'recommended' && (
              <p>
                Recommended items...
              </p>
            )}
          </div>
        </div>

        {/* Gallery Widget */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-4 text-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Gallery</h2>
            <button onClick={addImage} className="bg-gray-700 py-2 px-4 rounded">
              + Add Image
            </button>
          </div>
          <div className="flex space-x-4 overflow-x-auto">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index}`} className="w-32 h-32 object-cover rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
