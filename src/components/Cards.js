const Cards = (data) => {
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <img className="card-img-top" src={data.image} alt={data.name}/>
                <div className="card-body">
                    <h3 className="card-title">{data.name}</h3>
                    <p className="card-text">{data.description}</p>
                </div>
                <body className="card-footer">
                    <div class="row">
                        <h5 class="col-md-6">&#x20B1; {data.price}</h5>
                        <button className="col-md-6 btn btn-success">Add to Cart</button>
                    </div>
                </body>
            </div>
        </div>
    );
}
 
export default Cards;