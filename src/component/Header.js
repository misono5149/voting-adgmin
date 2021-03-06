import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {

  render() {
    return (
      <div className="header">
          <div className='toc'>
            <div className='ui inverted vertical labeled icon ui overlay left thin visible sidebar menu'>
              <Link to="/" className='item'>
                <i aria-hidden='true' className='home icon' />
                선거목록
              </Link>
              <Link to="/voting/result" className='item'>
                <i aria-hidden='true' className='gamepad icon' />
                투표결과목록
              </Link>
              <a className='item'>
                <i aria-hidden='true' className='camera icon' />
                Logout
              </a>
            </div>
          </div>
      </div>
    );
  }
}

export default Header;
