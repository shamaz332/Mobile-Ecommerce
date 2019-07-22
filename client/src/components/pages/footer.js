import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
         <footer className="page-footer teal lighten-1">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">We Provide</h5>
                <p className="grey-text text-lighten-4">Quality products with 6 days Money back gaurantee</p>
              </div>
              <div className="col l4 offset-l2 s12">
                {/* <h5 className="white-text">Links</h5> */}
                {/* <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            ©2019 by Shamaz Saeed. All Rights Reserved.

            
            </div>
          </div>
        </footer>
            </div>
        )
    }
}
