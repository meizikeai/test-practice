/**
 * 简单提示框模版
 * 参数说明：
 * @param {String} content 提示内容
 * @param {Number} duration 自动关闭的时间，默认1500
 * @param {Boolean} layer 透明庶档是不是出现
 * @param {Function} callback 回调
 * 使用方式：
 * PopupMinLayer.show({
 *  layer: false,
 *  duration: 1000,
 *  content: '请输入体验码〜'
 *  callback: () => {}
 * })
 */

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

class PopupMinLayer extends Component {
  static propTypes = {
    content: PropTypes.string,
    height: PropTypes.number,
    layer: PropTypes.bool,
    show: PropTypes.bool,
    node: PropTypes.object,
  }

  static defaultProps = {
    content: '',
    layer: true,
    show: true,
  }

  constructor (props) {
    super(props)
    const { show } = this.props
    this.state = {
      show,
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (!nextState.show) {
      const { node } = this.props
      ReactDOM.unmountComponentAtNode(node)
      document.body.removeChild(node)
    }
    return false
  }

  componentWillUnmount = () => {
    // clearTimeout(this.timer)
  }

  render () {
    const { show } = this.state
    const { content, height, layer } = this.props
    return (
      <div className='model-mini-layer' style={{ display: show ? null : 'none' }}>
        <div className="layer">
          <div className='content'>{content}</div>
        </div>
        {layer ? <div className='layer-back' style={{ height: `${height}px` }} /> : ''}
      </div>
    )
  }
}

/**
 * disableScroll 禁止滚动条
 */
function disableScroll () {
  const toastNode = document.querySelector('.toast-model-mini')

  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'

  if (toastNode) {
    toastNode.addEventListener('touchmove', event => {
      event.preventDefault()
    }, false)
  }
}

/**
 * restartScroll 放开滚动条
 */
function restartScroll () {
  const toastNode = document.querySelector('.toast-model-mini')
  const marker = document.querySelector('.toast-marker')
  if (!marker) {
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
  }

  if (toastNode) {
    toastNode.removeEventListener('touchmove', event => {
      event.preventDefault()
    }, false)
  }
}

/**
 * 创建一个节点〜
 */
function createToast () {
  const toast = document.createElement('div')
  toast.setAttribute('id', `toast-${Math.floor(Math.random() * 10000000)}`)
  toast.setAttribute('class', `toast-model-mini`)
  document.body.appendChild(toast)
  return toast
}

export default {
  show (options) {
    let { content, duration, layer, callback } = options
    const toast = createToast()

    if (!duration) {
      duration = 2000
    } else if (typeof duration !== 'number') {
      duration = 2000
    }

    setTimeout(() => {
      restartScroll()

      ReactDOM.unmountComponentAtNode(toast)
      document.body.removeChild(toast)
      if (typeof callback === 'function') {
        callback()
      }
    }, duration)

    ReactDOM.render(<PopupMinLayer
      content={content}
      height={document.body.clientHeight}
      layer={layer}
      node={toast} />, toast)

    disableScroll()
  },
}
