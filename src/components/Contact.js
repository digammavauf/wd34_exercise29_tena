import * as Icon from 'react-bootstrap-icons';
import { $ }  from 'react-jquery-plugin';

let mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.699997605479!2d121.05754961380876!3d14.55914068199699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c861b66b9a2b%3A0x73ac1080aa7280f7!2sJ.Brothers%20Store!5e0!3m2!1sen!2sph!4v1677911514558!5m2!1sen!2sph";

const Contact = () => {
    return ( 
        <div className="py-4">
            <div className="container">
                <h1 className="text-center"><a name="contact">Contact Us</a></h1>
                <div className="mb-4">
                    <iframe src={mapURL} width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="gmap"></iframe>
                </div>
                <div className="mb-4">
                    <address className="col-md-6 mx-auto fs-4 text-center">
                        Kalayaan Avenue, Makati, Metro Manila
                        <br/>
                        Telefax: <a href="tel:0287654321" title="Call Us"><Icon.Telephone className="ms-2 me-2" />028-765-4321</a>
                        <br/>
                        Email: <a href="mailto:contact@jbros.ph" title="Email Us"><Icon.Envelope className="ms-2 me-2" />contact@jbros.ph</a>
                    </address>
                </div>
                <div className="mb-4 col-md-6 mx-auto">
                    <form id="comment-form" action="javascript:alert('Thank you for your comment, '+$('#name').val()+'! We will contact you at '+$('#email').val()+' once we have something to say regarding your query.');">
                        <div className="input-group mb-2">
                            <label className="input-group-text col-4" id="name-label" htmlFor="name">Name</label>
                            <input type="text" className="form-control col-4" name="name" id="name" arial-aria-describedby="name-label"/>
                        </div>
                        <div className="input-group mb-2">
                            <label className="input-group-text col-4" id="email-label" htmlFor="email">Email</label>
                            <input type="email" className="form-control col-4" name="email" id="email" aria-activedescendant="email-label"/>
                            </div>
                        <div className="input-group mb-2">
                            <label className="input-group-text col-4" id="comment-label" htmlFor="comment">Comment</label>
                            <textarea className="form-control col-md-6 col-4" cols="80" rows="5" name="comment" id="comment" aria-activedescendant="comment-label"></textarea>
                        </div>
                        <button className="btn btn-success col-4 offset-4" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;

$("#comment-form").on("submit", function(event) {
    if($("#name").val() != "" && $("#email").val() != "" && $("#comment").val() != "") {
        return;
    }
    alert("Something is not right! All fields are required.");
    event.preventDefault();;
});