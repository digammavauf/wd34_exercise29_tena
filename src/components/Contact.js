let mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.699997605479!2d121.05754961380876!3d14.55914068199699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c861b66b9a2b%3A0x73ac1080aa7280f7!2sJ.Brothers%20Store!5e0!3m2!1sen!2sph!4v1677911514558!5m2!1sen!2sph";

const Contact = () => {
    return ( 
        <div className="bg-info py-4">
            <a name="contact"></a>
            <div className="container">
                <h1 className="text-center">Contact Us</h1>
                <div className="mb-4">
                    <iframe src={mapURL} width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="gmap"></iframe>
                </div>
                <div className="mb-4">
                    <address className="col-md-6 mx-auto fs-4 text-center">
                        Kalayaan Avenue, Makati, Metro Manila
                        <br/>
                        Telefax: <a href="tel:0287654321" title="Call Us">028-765-4321</a>
                        <br/>
                        Email: <a href="mailto:contact@jbros.ph" title="Email Us">contact@jbros.ph</a>
                    </address>
                </div>
                <div className="mb-4 col-md-6 mx-auto">
                    <form>
                        <div className="input-group mb-2">
                            <label className="input-group-text col-md-2" id="name-label" for="name">Name</label>
                            <input type="text" className="form-control col-md-4" name="name" id="name" arial-aria-describedby="name-label"/>
                        </div>
                        <div className="input-group mb-2">
                            <label className="input-group-text col-md-2" id="email-label" for="email">Email</label>
                            <input type="email" className="form-control col-md-4" name="email" id="email" aria-activedescendant="email-label"/>
                            </div>
                        <div className="input-group mb-2">
                            <label className="input-group-text col-md-2" id="comment-label" for="comment">Comment</label>
                            <textarea className="form-control col-md-4" cols="80" rows="5" name="comment" id="comment" aria-activedescendant="comment-label"></textarea>
                        </div>
                        <button className="btn btn-success col-md-4 offset-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;