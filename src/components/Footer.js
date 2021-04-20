import React from 'react';
import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__icons">
        <div>
          <FontAwesomeIcon className="Footer__singleIcon" icon={faFacebookF} />
          <FontAwesomeIcon className="Footer__singleIcon" icon={faInstagram} />
          <FontAwesomeIcon className="Footer__singleIcon" icon={faTwitter} />
          <FontAwesomeIcon className="Footer__singleIcon" icon={faYoutube} />
        </div>
      </div>
      <div className="Footer__row">
        <div className="Footer__col">
          <ul>
            <li>FAQ</li>
            <li>Investors</li>
            <li>Ways to Watch</li>
            <li>Originals</li>
          </ul>
        </div>
        <div className="Footer__col">
          <ul>
            <li>FAQ</li>
            <li>Investors</li>
            <li>Ways to Watch</li>
            <li>Originals</li>
          </ul>
        </div>
        <div className="Footer__col">
          <ul>
            <li>FAQ</li>
            <li>Investors</li>
            <li>Ways to Watch</li>
            <li>Originals</li>
          </ul>
        </div>
        <div className="Footer__col">
          <ul>
            <li>FAQ</li>
            <li>Investors</li>
            <li>Ways to Watch</li>
            <li>Originals</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
