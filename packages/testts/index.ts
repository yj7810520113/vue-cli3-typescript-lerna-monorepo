var deepAssign = require('clone-deep')
function test(str: string): object {
  let obj = deepAssign({ key: str })
  return obj
}
export default test
