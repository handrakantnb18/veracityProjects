export function DataBindingComponent(){
    var products = ["TV", "Mobile", "Tab"];

    return(
        <div>
           <ol>
            <h2>Product Details</h2>
             {
                // products.map(function(product){
                //    return <li>{product}</li>
                // })
            }
           </ol>
        </div>
    );
}