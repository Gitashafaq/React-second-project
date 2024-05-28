
import './App.css';
import Card from './components/Card';
import posts from './components/db/post';

function loadData(v){
  return(
    
    <div className='col-md-4'>
    <Card img={v.img} Name={v.Name}age={v.age} City={v.City} />
    </div>
  );
}


function App() {
  return (
  
    
    <div className='container my-5'>
      <div className="row" style={{gap:"30px 0px"}}>

      {posts.map(loadData)}



      </div>
    </div>
  )
}
export default App;
