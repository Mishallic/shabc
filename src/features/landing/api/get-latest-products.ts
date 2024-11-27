import { queryOptions, useQuery } from '@tanstack/react-query';

import { api, attachCookie } from "@/lib/api-client";
import { QueryConfig } from '@/lib/react-query';
import { Product } from '@/types/api';


export const getLatestProducts = (
    page = 1
): Promise<Response> => {
    return fetch(`/api/products`)
}


export const getLatestProductsQueryOptions = ({
    page,
}: { page?: number } = {}) => {
    return queryOptions({
        queryKey: page ? ['products', { page }] : ['products'],
        queryFn: () => getLatestProducts(page),
    });
};

type UseLatestProductsOptions = {
    page?: number;
    queryConfig?: QueryConfig<typeof getLatestProductsQueryOptions>;
};

export const useLatestProducts = ({
    queryConfig,
    page,
}: UseLatestProductsOptions) => {
    return useQuery({
        ...getLatestProductsQueryOptions({ page }),
        ...queryConfig,
    });
};