import React, { Component } from 'react'
import createRepository from './../services/createRepository'
import { Formik } from 'formik'

class WithFormik extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          desc: '',
          type: 'PUBLIC',
          license: 'NONE',
          errors: {
            form: '',
            name: '',
            desc: '',
          },
        }}
      >
        {({ values, errors, handleChange, handleBlur }) => {
          return (
            <div className="container">
              <div className="row">
                <h1 className="heading">Create a new repository</h1>
                <p className="sub-heading">
                  A repository contains all the files for your project, including the revision history.
                </p>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>Repository name</label>
                    <input type="text" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                    {errors.name && <p className="feedback-invalid">{this.state.errors.name}</p>}
                  </div>
                  <div className="form-group">
                    <label>Description (optional)</label>
                    <textarea
                      rows="3"
                      cols="20"
                      name="desc"
                      value={values.desc}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.desc && <p className="feedback-invalid">{this.state.errors.desc}</p>}
                  </div>
                  <div className="form-group">
                    <label>Repository type</label>
                    <input
                      type="radio"
                      name="type"
                      value="PUBLIC"
                      onChange={handleChange}
                      checked={values.type === 'PUBLIC'}
                    />
                    Publicthis.
                    <input
                      type="radio"
                      name="type"
                      value="PRIVATE"
                      onChange={handleChange}
                      checked={values.type === 'PRIVATE'}
                    />
                    Private
                  </div>
                  <div className="form-group">
                    <label>Licenses</label>
                    <select name="license" value={values.license} onChange={handleChange}>
                      <option value="NONE">None</option>
                      <option value="APACHE_LICENSE_2.0">Apache License 2.0</option>
                      <option value="MIT">MIT</option>
                      <option value="GNU_GENERAL_PUBLIC_LICENSE_V3_0">GNU General Public License v3.0</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button className="btn">Create repository</button>
                  </div>
                </form>
              </div>
            </div>
          )
        }}
      </Formik>
    )
  }
}

export default WithFormik
