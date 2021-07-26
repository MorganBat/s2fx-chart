import './App.css';
import { XAxis, YAxis, LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts'

function App() {
  return (
    <div className="App">
      <ResponsiveContainer width="100vw" height="100vh">
        <LineChart>
          <XAxis />
          <YAxis />
          <Line />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
