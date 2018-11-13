<template>
  <div style="padding:20px;" id="list">
      <div class="panel panel-primary">
        <div class="panel-heading">用户管理</div>
        <table class="table table-bordered table-striped text-center">
          <thead>
          <tr>
            <th>用户id</th>
            <th>用户姓名</th>
            <th>年龄</th>
            <th>性别</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, index) in dataInfo" :key="index">
            <td>{{user.userId}}</td>
            <td>{{user.userName}}</td>
            <td>{{user.userAge}}</td>
            <td>{{user.userSex}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      dataInfo: [{
        userAge: 18,
        userId: 55,
        userName: '林颖',
        userSex: '女'
      },
      {
        userAge: 22,
        userId: 34,
        userName: '林',
        userSex: '男'
      }]
    }
  },
  mounted () {

  },
  methods: {}
}
</script>
<style lang="less" scoped>
#list{
  background: pink;
  .table{
    width: 100%;
    margin: 50px auto;
    border: 1px solid #000;
    th {
      border-bottom: solid 1px #000;
    }
    tr {
      border: 1px solid #000;
      td{
        border: 1px solid #000;
      }
    }
  }
}
</style>
