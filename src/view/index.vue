<template>
<div id='index'>
  <ul>
    <li @click='goDetail(item.id)' v-for='(item, index) in list' :key='index'>{{item.name}}</li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'index',
  data  () {
    return {
      list: [{id: 0, name: '全选/不选'},
        {id: 1, name: '购物车'},
        {id: 2, name: '时钟'},
        {id: 3, name: '计算器'}
      ]
    }
  },
  mounted () {
    /****************************************************/
    var obj = {
      'province': '浙江',
      'city': '杭州',
      'name': '西湖'
    }
    //  let item
    for (let str in obj) {
      console.log('key', str)
      console.log('value', obj[str])
    }
    var data = [{
      'province': '浙江',
      'city': '杭州',
      'name': '西湖'
    }, {
      'province': '四川',
      'city': '成都',
      'name': '锦里'
    }, {
      'province': '四川',
      'city': '成都',
      'name': '方所'
    }, {
      'province': '四川',
      'city': '阿坝',
      'name': '九寨沟'
    }]
    var transObject = function (tableData, keys) {
      let hashTable = {}
      let res = []
      for (let i = 0; i < tableData.length; i++) {
        if (!hashTable[tableData[i][keys[0]]]) {
          let len = res.push({
            value: tableData[i][keys[0]],
            children: []
          })
          // 在这里要保存key对应的数组序号,不然还要涉及到查找
          hashTable[tableData[i][keys[0]]] = { $$pos: len - 1 }
        }
        if (!hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]]) {
          let len = res[hashTable[tableData[i][keys[0]]].$$pos].children.push({
            value: tableData[i][keys[1]],
            children: []
          })
          hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]] = { $$pos: len - 1 }
        }
        res[hashTable[tableData[i][keys[0]]].$$pos].children[hashTable[tableData[i][keys[0]]][tableData[i][keys[1]]].$$pos].children.push({
          value: tableData[i][keys[2]]
        })
      }
      return res
    }
    var keys = ['province', 'city', 'name']
    console.log(transObject(data, keys))
    /* ***************处理**parent字段为空字符串的节点为根节点：*********利用了JavaScript里面的引用类型****************************/
    var input = {
      h3: {
        parent: 'h2',
        name: '副总经理(市场)'
      },
      h1: {
        parent: 'h0',
        name: '公司机构'
      },
      h7: {
        parent: 'h6',
        name: '副总经理(总务)'
      },
      h4: {
        parent: 'h3',
        name: '销售经理'
      },
      h2: {
        parent: 'h1',
        name: '总经理'
      },
      h8: {
        parent: 'h0',
        name: '财务总监'
      },
      h6: {
        parent: 'h4',
        name: '仓管总监'
      },
      h5: {
        parent: 'h4',
        name: '销售代表'
      },
      h0: {
        parent: '',
        name: 'root'
      }
    }
    var plain2Tree = function (obj) {
      var key, res
      for (key in obj) {
        var parent = obj[key].parent
        if (parent === '') {
          res = obj[key]
        } else {
          obj[parent][key] = obj[key]
        }
      }
      return res
    }
    console.log(plain2Tree(input))
  },
  methods: {
    goDetail (id) {
      switch (id) {
        case 0 :
          return this.$router.push('/select')
        case 1 :
          return this.$router.push('/shopCar')
        case 2 :
          return this.$router.push('/clock')
        case 3 :
          return this.$router.push('/culc')
        default :
          return this.$router.push('/select')
      }
    }
  }
}
</script>
<style lang='less' scoped>
  @import '../assets/reset';
#index{
  ul{
    display: flex;
    justify-content:center;
    align-items: center;
    li{
      flex: 1;
      border: solid 1px #000;
    }
    li:hover{
      background: pink;
      cursor: pointer;
    }
  }
}
</style>
