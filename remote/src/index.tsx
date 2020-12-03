import ('./spa').then((spa)=> {
  console.log(spa)
  spa.default('Remote')
})
