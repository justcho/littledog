const string = `
.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}
.skin {
    background: #468291;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dog {
    width: 160px;
    height: 186px;
    position: relative;
}
@keyframes head {
    0% {
        transform: rotate(0deg);
    }
    30% {
        transform: rotate(0deg);
    }
    40% {
        transform: rotate(-20deg);
    }
    80% {
        transform: rotate(-20deg);
    }
    90% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.dog-head {
    width: 100px;
    height: 90px;
    position: absolute;
    z-index: 5;
    top: 30px;
    left: calc(50% - 50px);
    background-color: #efc092;
    border-radius: 50%;
    animation: head 6s linear infinite;
}
.dog-head:before,
.dog-head:after {
    content: "";
    width: 79px;
    height: 50px;
    position: absolute;
    z-index: 5;
    top: 44px;
    background-color: #efc092;
    border-radius: 50%;
}
.dog-head:before {
    left: -7px;
    transform: rotate(50deg);
}
.dog-head:after {
    right: -7px;
    transform: rotate(-49deg);
}
.dog-mouth {
    width: 60px;
    height: 35px;
    background-color: #fee2d2;
    position: absolute;
    bottom: -15px;
    left: 20px;
    z-index: 10;
    border-radius: 50%;
}
.dog-mouth:after {
    content: "";
    width: 10px;
    height: 40px;
    background-color: #fee2d2;
    position: absolute;
    bottom: 30px;
    left: 24px;
    z-index: 10;
    border-radius: 20px;
}
.dog-nose {
    width: 16px;
    height: 10px;
    position: absolute;
    top: 8px;
    left: calc(50% - 8px);
    background-color: #000;
    border-radius: 50%;
}
@keyframes tongue {
    0% {
        height: 10px;
    }
    30% {
        height: 10px;
    }
    40% {
        height: 20px;
    }
    60% {
        height: 10px;
    }
    80% {
        height: 20px;
    }
    90% {
        height: 10px;
    }
    100% {
        height: 10px;
    }
}
.dog-tongue {
    width: 20px;
    height: 10px;
    position: absolute;
    top: 24px;
    left: calc(50% - 10px);
    background-color: #f4a4ad;
    border-radius: 0 0 10px 10px;
    animation: tongue 4s linear infinite;
}
.dog-eyes {
    width: 10px;
    height: 16px;
    background-color: #000;
    position: absolute;
    top: 52px;
    left: 28px;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 33px 0px 0px #000;
}
.dog-eyes::after {
    content: "";
    width: 92px;
    height: 50px;
    position: absolute;
    top: -50px;
    left: -24px;
    background-color: #efc092;
    border-radius: 50%;
}
.dog-ears {
    width: 80px;
    height: 50px;
    position: absolute;
    z-index: 0;
    top: -2px;
    border-radius: 150px 0 150px 0;
    background-color: #efc092;
}
.dog-ears::after {
    content: "";
    width: 50px;
    height: 30px;
    position: absolute;
    z-index: 0;
    top: 8px;
    left: 20px;
    border-radius: 150px 0 150px 0;
    transform: rotate(-176deg);
    background-color: #fee2d2;
}
.ears-left {
    left: -22px;
    transform: rotate(-105deg);
}
.ears-right {
    right: -22px;
    transform: rotate(-22deg);
}
.dog-body {
    width: 54px;
    height: 60px;
    position: absolute;
    top: 120px;
    left: calc(50% - 35px);
    background-color: #d58b4e;
    border-radius: 49px 0 0 20px;
}
.dog-body::before {
    content: "";
    width: 50px;
    height: 60px;
    position: absolute;
    top: 3px;
    left: calc(50% - 17px);
    background-color: #efbf8e;
    border-radius: 100px 100px 0 0;
}
.dog-body::after {
    content: "";
    width: 15px;
    height: 30px;
    position: absolute;
    top: 32px;
    left: 28px;
    background-color: #d58b4e;
    border-radius: 100px 100px 0 0;
}
.dog-foot {
    width: 20px;
    height: 13px;
    position: absolute;
    z-index: 5;
    bottom: -3px;
    left: 8px;
    background-color: #fce2d3;
    border-radius: 10px 10px 0 0;
    box-shadow: 33px 0 0 #fce2d3;
}
@keyframes tail {
    0% {
        transform: rotate(-47deg);
    }
    100% {
        transform: rotate(-57deg);
    }
}
.dog-tail {
    width: 10px;
    height: 50px;
    position: absolute;
    top: 120px;
    left: calc(50% - 45px);
    background-color: #ecc093;
    transform: rotate(-47deg);
    border-radius: 10px 0 0 0px / 50px 0 0 0px;
    animation: tail .08s infinite alternate;
}

`

const player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0, player.n)
    player.ui.demo2.innerHTML = string.substr(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()

