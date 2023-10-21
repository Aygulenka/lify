import LifecycleComponent from './LifecycleComponent'
import FuncLifecycleComponent from './FuncLifecycleComponent'
import React, { useState } from 'react'

function App() {
  const [visibleFuncLifecycleComponent, setFuncLifecycleComponent] = useState(true)
  const handleVis = () => {
    setFuncLifecycleComponent((visibleFuncLifecycleComponent) => !visibleFuncLifecycleComponent)
  }
  return (
    <div className="App">
      {visibleFuncLifecycleComponent && <LifecycleComponent />}

      {/* {visibleFuncLifecycleComponent && <FuncLifecycleComponent/>} */}
      <button onClick={handleVis}>показать/скрыть</button>
    </div>
  );
}

export default App;
