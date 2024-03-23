/*
 * @desc:
 * @Author: Jace
 * @Date: 2024-03-23 16:16:50
 * @LastEditors: Jace
 * @LastEditTime: 2024-03-23 20:15:58
 */
// v1
// const dom = document.createElement('div');
// dom.id = 'app'
// document.querySelector('#root').append(dom)

// const textNode = document.createTextNode('')
// textNode.nodeValue = 'app'
// dom.append(textNode)

// v2 react -vdom js object

// const textEl = {
//   type: 'YEXT_ELEMENT',
//   props: {
//     nodeValue: 'app',
//     children: []
//   }
// }

//


// const el = {
//   type: 'div',
//   props: {
//     id: 'app',
//     children: [textEl]
//   }
// }


// function createElement (type, props, ...children) {
//   return {
//     type,
//     props: {
//       ...props,
//       children: children.map(child => {
//         return typeof child === 'string' ? createTextNode(child) : child
//       })
//     }
//   }
// }

// const dom = document.createElement(el.type);
// dom.id = el.props.id
// document.querySelector('#root').append(dom)

// const textNode = document.createTextNode('')
// textNode.nodeValue = textEl.props.nodeValue
// dom.append(textNode)

// const textEl = createTextNode('app')
// const App = createElement('div', { id: 'app' }, textEl)

// const dom = document.createElement(App.type)
// dom.id = App.props.id
// document.querySelector('#root').append(dom)

// const textNode = document.createTextNode('')
// textNode.nodeValue = textEl.props.nodeValue
// dom.append(textNode)


// function render (el, container) {
//   const dom = el.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(el.type)
//   // 设置props id class
//   Object.keys(el.props).forEach((key) => {
//     if (key !== 'children') {
//       dom[key] = el.props[key]
//     }
//   })

//   const children = el.props.children

//   children.forEach((child) => {
//     render(child, dom)
//   })

//   container.append(dom)
// }

// const textEl = createTextNode('app')
// const App = createElement('div', { id: 'app' }, 'app', '111')
// render(App, document.querySelector('#root'))


import ReactDOM from "./core/reactDom.js"
import App from './App.js'

ReactDOM.createRoot(document.querySelector('#root')).render(App)