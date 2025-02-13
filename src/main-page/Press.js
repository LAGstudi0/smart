import { Link } from "react-router-dom";

import TeamTalk from '../images/sikka-featured.jpg';
import Chart from '../images/iChart.jpeg'
import Tennis from '../images/tennis.webp'
import Card from './Cards.js'

export default function Press() {
    return             <section id="press" className="press">
                  <div className="press-title">
                    <h1>Press</h1>
                  </div>
                  <div>
                    <div className="articles">
                    <div className="one-article">
                        <h2>PTPA Launches Groundbreaking Medical Network, Underscoring Its Commitment to Protecting Player Health and Safety</h2>
                        <p>03/01/24</p>
                        <Link to="/PTPAPress">Read More</Link>
                      </div>
                    <div className="one-article">
                        <h2>Press Release</h2>
                        <p>12/14/23</p>
                        <Link to="/PressRelease">Read More</Link>
                    </div>
                    </div>
                    <div className="divider"></div>
                    <div className="media">
                      <div className="media-title">
                        <h1>Media</h1>
                      </div>
                      <div className="media-container">
                        <div className="media-video">
                          <iframe className="link-video" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7171546806651199489?compact=1" scrolling="no" height='560px' frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                        </div>
                        <div className="media-video">
                          <iframe className="link-video" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7169790655362228226?compact=1" scrolling="no" height='560px' frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                        </div>
                      </div>
                      <div className="media-title">
                        <h1>Articles</h1>
                      </div>
                      <div className="cards-container">
                  <Card
                  title="The Story of Robby Sikka, Doctor and Leader in the NBA"
                  image={TeamTalk}
                  url="https://www.slamonline.com/the-magazine/robby-sikka-profile/"
                />
                <Card
                  title="Report shows tennis night matches lead to increased injury risk"
                  image={Chart}
                  url="https://www.espn.com/tennis/story/_/id/41210444/report-shows-tennis-night-matches-lead-increased-injury-risk"
                />
                <Card
                  title="Tennis Injuries Keep Coming As PTPA Publishes Player Welfare Report"
                  image={Tennis}
                  url="https://www.forbes.com/sites/timellis/2024/10/01/tennis-injuries-keep-coming-as-ptpa-publishes-player-welfare-report/"
                />
                        </div>
                    </div>
                  </div>
                </section>
}