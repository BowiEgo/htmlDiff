import {
  DiffDOM,
  nodeToObj,
  stringToObj
} from "diff-dom"
import * as fastDiff from 'fast-diff'

const diffDOM = new DiffDOM
const diffStr = fastDiff.default

export function htmlDiff(from, to) {
  let diff = diffDOM.diff(from, to)
  let fromNode = stringToObj(from)
  let toNode = stringToObj(to)

  console.log('htmlDiff', diff, fromNode, toNode)
  diff.forEach(d => {
    if (d.action === 'modifyTextElement') {
      let s = diffStr(d.oldValue, d.newValue)
      let c = getFromVirtualRoute(fromNode, d.route)
      console.log('s', s, c)
      let newNodes = s.map(item => {
        if (item[0] === 0) {
          return {
            nodeName: 'span',
            attributes: {
              class: 'equal'
            },
            childNodes: [
              {
                nodeName: '#text',
                data: item[1]
              }
            ]
          }
        } else if (item[0] === 1) {
          return {
            nodeName: 'span',
            attributes: {
              class: 'insert'
            },
            childNodes: [
              {
                nodeName: '#text',
                data: item[1]
              }
            ]
          }
        } else if (item[0] === -1) {
          return {
            nodeName: 'span',
            attributes: {
              class: 'delete'
            },
            childNodes: [
              {
                nodeName: '#text',
                data: item[1]
              }
            ]
          }
        }
      })
      c.parentNode.childNodes = newNodes
      console.log('from-111', fromNode)
    } else if (d.action === 'addElement') {
      
    }
  })
  let resultNode = objToNode(fromNode, false, {
    document: document
  })
  console.log(resultNode)
  return resultNode.innerHTML
}

export function objToNode(objNode, insideSvg, options) {
  let node
  if (objNode.nodeName === '#text') {
    node = options.document.createTextNode(objNode.data)

  } else if (objNode.nodeName === '#comment') {
    node = options.document.createComment(objNode.data)
  } else {
    if (objNode.nodeName === 'svg' || insideSvg) {
      node = options.document.createElementNS('http://www.w3.org/2000/svg', objNode.nodeName)
      insideSvg = true
    } else {
      node = options.document.createElement(objNode.nodeName)
    }
    if (objNode.attributes) {
      Object.entries(objNode.attributes).forEach(([key, value]) => node.setAttribute(key, value))
    }
    if (objNode.childNodes) {
      objNode.childNodes.forEach(childNode => node.appendChild(objToNode(childNode, insideSvg, options)))
    }
    if (options.valueDiffing) {
      if (objNode.value) {
        node.value = objNode.value
      }
      if (objNode.checked) {
        node.checked = objNode.checked
      }
      if (objNode.selected) {
        node.selected = objNode.selected
      }
    }
  }
  return node
}

function getFromVirtualRoute(tree, route) {
  let node = tree
  console.log('getFromVirtualRoute', node)
  let parentNode
  let nodeIndex

  route = route.slice()
  while (route.length > 0) {
    if (!node.childNodes) {
      return false
    }
    nodeIndex = route.splice(0, 1)[0]
    parentNode = node
    node = node.childNodes[nodeIndex]
  }
  return {
    node,
    parentNode,
    nodeIndex
  }
}

export default htmlDiff