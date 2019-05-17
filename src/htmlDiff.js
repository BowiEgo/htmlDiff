import {
  nodeToObj
} from "diff-dom"
import DiffDOM from './diffDom'
import stringToObj from './stringToObj'
import * as _ from 'lodash'
import * as fastDiff from 'fast-diff'

const diffDOM = new DiffDOM
const diffStr = fastDiff.default

export function htmlDiff(from, to) {
  from = `<div>${from}</div>`
  to = `<div>${to}</div>`
  let diff = diffDOM.diff(from, to)
  let fromNode = stringToObj(from)
  let toNode = stringToObj(to)
  let cloneNode = _.cloneDeep(toNode)
  if (!cloneNode.childNodes) {
    cloneNode.childNodes = []
  }
  console.log('cloneNode', cloneNode)
  let rmArr = []

  console.log('htmlDiff', diff, fromNode, toNode)
  diff.forEach(d => {
    console.log('d', d)
    if (d.action === 'modifyTextElement') {
      let s = diffStr(d.oldValue, d.newValue)
      let c = getFromVirtualRoute(cloneNode, d.route)
      console.log('s', s, c)
      let newNodes = s.map(item => {
        if (item[0] === 0) {
          return spanObj({
            class: 'equal',
            text: item[1]
          })
        } else if (item[0] === 1) {
          return spanObj({
            class: 'insert',
            text: item[1]
          })
        } else if (item[0] === -1) {
          return spanObj({
            class: 'delete',
            text: item[1]
          })
        }
      })
      c.parentNode.childNodes = newNodes
    } else if (d.action === 'addElement') {
      let c = getFromVirtualRoute(cloneNode, d.route)
      insertAttribute(c.node, {
        class: 'insert'
      })
    } else if (d.action === 'removeElement') {
      let c = getFromVirtualRoute(fromNode, d.route)
      let p = getFromVirtualRoute(cloneNode, d.route).parentNode
      console.log('p', p, d)
      insertAttribute(d.element, {
        class: 'delete'
      })
      rmArr.push({
        node: _.cloneDeep(d.element),
        parentNode: p,
        idx: c.nodeIndex
      })
    }
  })
  console.log('rmArr', rmArr)
  rmArr.forEach(item => {
    console.log('11111', item)
    item.parentNode.childNodes.splice(item.idx, 0, item.node)
  })
  console.log('cloneNode', cloneNode)
  let resultNode = objToNode(cloneNode, false, {
    document: document
  })
  console.log(resultNode)
  return resultNode.innerHTML
}

export function objToNode(objNode, insideSvg, options) {
  console.log('objNode', objNode)
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
      console.log('aaa', objNode.attributes, objNode)
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
  console.log('getFromVirtualRoute', node, route)
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

function spanObj (opts) {
  return {
    nodeName: 'span',
    attributes: {
      class: opts.class || ''
    },
    childNodes: [
      {
        nodeName: '#text',
        data: opts.text
      }
    ]
  }
}

function insertAttribute (node, attr) {
  console.log('insertAttribute', node, attr)
  if (node.attributes) {
    Object.keys(attr).forEach(key => {
      if (node.attributes.hasOwnProperty(key)) {
        console.log('key', key)
        if (node.attributes[key].indexOf(attr[key]) === -1) {
          node.attributes[key] += ` ${attr[key]}`
        }
      } else {
        node.attributes[key] = `${attr[key]}`
      }
    })
  } else {
    node.attributes = attr
  }
}

export default htmlDiff