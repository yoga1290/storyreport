
let queue = []

module.exports = {
  save(obj) {
    let res = queue.length
    queue.push(obj)
    return res
  },

  findByState (state) {
    return queue[state]
  }
}
