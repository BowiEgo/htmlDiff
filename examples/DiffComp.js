import React from "react"
import htmlDiff from '../src/htmlDiff'

export default class DiffComp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      htmlFrom: `<div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div style=\"font-size: 12px; width: 100%; overflow: auto;font-family:  'Microsoft YaHei', '微软雅黑', '华文黑体',STHeiti,'Microsoft JhengHei',sans-serif;\"><table cellspacing=\"0\" cellpadding=\"0\" border=\"1\" style=\"table-layout:fixed; border-collapse:collapse; border: 1px solid #ccc; width:620px;\"><tbody><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aaa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">dd</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">dd</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aaa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">ddd</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">dd</div></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr></tbody></table></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><span style=\"font-family:SimSun,STSong;\">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"heading\" yne-bulb-level=\"a\" id=\"9088-1550668870077\" style=\"white-space: pre-wrap;\"><span style=\"font-size:32px;font-weight:bold;\">测试测试测试测试测试测试测试测试测试测试</span></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\">测试测试测试<span style=\"text-decoration: line-through;\">测试测试测试测试测试测试测试测试测试测试测试测试测试</span></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><span style=\"text-decoration: line-through;\">范德萨发</span></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"image\" style=\"width:620;height:413;\"><img data-media-type=\"image\" src=\"https://note.youdao.com/yws/open/resource/download/1360/2A0A14591766486685BAF6884FC7F970?oauth_token=f19d5c3bd9b7587d8dc4c49f3550d352\" alt=\"\" style=\"width:620px;\"></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div>`,
      htmlTo: `<div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div style=\"font-size: 12px; width: 100%; overflow: auto;font-family:  'Microsoft YaHei', '微软雅黑', '华文黑体',STHeiti,'Microsoft JhengHei',sans-serif;\"><table cellspacing=\"0\" cellpadding=\"0\" border=\"1\" style=\"table-layout:fixed; border-collapse:collapse; border: 1px solid #ccc; width:620px;\"><tbody><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aafewf</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aaaaaa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">dd</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">dd</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aaa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">aa</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">ddd</div></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><div class=\"table-cell-line\">dd</div></td></tr><tr><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td><td style=\"word-wrap: break-word;width: 124px;height: 40px;\"><br></td></tr></tbody></table></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\">测试测试测试测试测aojfowjf试测试测试测试测试测试测试测试测试测试测试测试测试</div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><span style=\"font-family:SimSun,STSong;\">测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"heading\" yne-bulb-level=\"a\" id=\"9088-1550668870077\" style=\"white-space: pre-wrap;\"><span style=\"font-size:32px;font-weight:bold;\">测试测试测试测试测试测试测试测试测试测试</span></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\">测试测试测试<span style=\"text-decoration: line-through;\">测试测试测试测试测试测试测试测试测试测试测试测试测试</span></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><span style=\"text-decoration: line-through;\">范德萨发</span></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div><div yne-bulb-block=\"image\" style=\"width:620;height:413;\"><img data-media-type=\"image\" src=\"https://note.youdao.com/yws/open/resource/download/1360/2A0A14591766486685BAF6884FC7F970?oauth_token=f19d5c3bd9b7587d8dc4c49f3550d352\" alt=\"\" style=\"width:620px;\"></div><div yne-bulb-block=\"paragraph\" style=\"white-space: pre-wrap;\"><br></div>`,
      htmlDiff: ''
    }
    this.updateHtmlDiff = this.updateHtmlDiff.bind(this)
  }

  updateHtmlDiff () {
    let { htmlFrom, htmlTo } = this.state

    this.setState({
      htmlDiff: htmlDiff(htmlFrom, htmlTo)
    })
  }

  render () {
    let { htmlFrom, htmlTo } = this.state

    return (
      <div>
        <div style={style.textContainer}>
          <textarea style={style.textarea}
            value={htmlFrom}
            onChange={(e) => {
              this.setState({
                htmlFrom: e.target.value
              })
            }}>
          </textarea>
          <textarea style={style.textarea}
            value={htmlTo}
            onChange={(e) => {
              this.setState({
                htmlTo: e.target.value
              })
            }}>
          </textarea>
        </div>
        <button style={style.button} onClick={this.updateHtmlDiff}>diff</button>
        <div style={style.result} dangerouslySetInnerHTML={{__html: this.state.htmlDiff}}></div>
      </div>
    )
  }
}

const style = {
  textContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  textarea: {
    display: 'inline-block',
    width: '40vw',
    height: '40vh'
  },
  button: {
    display: 'block',
    width: '160px',
    height: '30px',
    margin: '20px auto'
  },
  result: {
    width: '60vw',
    margin: '0 auto'
  }
}
