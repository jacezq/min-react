/*
 * @desc:
 * @Author: Jace
 * @Date: 2024-03-23 17:19:03
 * @LastEditors: Jace
 * @LastEditTime: 2024-03-23 18:45:20
 */

import React from './React.js'

const ReactDOM = {
  createRoot (container) {
    return {
      render (App) {
        React.render(App, container)
      }
    }
  }
}

export default ReactDOM