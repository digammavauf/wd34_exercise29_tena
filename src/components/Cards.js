import { $ }  from 'react-jquery-plugin';

const Cards = (data) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-8">
            <div className="card h-100">
                <img className="card-img-top" src={data.image} alt={data.name}/>
                <div className="card-body">
                    <h3 className="card-title">{data.name}</h3>
                    <p className="card-text">{data.description}</p>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <h5 className="col-6">&#x20B1; {data.price}</h5>
                        <button className="col-6 btn btn-success btn-add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Cards;

$(function() {
    $(".btn-add-to-cart").on("click", function(event) {
        let price = event.target.previousSibling.lastChild.nodeValue;
        let name = event.target.parentElement.parentElement.previousSibling.firstChild.textContent;
        let desc = event.target.parentElement.parentElement.previousSibling.lastChild.textContent;
        alert(`Successfully added to cart ${name} for ${price}\n\n${desc}`);
    });
});
