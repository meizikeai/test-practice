function AvatarUpload (options) {
  let recordObject = null

  const CreateAvatar = function () {
    this.init()
  }

  CreateAvatar.prototype = {
    /**
     * 初始化
     * @method init
     * @param null
     * @return null
     */
    init: function () {
      this.product = ''
      this.handleInfo()
      this.createNode()
      this.bindEvent()
    },
    /**
     * 处理数据
     * @method handleInfo
     * @param null
     * @return null
     */
    handleInfo: function () {
      let self = this

      self.defaults = {
        width: 320,
        height: 320,
        circular: 160,
        initial: "",
        barHeight: 50,
        scale: 1,
        callback: function (data) {
          // console.log(data)
        }
      }

      if (options && typeof options == "object") {
        for (let i in options) {
          self.defaults[i] = options[i]
        }
      }

      self.place = {
        gx: 0,
        gy: 0,
        gw: self.defaults.width,
        gh: self.defaults.height
      }

      self.start = {
        x: 0,
        y: 0
      }

      self.move = {
        l: 0,
        t: 0
      }

      self.distance = {}

      self.first = true
    },
    /**
     * 创建所需的节点
     * @method createNode
     * @param null
     * @return null
     */
    createNode: function () {
      const self = this

      const defaults = self.defaults
      const template = document.createElement("div")

      template.className = "avatar-updata"
      template.innerHTML = '<div class="avatar-box">' +
        // '    <div class="avatar-head">设置头像</div>' +
        '    <div class="avatar-main">' +
        '        <div class="avatar-love"></div>' +
        '    </div>' +
        '    <div class="avatar-tips"></div>' +
        '    <div class="avatar-foot">' +
        '        <div class="left"><span class="avatar-select">选择图片</span></div>' +
        '        <div class="right"><span class="avatar-finished">裁剪图片</span></div>' +
        '        <input type="file" class="avatar-select-file" accept="image/*" capture="camera" />' +
        '    </div>' +
        '</div>' +
        '<div class="avatar-cure">' +
        '    <h3>裁切的图片</h3>' +
        '    <div>' +
        '        <img src="" alt="" />' +
        '    </div>' +
        '</div>' +
        '<a class="avatar-url" href="" target="_blank"></a>' +
        '<div class="avatar-submit">' +
        '    <button class="avatar-file" type="button">Click This</button>' +
        '</div>'

      document.body.appendChild(template)

      self.avatarbox = template.querySelector(".avatar-box")
      self.avatarmain = template.querySelector(".avatar-main")
      self.avatarlove = template.querySelector(".avatar-love")
      self.avatartips = template.querySelector(".avatar-tips")
      self.avatarfile = template.querySelector(".avatar-file")
      self.avatarurl = template.querySelector(".avatar-url")

      //创建多个准备
      let id = null
      if (!self.avatarlove.getAttribute("id")) {
        id = "curbox" + Date.parse(new Date())
        self.avatarlove.setAttribute("id", id)
      } else {
        id = self.avatarlove.getAttribute("id")
      }

      //判断宽高、并根据屏幕重置
      // if (self.avatarmain.clientWidth + 20 >= defaults.width) {
      //   self.defaults.width = self.avatarmain.clientWidth - 20
      // }

      self.defaults.width = self.avatarlove.clientWidth
      self.defaults.height = defaults.width
      self.defaults.circular = defaults.width / 2

      self.place = {
        gx: 0,
        gy: 0,
        gw: self.defaults.width,
        gh: self.defaults.circular
      }

      self.avatarlove.style.cssText = "width:" + defaults.width + "px;height:" + defaults.height + "px"

      //创建初始化背景
      if (defaults.initial === "") {
        const canvasText = document.createElement("canvas")
        const canvasInitial = canvasText.getContext("2d")

        canvasText.setAttribute("width", defaults.circular * 2)
        canvasText.setAttribute("height", defaults.circular * 2)

        canvasInitial.font = "12px Arial"
        canvasInitial.textAlign = "center"
        canvasInitial.fillStyle = "#e0e0e0"
        canvasInitial.fillText("请先选择图片", defaults.circular, defaults.circular)

        defaults.initial = canvasText.toDataURL("image/png")
      }

      //矩形选框位置参数
      self.position = {
        l: (defaults.width - defaults.circular * 2) * 0.5,
        t: (defaults.height - defaults.circular * 2) * 0.5,
        r: (defaults.width - defaults.circular * 2) * 0.5 + defaults.circular * 2,
        b: (defaults.height - defaults.circular * 2) * 0.5 + defaults.circular * 2
      }

      //获取图片信息
      self.picture = new Image()
      self.picture.src = defaults.initial

      self.picture.onload = function () {
        self.createDesk(this)
      }
    },
    /**
     * 事件绑定
     * @method bindEvent
     * @param null
     * @return null
     */
    bindEvent: function () {
      const self = this
      const AddListener = function (el, type, fn, capture) {
        if (el && el.addEventListener) {
          el.addEventListener(type, fn, capture)
        } else if (el && el.attachEvent) {
          el.attachEvent("on" + type, fn)
        }
      }

      const select = self.avatarbox.querySelector(".avatar-select")
      const finished = self.avatarbox.querySelector(".avatar-finished")
      const selectfile = self.avatarbox.querySelector(".avatar-select-file")

      //触控移动
      AddListener(self.avatarlove, "touchstart", function (e) {
        e.preventDefault()

        const touches = e.changedTouches[0]

        self.start.x = parseInt(touches.clientX)
        self.start.y = parseInt(touches.clientY)

        if (e.touches.length > 1) {
          self.distance.start = self.getDistance({
            x: e.touches[0].screenX,
            y: e.touches[0].screenY
          }, {
            x: e.touches[1].screenX,
            y: e.touches[1].screenY
          })
        }
      })

      AddListener(self.avatarlove, "touchmove", function (e) {
        e.preventDefault()

        self.twotouch = false

        if (self.first) {
          return false
        }

        const position = self.position
        const place = self.place
        const move = self.move

        const count = e.touches.length
        let touches = null

        if (count === 1) {
          touches = e.changedTouches[0]

          const distx = parseInt(touches.clientX) - self.start.x
          const disty = parseInt(touches.clientY) - self.start.y

          move.x = place.gx + distx
          move.y = place.gy + disty

          if (move.x > position.l) {
            move.x = position.l
          }
          if (move.y > position.t) {
            move.y = position.t
          }

          if (move.x + place.gw < position.r) {
            move.x = position.r - place.gw
          }
          if (move.y + place.gh < position.b) {
            move.y = position.b - place.gh
          }

          self.avatarcrop.style.backgroundPosition = move.x + "px " + move.y + "px"
        } else if (count === 2) {
          self.twotouch = true

          touches = e.touches

          self.distance.stop = self.getDistance({
            x: touches[0].screenX,
            y: touches[0].screenY
          }, {
            x: touches[1].screenX,
            y: touches[1].screenY
          })

          let scale = self.distance.stop / self.distance.start

          scale = scale > 2 ? 2 : scale
          scale = scale < 0 ? 0.5 : scale

          if (place.gw * scale >= position.r * 2 && place.gh * scale >= position.r * 2) {
            const ngw = place.gw * scale
            const ngh = place.gh * scale

            //定位 防止超出选区
            move.x = place.gx * scale
            move.y = place.gy * scale

            move.x = move.x - (ngw - place.gw) / 2
            move.y = move.y - (ngh - place.gh) / 2

            self.handleAlert('move.x:' + move.x + ' move.y:' + move.y)

            if (move.x > position.l) {
              move.x = position.l
            }

            if (move.y > position.t) {
              move.y = position.t
            }

            //宽度小于选区
            if (move.x + ngw < position.r) {
              move.x = position.r - ngw + 1
            }
            //高度小于选区
            if (move.y + ngh < position.b) {
              move.y = position.b - ngh + 1
            }

            self.avatarcrop.style.backgroundSize = ngw + "px " + ngh + "px"
            self.avatarcrop.style.backgroundPosition = move.x + "px " + move.y + "px"
          }
        }
      })

      AddListener(self.avatarlove, "touchend", function (e) {
        if (self.twotouch) {
          const size = self.avatarcrop.style.backgroundSize
          const bgsize = size.split(" ")

          self.place.gx = parseInt(self.avatarcrop.style.backgroundPositionX)
          self.place.gy = parseInt(self.avatarcrop.style.backgroundPositionY)
          self.place.gw = parseInt(bgsize[0])
          self.place.gh = parseInt(bgsize[1])
        } else {
          self.place.gx = self.move.x
          self.place.gy = self.move.y
        }

      })

      //按钮事件
      AddListener(select, "click", function () {
        if (!self.first) {
          self.place = {
            gx: 0,
            gy: 0,
            gw: self.defaults.width,
            gh: self.defaults.height
          }

          self.start = {
            x: 0,
            y: 0
          }

          self.move = {
            l: 0,
            t: 0
          }

          self.distance = {}

          self.first = true
        }
        selectfile.click()
      })

      AddListener(finished, "click", function () {
        self.collectPicture()
      })

      AddListener(selectfile, "change", function (e) {
        const file = e.target.files[0]

        //用户可能取消操作
        if (e.target.files.length <= 0) {
          return false
        }

        //判断文件类型
        if (!/image\/\w+/.test(file.type)) {
          self.handleAlert("请确保文件为图像类型")
          return false
        } else {
          self.avatartips.style.display = "none"
        }

        //检查是否支持html5里的FileReader对象
        if (window.FileReader) {
          const reader = new FileReader()

          reader.onloadstart = function (e) {
            select.innerHTML = "重选"
          }

          reader.onloadend = function (e) {
            var source = new Image()

            source.src = e.target.result

            source.onload = function () {
              self.move = {
                l: 0,
                t: 0
              }
              select.innerHTML = "重选"

              self.resetPicture(source)
            }
          }

          reader.readAsDataURL(file)
        } else {
          self.handleAlert("亲，浏览器不支持window.FileReader对象，处理出错了哦！")
        }
      })

      //界面变化
      AddListener(window, "resize", function () {
        setTimeout(() => {
          recordObject = null
          self.avatarbox.innerHTML = ""
          recordObject = new CreateAvatar(options)
        }, 200)
      })

      AddListener(self.avatarfile, "click", function () {
        if (self.product) {
          setAjax({
            data: {
              base: self.product
            },
            method: 'post',
            url: '/upload/picture/file',
            callback: res => {
              const result = JSON.parse(res)
              self.avatarurl.href = result.data
              self.avatarurl.innerHTML = `${location.protocol}//${location.host}${result.data}`
              console.log(result)
            }
          })
        }
      })
    },
    /**
     * 显示选择的图片
     * @method resetPicture
     * @param source {node} 节点
     * @return null
     */
    resetPicture: function (source) {
      const self = this
      const defaults = self.defaults

      if (source.naturalWidth < defaults.circular * 2 || source.naturalHeight < defaults.circular * 2) {
        self.handleAlert("图片的最佳大小为" + defaults.circular * 2 + "*" + defaults.circular * 2 + "像素")
      } else {
        self.avatartips.style.display = "none"
      }

      const newImgData = self.compressPicture(source)

      const temporary = new Image()
      temporary.src = newImgData

      temporary.onload = function () {
        if (temporary.width > defaults.circular * 2 * 2 && temporary.height > defaults.circular * 2 * 2) {
          self.place.gw = temporary.width / 2
          self.place.gh = temporary.height / 2
        } else {
          self.place.gw = temporary.width
          self.place.gh = temporary.height
        }

        const position = [-(self.place.gw - defaults.width) / 2, -(self.place.gh - defaults.height) / 2]
        self.place.gx = position[0]
        self.place.gy = position[1]

        self.avatarcrop.style.backgroundImage = "url(" + newImgData + ")"
        self.avatarcrop.style.backgroundSize = self.place.gw + "px " + self.place.gh + "px"
        self.avatarcrop.style.backgroundPosition = position[0] + "px " + position[1] + "px"

        self.picture = temporary

        self.first = false
      }
    },
    /**
     * 对选择的图片进行压缩
     * @method compressPicture
     * @param source {node} 节点 / quality {String}
     * @return img.src
     */
    compressPicture: function (source) {
      const self = this
      const defaults = self.defaults
      const MaxW = defaults.width * 2
      const MaxH = defaults.height * 2

      let imageWidth = 0
      let imageHeight = 0

      if (source.width > source.height) {
        if (source.width < defaults.width) {
          MaxW = defaults.width + defaults.width / 2
        }
        imageWidth = MaxW
        imageHeight = Math.round(MaxW * (source.height / source.width))
      } else if (source.width < source.height) {
        if (source.height < defaults.height) {
          MaxH = defaults.height + defaults.height / 2
        }
        imageHeight = MaxH
        imageWidth = Math.round(MaxH * (source.width / source.height))
      } else if (source.width === source.height) {
        if (source.width < defaults.width) {
          MaxW = defaults.width + defaults.width / 2
          MaxH = MaxW
        }
        imageWidth = MaxW
        imageHeight = MaxH
      }
      const quality = imageWidth / source.width

      const canvas = document.createElement("canvas")
      canvas.width = imageWidth
      canvas.height = imageHeight

      const con = canvas.getContext("2d")
      con.clearRect(0, 0, canvas.width, canvas.height)
      con.drawImage(source, 0, 0, canvas.width, canvas.height)

      return canvas.toDataURL("image/png", quality)
    },
    /**
     * 收集用户操作后的图片数据
     * @method collectPicture
     * @param null
     * @return Picture.toDataURL
     */
    collectPicture: function () {
      var self = this
      var picture = self.picture
      var defaults = self.defaults
      var place = self.place

      if (self.first) {
        self.handleAlert("还没有可选的图片~")
        return false
      } else {
        self.avatartips.style.display = "none"
      }

      var canvas = document.createElement("canvas")
      var canvasContext = canvas.getContext("2d")

      canvas.width = defaults.width
      canvas.height = defaults.height

      canvasContext.fillStyle = "#eee"
      canvasContext.fillRect(0, 0, canvas.width, canvas.height)

      var cx = (defaults.width * 0.5 - defaults.circular - place.gx) * picture.width / place.gw
      var cy = (defaults.height * 0.5 - defaults.circular - place.gy) * picture.height / place.gh
      var cw = defaults.circular * 2 * picture.width / place.gw
      var ch = defaults.circular * 2 * picture.height / place.gh

      var nx = 0,
        ny = 0,
        nw = 0,
        nh = 0
      var dx = 0,
        dy = 0,
        dw = 0,
        dh = 0

      if (cx < 0) {
        nx = 0
        if (cx + cw < picture.width) {
          nw = cx + cw
        } else {
          nw = picture.width
        }
      } else {
        nx = cx
        if (cx + cw < picture.width) {
          nw = cw
        } else {
          nw = picture.width - cx
        }
      }

      if (cy < 0) {
        ny = 0
        if (cy + ch < picture.height) {
          nh = cy + ch
        } else {
          nh = picture.height
        }
      } else {
        ny = cy
        if (cy + ch < picture.height) {
          nh = ch
        } else {
          nh = picture.height - cy
        }
      }

      dx = (cx < 0 ? -cx : 0) * place.gw / picture.width
      dy = (cy < 0 ? -cy : 0) * place.gh / picture.height
      dw = (nw * place.gw / picture.width < defaults.circular * 2 ? nw * place.gw / picture.width : defaults.circular * 2)
      dh = (nh * place.gh / picture.height < defaults.circular * 2 ? nh * place.gh / picture.height : defaults.circular * 2)

      canvasContext.drawImage(picture, nx, ny, nw, nh, dx, dy, dw, dh)

      // context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height)
      // 参数-描述
      // img        规定要使用的图像、画布或视频。
      // sx   	    可选。开始剪切的 x 坐标位置。
      // sy   	    可选。开始剪切的 y 坐标位置。
      // swidth	    可选。被剪切图像的宽度。
      // sheight	  可选。被剪切图像的高度。
      // x	        在画布上放置图像的 x 坐标位置。
      // y	        在画布上放置图像的 y 坐标位置。
      // width	    可选。要使用的图像的宽度。（伸展或缩小图像）
      // height	    可选。要使用的图像的高度。（伸展或缩小图像）

      if (defaults.callback && typeof defaults.callback == "function") {
        self.product = canvas.toDataURL()
        defaults.callback(self.product)
      }
    },
    /**
     * 创建、加载选择区域
     * @method createDesk
     * @param picture {node} 节点
     * @return null
     */
    createDesk: function (picture) {
      var self = this
      var defaults = self.defaults
      var avatarmask = document.createElement("div")
      var canvasmask = document.createElement("canvas")
      var avatarcrop = document.createElement("div")

      self.avatarcrop = avatarcrop

      avatarmask.className = "avatar-mask"
      canvasmask.className = "canvas-mask"
      avatarcrop.className = "avatar-crop"

      avatarcrop.style.cssText = "width:" + defaults.width +
        "px;height:" + defaults.height +
        "px;background-image:url(" + picture.src + ");background-size:" + picture.width + "px " + picture.height +
        "px;background-position:0px 0px;background-repeat:no-repeat;"

      avatarmask.appendChild(canvasmask)

      self.avatarlove.appendChild(avatarmask)
      self.avatarlove.appendChild(avatarcrop)

      var canvasdraw = canvasmask.getContext("2d")

      canvasmask.setAttribute("width", defaults.width)
      canvasmask.setAttribute("height", defaults.height)

      //画遮罩矩形
      canvasdraw.beginPath()
      canvasdraw.rect(0, 0, defaults.width, defaults.height)
      canvasdraw.globalAlpha = 0.8
      canvasdraw.fill()
      canvasdraw.closePath()

      //画一个实心圆
      canvasdraw.globalCompositeOperation = "destination-out"
      canvasdraw.beginPath()
      canvasdraw.arc(defaults.width * 0.5, defaults.height * 0.5, defaults.circular, 0, (Math.PI / 180) * 360, false) //圆形选框
      canvasdraw.fill()
      canvasdraw.closePath()

      //实心矩形
      canvasdraw.beginPath()
      canvasdraw.rect((defaults.width - defaults.circular * 2) * 0.5, (defaults.height - defaults.circular * 2) * 0.5, defaults.circular * 2, defaults.circular * 2) //矩形选框
      canvasdraw.fill()
      canvasdraw.closePath()

      //画矩形选框
      canvasdraw.globalCompositeOperation = "source-over"
      canvasdraw.beginPath()
      canvasdraw.lineWidth = 1 //外框
      canvasdraw.strokeStyle = "#fff" //外框
      canvasdraw.strokeRect((defaults.width - defaults.circular * 2) * 0.5, (defaults.height - defaults.circular * 2) * 0.5, defaults.circular * 2, defaults.circular * 2) //矩形选框
      canvasdraw.fill()
      canvasdraw.closePath()

      //绘制线条
      canvasdraw.beginPath()
      canvasdraw.moveTo((defaults.width - defaults.circular * 2) * 0.5 + defaults.circular * 2 / 3 + 0.5, (defaults.height - defaults.circular * 2) * 0.5)
      canvasdraw.lineTo((defaults.width - defaults.circular * 2) * 0.5 + defaults.circular * 2 / 3 + 0.5, (defaults.height - defaults.circular * 2) * 0.5 + defaults.circular * 2) //竖线1
      canvasdraw.moveTo((defaults.width - defaults.circular * 2) * 0.5 + 2 * defaults.circular * 2 / 3 + 0.5, (defaults.height - defaults.circular * 2) * 0.5)
      canvasdraw.lineTo((defaults.width - defaults.circular * 2) * 0.5 + 2 * defaults.circular * 2 / 3 + 0.5, (defaults.height - defaults.circular * 2) * 0.5 + defaults.circular * 2) //竖线2
      canvasdraw.moveTo((defaults.width - defaults.circular * 2) * 0.5, (defaults.height - defaults.circular * 2) * 0.5 + defaults.circular * 2 / 3 + 0.5)
      canvasdraw.lineTo((defaults.width - defaults.circular * 2) * 0.5 + defaults.circular * 2, (defaults.height - defaults.circular * 2) * 0.5 + defaults.circular * 2 / 3 + 0.5) //竖线2
      canvasdraw.moveTo((defaults.width - defaults.circular * 2) * 0.5, (defaults.height - defaults.circular * 2) * 0.5 + 2 * defaults.circular * 2 / 3 + 0.5)
      canvasdraw.lineTo((defaults.width - defaults.circular * 2) * 0.5 + defaults.circular * 2, (defaults.height - defaults.circular * 2) * 0.5 + 2 * defaults.circular * 2 / 3 + 0.5) //竖线2
      canvasdraw.stroke()
      canvasdraw.closePath()
    },
    handleAlert: function (value) {
      var self = this
      self.avatartips.innerHTML = value
      self.avatartips.style.display = "block"
    },
    getOrigin: function (first, second) {
      return {
        x: (first.x + second.x) / 2,
        y: (first.y + second.y) / 2
      }
    },
    /**
     * [getDistance description]
     * @param  {Object} start [触点1]
     * @param  {Object} stop  [触点2]
     * @return {Number}       [比例距离]
     */
    getDistance: function (start, stop) {
      return Math.sqrt(Math.pow((stop.x - start.x), 2) + Math.pow((stop.y - start.y), 2))
    },
    /**
     * [getScale description]
     * @param  {Object} start [触点1]
     * @param  {Object} stop  [触点2]
     * @return {Number}       [缩放比例]
     */
    getScale: function (start, stop) {
      return this.getDistance(start[0], start[1]) / this.getDistance(stop[0], stop[1])
    }
  }

  recordObject = new CreateAvatar(options)
}

