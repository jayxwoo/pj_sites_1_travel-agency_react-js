import { useEffect } from "react";

const Products = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="products">
            <h1>Product</h1>
        </div>
    );
}

export default Products;