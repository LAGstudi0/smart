import Talking from './images/img-1.jpeg';


export default function About() {
            return   <section id="about" className="about">
                  <div className="about-title">
                    <h1>SMART’s mission is to improve access to personalized health care.</h1>
                    <img src={Talking} alt="Dr. Sikka" />
                  </div>
                  <div className="about-content">
                  <div className="about-content-1">
                    <h2>Data driven wellness</h2>
                    <p>Our plan starts with democratizing health care data. Our method enables individuals to have full access to their health data, on their mobile device, in a manner that provides them usable health information, personal insights, and facilitates better care. We put individuals in control of their data, and we take pride in helping individuals get healthy, solve tough problems, and keep you performing at your best. Our methods have been used in elite sports for nearly twenty years, and we allow you to put your information in a safe place, with full access, and give you the ability to use AI to optimize your personal health. Sharing data with your provider, family, friends, and loved ones is easy and under your control. Our transparent methods allow you to understand where your data is at all times. We are grateful for the trust patients put in us, and want to ensure their data, health, privacy, and goals are our top focus.</p>
                  </div>
                  <div className="divider"></div>
                  <div className="about-content-1">
                    <h2>How we got here</h2>
                    <p>Our vision started over two decades ago working on a football field at NFL training camps. It was there we saw the power of data, the importance of personalized health and good communication. Our approach helped keep players safe, optimized treatments and surgical decision-making, and helped teams win. Over the last twenty years, we’ve built unique data sets, helped thousands of patients, dozens of teams, and built a trusted name in health. We are excited to work with more organizations now using the same methods, building data-driven care, personalized wellness, and access to information.</p>
                  </div>
                  </div>
                </section>
}