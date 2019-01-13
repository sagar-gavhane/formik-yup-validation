import React, { Component } from 'react'
import createRepository from './../services/createRepository'

class WithoutFormik extends Component {
  state = {
    name: '',
    desc: '',
    type: 'PUBLIC',
    license: 'NONE',
    errors: {
      form: '',
      name: '',
      desc: '',
    },
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleBlur = ({ target }) => {
    const { name, value } = target
    switch (name) {
      case 'name':
        if (value === '') {
          const errors = {
            ...this.state.errors,
            ...{ name: 'Repository name is required field.' },
          }
          this.setState({ errors })
        } else if (value.length < 3) {
          const errors = {
            ...this.state.errors,
            ...{ name: 'Repository name must be contain atleast 3 characters.' },
          }
          this.setState({ errors })
        } else {
          const errors = {
            ...this.state.errors,
            ...{ name: '' },
          }
          this.setState({ errors })
        }
        break

      case 'desc':
        if (value.length < 15 && value !== '') {
          const errors = {
            ...this.state.errors,
            ...{
              desc: 'Repository description must be contain atleast 15 characters.',
            },
          }
          this.setState({ errors })
        } else {
          const errors = {
            ...this.state.errors,
            ...{ desc: '' },
          }
          this.setState({ errors })
        }
        break
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const { errors, ...data } = this.state
      const response = await createRepository(data)
      console.log('response', response)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
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
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.name && <p className="feedback-invalid">{this.state.errors.name}</p>}
            </div>
            <div className="form-group">
              <label>Description (optional)</label>
              <textarea
                rows="3"
                cols="20"
                name="desc"
                value={this.state.desc}
                onChange={this.handleInputChange}
                onBlur={this.handleBlur}
              />
              {this.state.errors.desc && <p className="feedback-invalid">{this.state.errors.desc}</p>}
            </div>
            <div className="form-group">
              <label>Repository type</label>
              <input
                type="radio"
                name="type"
                value="PUBLIC"
                onChange={this.handleInputChange}
                checked={this.state.type === 'PUBLIC'}
              />
              Public
              <input
                type="radio"
                name="type"
                value="PRIVATE"
                onChange={this.handleInputChange}
                checked={this.state.type === 'PRIVATE'}
              />
              Private
            </div>
            <div className="form-group">
              <label>Licenses</label>
              <select name="license" value={this.state.license} onChange={this.handleInputChange}>
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
  }
}

export default WithoutFormik
