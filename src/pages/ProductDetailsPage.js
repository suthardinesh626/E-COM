import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product/components/ProductDetail";


function ProductDetailsPage() {
    return ( 
        <>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </>
     );
}

export default ProductDetailsPage;