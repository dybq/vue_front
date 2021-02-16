<template>
  <el-table
      :data="tableData"
      stripe
      style="width: 100%">
    <el-table-column
        prop="username"
        label="团长"
        width="180">
    </el-table-column>
    <el-table-column
        prop="datetime"
        label="时间"
        width="180">
    </el-table-column>
    <el-table-column
        prop="diff"
        label="难度"
        width="180">
    </el-table-column>
    <el-table-column
        prop="remark"
        label="备注"
        width="1000">
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'



export default {
  name: 'index',
  data() {
    return {
      tableData: []

    }
  },
  created() {
    this.getlist()
  },
  methods: {
    getlist() {
      let _this = this
      axios.get('http://localhost:5000/api/getdata').then(response => {
        _this.tableData = response.data
      })
    }
  }

}</script>