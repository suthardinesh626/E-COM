import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductLists"


function Home() {
    return ( 
        <>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
        </>
     );
}

export default Home;