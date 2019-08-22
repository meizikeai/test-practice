import React, { Component } from 'react'
import { render } from 'react-dom'
import Layout from '../../components/layout'
import { prepareFile, handleRestartDefault } from './util'

import './index.css'

const layoutArgs = {
  bodyMaxWidth: 425,
  designWidth: 750,
}

const { upload } = window.CONFIG

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pass: true,
    }
  }

  componentDidMount () {

  }

  handleClick = () => {
    handleRestartDefault()
    this.check.click()
  }

  handleChange = f => {
    const file = f[0]
    if (file) {
      upload.file = file
      prepareFile(file)
    }
  }

  handleState = () => {
    const { pass } = this.state

    if (pass) {
      upload.state = 'stop'
      this.setState({ pass: false })
      this.file.innerHTML = 'START'

      return false
    }

    if (!pass) {
      upload.state = 'start'
      this.setState({ pass: true })
      this.file.innerHTML = 'STOP'

      if (upload.file) {
        prepareFile(upload.file)
      }

      return false
    }
  }

  render () {
    return (
      <Layout {...layoutArgs}>
        <div className='demo'>
          <h1 className='title'>upload practice</h1>
          <p className='descr'>A upload practice and want to look for a girlfriend...</p>

          <div className='upload'>
            <div className='one' id='one'>
              <div className='list'>
                <span className='topic'>校验文件进度</span>
                <div className='check'>
                  <div id='extract' style={{ width: '0%' }}>
                    <p>0%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='one' id='two'>
              <div className='list'>
                <span className='topic'>上传文件进度</span>
                <div className='check'>
                  <div id='upload' style={{ width: '0%' }}>
                    <p>0%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='one' id='three'>
              <div className='list'>
                <span className='topic'>上传文件结果</span>
                <div className='check'>
                  <a className='jump' href='' target='_blank' />
                </div>
              </div>
            </div>
          </div>

          <div className='submit'>
            <input className='check-file' type="file" ref={e => { this.check = e }} onChange={e => this.handleChange(e.target.files)} />
            <button className='click-file' type='button' onClick={this.handleClick}>Click This</button>
            <div className='click-state' ref={e => { this.file = e }} onClick={this.handleState} role='presentation'>STOP</div>
          </div>
        </div>
      </Layout>
    )
  }
}

const config = window.CONFIG || {}
render(<App {...config} />, document.querySelector('#app'))