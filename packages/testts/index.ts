var deepAssign = require('clone-deep')
function test(str: string) {
  let obj = deepAssign({ key: str })
  return obj
}
export default test
