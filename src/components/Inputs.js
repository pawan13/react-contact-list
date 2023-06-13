import React, { useEffect, useState } from 'react'
import { fetchData } from '../Helper/axiosHelper';
import Cards from './Cards';

const Inputs = () => {
    const [userList, setUserList] = useState([])
    const [path, setPath] = useState('')
    useEffect(() => {
        async function fetchDataAsync() {
          // You can await here
          const data = await fetchData(path);
           setUserList(data.results)
          // ...
        }
        fetchDataAsync();
      }, [path]);

    const handleOnChange= (e)=>{
         const gender = e.target.value
         setPath(gender)   
    }

    const handleSearch = (e) =>{
        const {value} = e.target;
        let filteredUsers = userList.filter((item) =>{
            const fullName = (item.name.first + " "+ item.name.last).toLowerCase();
            return fullName.includes(value.toLowerCase())  
         }

         )
        setUserList(filteredUsers)
        }
    
  return (
    <div className="row">
        <div className="col">
          <input
            onKeyUp ={handleSearch}
            type="text"
            placeholder="Search by name..."
            className="form-control"
            id="search-input"
          />
        </div>

        <div className="col">
          <select id="select" className="form-control" onChange={handleOnChange}>
            <option value="" className="text-center">-- Select Gender --</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
          {/* <!-- Contact Cards --> */}
      <Cards  userList={userList}/>
      </div>
  )
}

export default Inputs