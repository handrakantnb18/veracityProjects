
export function UseEffectComponent() {

    const [categories, setCategories] = useState([]);

    function loadCategory() {
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(category => {
            category.unshift("All");
            setCategories(category);

        })
    }

    useEffect(() => {
        loadCategory();
    }, [])
    return(
        <div className="container-fluid mt-3">
            <header className="bg-bg-primary text-white text-center p-2">Online Shopping</header>
                <section className="row">
                    <nav className="col-3">
                        <h4>Select Category</h4>
                        <select className="form-select">
                            {
                                categories.map(c => {
                                    <option>{c.toUpperCase()}</option>
                                })
                            }
                        </select>
                    </nav>
                    <main className="col-9 d-flex flex-wrap">

                    </main>
                </section>
            
        </div>
    );
}