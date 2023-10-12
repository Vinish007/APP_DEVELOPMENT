import React from 'react'
import { Link } from 'react-router-dom'

const Payment2 = () => {
  const buttonStyles = {
    backgroundColor: 'blue',       // Background color
    color: 'white',               // Text color
    padding: '10px 20px',         // Padding
    borderRadius: '5px',          // Border radius
    border: 'none',              // Border style
    cursor: 'pointer',           // Cursor style
  };
  return (
    <div>
    <>
    <title>Donating Hands</title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
      integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"
      crossOrigin="anonymous"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        .jumbotron {height: 10vh; background-color: #9e2e22;}\n        .header-text {color: white; font-size: 2.25em; font-weight: bold;}\n        .btn {white-space: normal;}\n        \n        #full-donation-form {padding: 0 0 5% 0;}\n        #submit-button {padding-bottom: 2%; padding-top: 1%;}\n        #gift-type {padding-bottom: 2%;}\n        #do-not-mail  {padding-top: 1%;}\n        #donation-info {padding-bottom: 2%;}\n        #donor-info {padding-bottom: 2%;}\n        #payment-info {padding-bottom: 2%;}\n        #payment-type {padding-bottom: 5%; padding-top: 3%;}\n        #payment-options {padding-bottom: 2%; padding-top: 1%;}\n        #personal-message {padding-bottom: 3%;}\n        #tribute-options {padding-bottom: 2%;}\n        #send-to-me {padding-bottom: 1%;}\n        #honoree-info {padding-bottom: 1%;}\n        #sender-info {padding-bottom: 1%;}\n        #notification-options {padding-bottom: 3%;}\n\n    "
      }}
    />
    <header className="jumbotron" id="logo-header">
      <span className="header-text">Donating Hands</span>
    </header>
    <section className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>Giving is the Greatest act of Grace</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <p>
            Your gift will help win justice on behalf of those who have no other
            champion, expose and fight the hate that thrives in our country, and
            provide tolerance education materials free of charge to schools across
            the nation.
          </p>
        </div>
      </div>
    </section>
    <div className="container">
      <section className="container" id="full-donation-form">
        <section id="menu">
          <div className="row">
            <div className="col-sm-12">
              <p>
                <strong>
                  Please select the type of donation you'd like to make today.
                </strong>
              </p>
            </div>
          </div>
        </section>
        <section id="gift-type" className="container">
          <div className="row">
            <Link to = "/payment"
              className="btn btn-outline-danger col-md-2 col-xs-12"
              role="button"
            >
              General Gift
            </Link>
            <Link to = "/payment1"
              className="btn btn-outline-danger col-md-2 col-xs-12"
              role="button"
            >
              Monthly Giving
            </Link>
            <Link to = "/payment2"
              className="btn btn-danger col-md-2 col-xs-12"
              role="button"
            >
              Tribute Cards
            </Link>
        
          </div>
        </section>
        <section id="gift-type-description">
          <div className="row">
            <div className="col-sm-12">
              <p className="lead">
                You are about to make a{" "}
                <strong>
                  <u>tribute gift that the SPLC will mail on your behalf</u>
                </strong>
                .
              </p>
            </div>
          </div>
        </section>
        <section id="donation-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>Donation Amount</h3>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                
                    <button type="button" className="btn btn-secondary">
                      $10
                    </button>
                    <button type="button" className="btn btn-secondary">
                      $25
                    </button>
                    <button type="button" className="btn btn-secondary">
                      $50
                    </button>
                    <button type="button" className="btn btn-secondary">
                      $100
                    </button>
                    <button type="button" className="btn btn-secondary">
                      $500
                    </button>
                  
              </div>
              <div className="row container">
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-addon" id="btnGroupAddon">
                      Other
                    </span>
                    <input
                      type="text"
                      className="form-control col-5"
                      placeholder="$"
                      aria-describedby="btnGroupAddon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="donor-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>Donor Information</h3>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    First Name
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="SPLC"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Last Name
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="Friend"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-email-input"
                    className="col-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="email"
                      defaultValue="emails@splcenter.org"
                      id="example-email-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-email-input"
                    className="col-2 col-form-label"
                  >
                    Confirm Email
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="email"
                      defaultValue="emails@splcenter.org"
                      id="example-email-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Country
                  </label>
                  <div className="col-10">
                    <select className="form-control" id="exampleSelect1">
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Street Address
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="123 Street Name"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    City
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="City"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    State
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="text"
                      defaultValue="State"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row container">
              
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Country
                  </label>
                  <div className="col-10">
                    <select className="form-control" id="exampleSelect1">
                      <option>United States</option>
                      <option>Canada</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group row">
                  <label
                    htmlFor="example-text-input"
                    className="col-2 col-form-label"
                  >
                    Phone Number
                  </label>
                  <div className="col-10">
                    <input
                      className="form-control text-muted"
                      type="tel"
                      defaultValue="555-555-5555"
                      id="example-text-input"
                      style={{ fontStyle: "italic" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tribute-info">
          <div className="row">
            <div className="col-sm-12 mb-2">
              <h3>Tribute Information</h3>
            </div>
          </div>
          <div className="row">
            
          </div>
          <div className="row">
             
            <div className="col-sm-12" id="honoree-info">
              <div className="form-group row">
                <label
                  htmlFor="example-text-input"
                  className="col-2 col-form-label"
                >
                  Event
                </label>
                <div className="col-10">
                  <input
                    className="form-control text-muted"
                    type="ttextel"
                    defaultValue="Event to be Celebrate"
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12" id="honoree-info">
              <div className="form-group row">
                <label
                  htmlFor="example-text-input"
                  className="col-2 col-form-label"
                >
                  Honoree's Name
                </label>
                <div className="col-10">
                  <input
                    className="form-control text-muted"
                    type="ttextel"
                    defaultValue="This person is being honored."
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12" id="sender-info">
              <div className="form-group row">
                <label
                  htmlFor="example-text-input"
                  className="col-2 col-form-label"
                >
                  Sender's Name
                </label>
                <div className="col-10">
                  <input
                    className="form-control text-muted"
                    type="ttextel"
                    defaultValue="Your name or group's name (if coming from multiple people)."
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12" id="notification-options">
              <label className="custom-control custom-radio">
                <input
                  id="radio1"
                  name="radio"
                  type="radio"
                  className="custom-control-input"
                />
                <span className="custom-control-indicator" />
                <span className="custom-control-description">
                  Send the card to me instead. I'd like to personally deliver it.
                  (Note: Enter your mailing information below if you select this
                  option.)
                </span>
              </label>
              <label className="custom-control custom-radio">
                <input
                  id="radio2"
                  name="radio"
                  type="radio"
                  className="custom-control-input"
                />
                <span className="custom-control-indicator" />
                <span className="custom-control-description">
                  I don't want to notify anyone of this gift. I simply want to
                  honor someone.
                </span>
              </label>
            </div>
            <div className="col-sm-12">
              <h5>Recipient's Information</h5>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-text-input"
                  className="col-2 col-form-label"
                >
                  Recipient's Name
                </label>
                <div className="col-10">
                  <input
                    className="form-control text-muted"
                    type="ttextel"
                    defaultValue="This person will be notified of your gift."
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-text-input"
                  className="col-2 col-form-label"
                >
                  Street Address
                </label>
                <div className="col-10">
                  <input
                    className="form-control text-muted"
                    type="text"
                    defaultValue="123 Street Name"
                    id="example-text-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-text-input"
                  className="col-2 col-form-label"
                >
                  City
                </label>
                <div className="col-10">
                  <input
                    className="form-control text-muted"
                    type="text"
                    defaultValue="City"
                    id="example-text-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-text-input"
                  className="col-2 col-form-label"
                >
                  State
                </label>
                <div className="col-10">
                  <input
                    className="form-control text-muted"
                    type="text"
                    defaultValue="State"
                    id="example-text-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            
            <div className="col-sm-12">
              <h5>Optional Message</h5>
              <p>
                If you would like to include a personal message, please enter it
                here:
              </p>
            </div>
            <div className="col-sm-12" id="personal-message">
              <input
                className="form-control text-muted"
                type="text"
                defaultValue=""
                id="example-text-input"
                style={{ fontStyle: "italic", height: "20vh" }}
              />
            </div>
            <div id="add-card-button" className="mb-4">
              
            </div>
          </div>
        </section>
        <section id="payment-info">
          <div className="row">
            <div className="col-sm-12">
              <h3>Payment Information</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12" id="payment-options">
              <div
                className="col-sm-12"
                
              >
                Credit/Debit Card
              </div>
              
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Card Number
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control text-muted"
                    type="tel"
                    defaultValue="5555-555-5555"
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Expiration Date
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control"
                    type="month"
                    defaultValue="2011-08"
                    id="example-month-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group row">
                <label
                  htmlFor="example-tel-input"
                  className="col-md-2 col-sm-12 col-form-label"
                >
                  Security Code
                </label>
                <div className="col-md-4 col-sm-12">
                  <input
                    className="form-control text-muted"
                    type="tel"
                    defaultValue="5555 or 555"
                    id="example-tel-input"
                    style={{ fontStyle: "italic" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="summary">
          <div className="row">
            <div className="col-sm-12">
              <h3>Summary Confirmation</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <p>
                You are making a <strong>one-time tribute gift</strong> of{" "}
                <strong>$25.00</strong> by <strong>card</strong> to the Southern
                Poverty Law Center. After you review your information, please
                click "Donate Now" to process your gift. You will not be able to
                make changes to your donation on the next screen.
              </p>
            </div>
          </div>
          <div className="row" id="submit-button">
            <div className="col-md-6 col-sm-12 col-xs-12 mx-auto">
            <button style={buttonStyles}><Link to='/thank'>Donate</Link></button>
            </div>
          </div>
        </section>
    
      </section>
    </div>
  </>
  
    </div>
  )
}

export default Payment2
