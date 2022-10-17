import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axiosInstance';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import UserList from '../../components/User/UserList';


const ListUsers = () => {
  const [ data,setData ] = useState()
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect( () => {
    setIsLoading( true );
    axios.get( '/' )
      .then( res => {
        setData( res.data );
      } ).catch( err => {
        console.log( err );
      } ).finally( () => {
        setIsLoading(false)
      })
  }, [])
  
  
  return (
    <div>
      { isLoading && <LoadingSpinner /> }
      <UserList users={data} />
    </div>
  )
}

export default ListUsers