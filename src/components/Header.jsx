import React from 'react'
import PropTypes from 'prop-types'

import toplapLogo from '../images/toplap.svg';

// <span style={{
//           backgroundImage: `url(${JSON.stringify(toplapLogo)})`,
//           backgroundColor: "red",
//           height: "200px",
//           width: "200px",
//       }} className="toplap-logo"> ,&#8203; </span>

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
      <div className="logo" style={{
               backgroundImage: `url(${JSON.stringify(toplapLogo)})`,
               backgroundSize: "cover",
               // backgroundPositionX: "-32px",
               // height: "200px",
               // width: "200px",
           }}>

      </div>
      <div className="content">
        <div className="inner">
              <h1>toplap.berlin</h1>
              <p>{"live-coding and algorave community in Berlin"}</p>
        </div>
      </div>
        <nav>
            <ul>
              <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Events</a></li>
              <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Gallery</a></li>
              <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Artists</a></li>
              <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
