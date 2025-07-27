// src/options/App.tsx
import { useState } from 'react';

export default function App() {
  const [configName, setConfigName] = useState('');
  const [configs, setConfigs] = useState<string[]>(['Default']);

  const addConfig = () => {
    if (configName.trim()) {
      setConfigs([...configs, configName.trim()]);
      setConfigName('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <h1 className="text-2xl font-bold mb-4">Vextro Extension Options</h1>

      <div className="mb-6">
        <label className="block mb-1 font-medium">New Config Name:</label>
        <input
          type="text"
          value={configName}
          onChange={(e) => setConfigName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="e.g., MyCustomConfig"
        />
        <button
          onClick={addConfig}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Config
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Available Configs:</h2>
        <ul className="bg-white rounded shadow p-4 space-y-2">
          {configs.map((cfg, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span>{cfg}</span>
              <button className="text-sm text-red-600 hover:underline">Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}