function setAjax (obj) {
  const data = obj.data || ''
  const fn = obj.callback || function () { }
  const method = obj.method || "get"
  const type = obj.type || 'json'
  const url = obj.url || ""

  const xmlhttp = new XMLHttpRequest()

  xmlhttp.open(method, url, true)

  if (type === 'json') {
    xmlhttp.setRequestHeader("Content-type", "application/json")
  }

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        fn(xmlhttp.responseText)
      }
    }
  }

  xmlhttp.send(method === 'post' ? JSON.stringify(data) : '')
}

(function () {
  const doScroll = document.documentElement.doScroll || false
  const triggerEvent = doScroll ? "onreadystatechange" : "DOMContentLoaded"

  let _timer = null
  let _ready = false
  let readyChangeHandler = function () { }

  const add = function (el, type, fn, capture) {
    if (el && el.addEventListener) {
      el.addEventListener(type, fn, capture)
    } else if (el && el.attachEvent) {
      el.attachEvent("on" + type, fn)
    }
  }

  const remove = function (el, type, fn, capture) {
    if (el && el.removeEventListener) {
      try {
        el.removeEventListener(type, fn, capture)
      } catch (e) {
        console.log(e)
      }
    } else if (el && el.detachEvent) {
      el.detachEvent("on" + type, fn)
    }
  }

  const _readyhandler = function () {
    AvatarUpload({
      callback: function (data) {
        // 只把图片展示出来，回传服务器之类的自己加吧~
        const avatarcure = document.querySelector(".avatar-cure")
        if (avatarcure) {
          avatarcure.querySelector("img").src = data
          avatarcure.style.display = "block"
          console.log("生成的图片：" + data)
        }
      }
    })
  }

  if (doScroll) {
    if (self !== self.top) {
      readyChangeHandler = function () {
        if (document.readyState == "complete") {
          _ready = true
          _readyhandler()
          remove(document, triggerEvent, readyChangeHandler)
        }
      }
      add(document, triggerEvent, readyChangeHandler)
    } else {
      _timer = setInterval(function () {
        try {
          document.documentElement.doScroll("left")
          clearInterval(_timer)
          _timer = null
          _ready = true
          _readyhandler()
        } catch (domNotReady) {
          console.log(domNotReady)
        }
      }, 40)
    }
  } else {
    readyChangeHandler = function () {
      _ready = true
      _readyhandler()
      remove(document, triggerEvent, readyChangeHandler)
    }
    add(document, triggerEvent, readyChangeHandler)
  }
}())