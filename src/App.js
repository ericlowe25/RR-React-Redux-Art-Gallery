import './App.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import {fetchData, incrementId, decrementId, customId, clearData} from'./features/dataSlice'
import {useEffect} from 'react'

function App(props) {
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
  useEffect(() => {
    dispatch(fetchData())
}, [props.objectId, dispatch])


  return (
    <div className="App">
      <div>
        {/* <button onClick={() => dispatch(fetchData())}>Trigger Thunk</button> */}    
        <button onClick={() => dispatch(incrementId())}>Next</button>
        <button onClick={() => dispatch(decrementId())}>Back</button>
        <button onClick={() => dispatch(clearData())}>Clear</button>
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
const mapStateToProps = (state) => ({
  objectId: state.data.objectId
})

export default connect(mapStateToProps)(App)

