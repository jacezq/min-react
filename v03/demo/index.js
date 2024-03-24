/*
 * @desc:
 * @Author: Jace
 * @Date: 2024-03-24 20:56:06
 * @LastEditors: Jace
 * @LastEditTime: 2024-03-24 21:13:06
 */
let taskId = 1
function workLoop (deadline) {
  taskId++
  let shouldYield = false
  while (!shouldYield) {
    // run task

    console.log(`taskId:${taskId} run task`)
    shouldYield = deadline.timeRemaining() < 1
  }

  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)

