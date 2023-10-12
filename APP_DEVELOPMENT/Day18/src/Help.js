import React from 'react'
import './Help.css'

const Help = () => {
  return (
    <div id='body2'>
    <>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hands To Donate</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"
    />
    ` <link rel="stylesheet" type="text/css" href="css/mobile.css" />
    <link rel="stylesheet" type="text/css" href="css/wide.css" />
    <link
      href="https://fonts.googleapis.com/css?family=PT+Sans"
      rel="stylesheet"
    />
    {/*[if lt IE 9]>
              
              
  
  
      <![endif]*/}
    <div className="cog_icon" id="cogButton">
      
    </div>
   
    <nav className="navbar navbar-default navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="cog_icon2" id="cogButton2">
            <img className="cog2" src="imgs/cog.png" alt="Go to settings menu" />
          </div>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        </div>
    </nav>
    <div className="head1" background="imgs/family.png">
      <div className="container" background="imgs/family.png">
        <div className="row">
          <div className="col-sm-3">
            <div className="cube_shield">
              
            </div>
          </div>
          <div className="col-sm-8">
            <h2 className="AdjustableFontSize">
              Hands To Donate
            </h2>
            <p className="AdjustableFontSize">
              This application provides you with instantly accessible information
              about all legal topics relating to people who are suffering in disasters
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="head2" background-color="teal">
      <div className="container2">
        <div className="row">
          
          <div className="col-xs-6 col-sm-6 col-md-4">
            <div className="infogrid">
              <img
                className="info"
                src="http://i.imgur.com/GWxnfiw.png"
                alt="Go to My Rights page"
              />
              <p className="myrights">My Rights</p>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4">
            <div className="findinghelpgrid">
              <img
                className="scale"
                src="http://i.imgur.com/aFNlEnN.png"
                alt="Go to Finding Help page"
              />
              <p className="findinghelp">Find Help</p>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4">
            <div className="dictionarygrid">
              <img
                className="book"
                src="http://i.imgur.com/3g5AuGV.png"
                alt="Go to Dictionary page"
              />
              <p className="dictionary">Dictionary</p>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4">
            <div className="contactsgrid">
              <img
                className="web"
                src="http://i.imgur.com/4tj17kx.png"
                alt="Go to Contacts page"
              />
              <p className="contacts">Contacts</p>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4">
            <div className="aboutgrid">
              <img
                className="globe"
                src="http://i.imgur.com/hAir7yh.png"
                alt="Go to About page"
              />
              <p className="about">About</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
    </div>
  )
}

export default Help
