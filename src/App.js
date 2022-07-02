import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import {fetchData, incrementId, decrementId, customId, clearData} from'./features/dataSlice'

function App() {
  // your logic goes here!
  const dispatch = useDispatch()
  const data = useSelector((state)=> state.data)
 const renderImg=()=>{
    if(data.apiData){
      return<img style={{width:'100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title}></img>
    }else{
      return <p>image here</p>
    }
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
      </div>
      <input value={data.objectId} onChange={(e) => {dispatch(customId(Number(e.target.value))) }} />
      <div>
        {/* Once you have plugged everything in, render the image here! */}
        {data.objectId}
        {renderImg()}
      </div>
    </div>
  );
}

export default App;
