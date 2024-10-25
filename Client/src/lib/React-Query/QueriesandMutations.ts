
import { QUERY_KEYS } from "./QueryKeys"
import { getDashBoardMetrics } from "../api/getDashboardMetrics"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { IDashboardMetrics, Product, User } from "@/types"
import { getProducts } from "../api/getProducts"
import {  createProduct} from "../api/createProducts"
import { getUsers } from "../api/getUsers"



export const usegetDashBoardMetrics = () => {
    return useQuery<IDashboardMetrics>({
        queryKey : [QUERY_KEYS.GET_DASHBOARD_METRICS],
        queryFn : getDashBoardMetrics
    })
}

export const usegetProducts = (search?: string) => {
    return useQuery<Product[]>({
        queryKey: [QUERY_KEYS.GET_PRODUCTS, search], 
        queryFn: () => getProducts(search)
        
    });
};

export const usegetUsers = () => {
    return useQuery<User[]>({
        queryKey : [QUERY_KEYS.GET_USERS],
        queryFn : () => getUsers()
    })
}

export const useCreateProducts = () => {
    const queryClient = useQueryClient()
    return useMutation<Product, Error, Product>({
        mutationFn : (productData) => createProduct(productData),
        onSuccess : () => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.GET_PRODUCTS],
              });
        },
        onError: (error) => {
            console.log('Error creating product:', error);
           
        },
    })
}

