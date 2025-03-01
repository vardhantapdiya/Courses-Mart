import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { apiUrl, filterData } from './data.js'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const[category,setCategory] = useState(filterData[0].title)

  async function fetchData() {
    setLoading(true);
    try {
      let resp = await fetch(apiUrl);
      let output = await resp.json();

      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <Navbar />
      </div>

      <div className='bg-blue-900'>
        <div>
          <Filter filterData={filterData} category = {category}
          setCategory = {setCategory}/>
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto flex 
      flex-wrap justify-center items-center min-h-[100vh]'>
          {
          loading ? (<Spinner />) : (<Cards courses={courses} category = {category}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default App
