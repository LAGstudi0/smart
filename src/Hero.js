import Phone from './images/mockup-screens.png';


export default function Hero() {
    return             <div id="main-banner" className="hero-container">
                  <section className="hero">
                      <div className="hero-left">
                        <h1>Immediate access to your full medical records and personalized health recommendations.</h1>
                        <div><a className="find-out" href="#about">Find out how</a></div>
                      </div>
                      <div className="hero-container-img">
                        <img className="phone-mockup" src={Phone} alt="phone" />
                      </div>
                  </section>
                </div>
}