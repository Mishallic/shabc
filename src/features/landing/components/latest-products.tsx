import { useSearchParams } from "next/navigation";
import { useLatestProducts } from "../api/get-latest-products";
import { useQueryClient } from "@tanstack/react-query";

export const LatestProducts = () => {
    const [searchParams] = useSearchParams();

    const latestProductsQuery = useLatestProducts({
        page: +(1),
    });
    const queryClient = useQueryClient();
    if (latestProductsQuery.isLoading) {
        return (
            <div className="flex h-48 w-full items-center justify-center">
                loading......
            </div>
        );
    }

    const products = latestProductsQuery.data?.data;
    const meta = latestProductsQuery.data?.meta;
    if (!products) return null;

    console.log(products);
    
    return (
        <div>
            PRODUCTS!
        </div>
    )
}
