import TeamTalk from './images/sikka-featured.jpg';


export default function Contact() {
    return <section id="contact" className="contact">
                  <div className="top-contact">
                    <div className="image-contact">
                      <img src={TeamTalk} alt="Dr. Sikka talking to the team" />
                    </div>
                    <div className="contact-text-container">
                      <div className="top-text-1">
                        <h3>Join Our Team</h3>
                        <p>Join our dynamic team at SMART, where you'll collaborate with industry leaders to revolutionize healthcare and wellness through our cutting-edge data and technology solutions.</p>
                      </div>
                      <div className="top-text-2">
                        <p id="bold">For more information:</p>
                        <a href="mailto:jobs@smartdocapp.com">
                          <p>jobs@smartdocapp.com</p>
                        </a>
                      </div>
                      </div>
                  </div>
                  <div className="partner" >
                    <div className="partner-top">
                      <h3>Partnership Opportunities</h3>
                      <p>We’re looking to partner with innovative minds and organizations to advance SMART's mission to revolutionize access to personalized medical care through cutting-edge software solutions.</p>
                    </div> 
                    <div className="partner-bottom">
                      <p id="bold">To explore further:</p>
                      <a href='mailto:info@smartdocapp.com'>
                        <p>info@smartdocapp.com</p>
                      </a>
                    </div>
                  </div>
                </section>
}