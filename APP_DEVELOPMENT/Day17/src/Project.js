import React from 'react'
import "./Project.css"
const Project = () => {
  return (
    <div className='body9'>
    <section className="screen-height">
    <div className="container-580">
      <div className="form-container">
        <div className="form-header">
          <h1 className="page-title">Create new project</h1>
        </div>
        <form
          className="form needs-validation"
          action="https://app.treblle.com/projects/store"
          method="POST"
          noValidate=""
        >
          <input
            type="hidden"
            name="_token"
            defaultValue="MHzN3G1ovjLNzRPfIBQUs7rhpQJkVimcGDPVPOn9"
          />
          <div className="form-group">
            <label className="form-label">
              Name of the creator *{" "}
              
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              defaultValue=""
              autofocus=""
              required=""
              maxLength={255}
            />
            <div className="invalid-feedback">
              Please give your name
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">
              Name of the Project*
              
            </label>
            <input
              className="form-control"
              type="url"
              name="url"
              defaultValue=""
              
              required=""
            />
            <div className="invalid-feedback">
              Please give your project name
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Project Based</label>
            <select
              className="form-control select2-select select2-hidden-accessible"
              name="sdk"

              aria-hidden="true"
            >
              
              <option value="adonisjs">EarthQuake</option>
              <option value="cloudflare">Flood</option>
              <option value="directus">Drought</option>
              <option value="django">Strom</option>
              <option value="express">Forest Fire</option>
              <option value="fastify">Human Disaster</option>
              <option value="go">landslide</option>
              <option value="koajs">Deforestation</option>
              <option value="laravel">Global Warming</option>
             
            
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">
              Due Date{" "}
              
            </label>
            <input
              className="form-control"
              type="url"
              name="url"
              defaultValue=""
              
              required=""
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Amount Needed  {" "}
              
            </label>
            <input
              className="form-control"
              type="text"
              name="members"
              defaultValue=""
             
            />
          </div>
          <div className="form-group submit">
          <a href="/analysis" className="btn btn-masked">
          Submit
        </a>
            <a href="/analysis" className="btn btn-masked">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  </section>
  
    </div>
  )
}

export default Project
