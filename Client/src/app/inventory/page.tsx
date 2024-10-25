"use client"
import Header from '@/components/Header'
import { usegetProducts } from '@/lib/React-Query/QueriesandMutations'
import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
const columns: GridColDef[] = [
  {field : "productId", headerName : "ID", width : 90},
  {field : "name", headerName : "Product Name", width : 200},
  {field : "price", headerName : "Product price", width : 110, type : "number", valueGetter : (value, row) => `$${row.price}`},
  {field : "rating", headerName : "Product rating", width : 110, type : "number", valueGetter : (value, row) => row.rating ? row.rating : "N/A"},
  {field : "stockQuantity", headerName : "stockQuantity", width : 150, type : "number" },
];
const page = () => {

    const {data : products, isLoading,isError} = usegetProducts()
   

    if(isLoading){
      return <div className='py-4'>Loading.......</div>
    }

    if(isError || !products){
      return <div className=' text-center py-4'>Failed to fetch</div>
    }
  return (
    <div className='flex flex-col'>
      <Header name="Users"/>
      <DataGrid  columns={columns} rows={products} getRowId={(row) => row.productId} checkboxSelection className='bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700'/>
    </div>
  )
}

export default page