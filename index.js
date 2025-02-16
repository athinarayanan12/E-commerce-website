async function fetchProducts(){

    const data = await fetch('https://fakestoreapi.com/products?limit=10');

    const products = await data.json();
    products.forEach((product)=>{

    })
};

