import React from "react"
import ReactDOM from "react-dom"
import htmlDiff from '../src/htmlDiff'

class HelloMessage extends React.Component {
  render() {
    let domA = '<div><figure class="image"><img style="" src="http://122.152.201.59:880/img/屏幕快照 2019-01-25 上午9.44.38.png"></figure><p>&nbsp;</p><p>&nbsp;</p><p>服务啊分为分为f</p></div>'

    let domB = '<div><figure class="image"><img style="display:block;" src="http://122.152.201.59:880/img/屏幕快照 2019-01-25 上午9.44.38.png"></figure><p>&nbsp;</p><p>&nbsp;</p><p>ooooo</p><p>服务啊为分为ffafaaaw</p></div>'

    function createDiffDOM () {
      return { __html: htmlDiff(domA, domB) }
    }
    return <div dangerouslySetInnerHTML={createDiffDOM()}></div>
  }
}

var rootNode = document.getElementById("app")
ReactDOM.render(<HelloMessage name="World" />, rootNode)
