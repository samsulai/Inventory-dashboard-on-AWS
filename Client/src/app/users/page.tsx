"use client"
import Header from '@/components/Header'
import { usegetUsers } from '@/lib/React-Query/QueriesandMutations'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React from 'react'
const columns: GridColDef[] = [
    {field : "userId", headerName : "ID", width : 90},
    {field : "name", headerName : "Name", width : 200},
    {field : "email", headerName : "Email", width : 110},
   
  ];
const page = () => {
    const{data : users, isLoading, isError} = usegetUsers()
    if(isLoading){
        return <div className='py-4'>Loading.......</div>
      }
  
      if(isError || !users){
        return <div className=' text-center py-4'>Failed to fetch</div>
      }
    
  return (
   
        <div className='flex flex-col'>
          <Header name="Inventory"/>
          <DataGrid  columns={columns} rows={users} getRowId={(row) => row.userId} checkboxSelection className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'/>
        </div>
  )
}

export default page