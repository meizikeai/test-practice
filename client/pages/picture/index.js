import React, { Component } from 'react'
import { render } from 'react-dom'
import Layout from '../../components/layout'
import { } from './util'
import './index.css'

const { upload } = window.CONFIG

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {

  }

  handleClick = () => {
    this.check.click()
  }

  handleChange = f => {
    const file = f[0]
    if (file) {
      upload.file = file
    }
  }

  render () {
    return (
      <Layout>
        <div className='demo'>
          <h1 className='title'>upload picture</h1>
          <p className='descr'>A upload picture and want to look for a girlfriend...</p>
        </div>
      </Layout>
    )
  }
}

const config = window.CONFIG || {}
render(<App {...config} />, document.querySelector('#app'))