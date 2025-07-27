import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'load' | 'generate'>('load');

  const openOptionsPage = () => {
    chrome.runtime.openOptionsPage();
  };

  return (
    <div className="w-[320px] min-h-[280px] p-4 bg-gray-900 text-white font-sans">
      {/* Brand Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="Vextro Logo" className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Vextro</h1>
        </div>
        <button
          onClick={openOptionsPage}
          className="text-sm text-blue-400 hover:underline"
        >
          Options
        </button>
      </div>

      {/* Tab Buttons */}
      <div className="flex justify-around mb-4">
        <button
          className={`px-4 py-1 rounded-md ${
            activeTab === 'load' ? 'bg-blue-500' : 'bg-gray-700'
          }`}
          onClick={() => setActiveTab('load')}
        >
          Load Config
        </button>
        <button
          className={`px-4 py-1 rounded-md ${
            activeTab === 'generate' ? 'bg-blue-500' : 'bg-gray-700'
          }`}
          onClick={() => setActiveTab('generate')}
        >
          Generate
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-gray-800 p-3 rounded-md">
        {activeTab === 'load' ? (
          <div>
            <label className="block text-sm mb-2">Select Config</label>
            <select className="w-full p-2 bg-gray-700 rounded text-white">
              <option>Default</option>
              <option>Custom 1</option>
            </select>
          </div>
        ) : (
          <div>
            <label className="block text-sm mb-2">Generate New Config</label>
            <input
              type="text"
              placeholder="Enter key name"
              className="w-full p-2 bg-gray-700 rounded text-white"
            />
            <button className="mt-3 w-full bg-green-600 hover:bg-green-700 py-2 rounded">
              Generate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
