<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="3">
          <el-input placeholder="请输入内容" v-model="query" size="mini">
            <template slot="prepend">用户名</template>
          </el-input>
        </el-col>
        <el-col :span="3">
          <el-button size="mini" @click="search">查询</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="username" label="创建日期"></el-table-column>
      </el-table>
    </el-main>
    <el-footer>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="pageInfo.pageNum"
        :page-size="pageInfo.pageSize"
        layout="total, prev, pager, next, jumper"
        :total="pageInfo.total"
      ></el-pagination>
    </el-footer>
  </el-container>
</template>

<script>
import _ from "lodash";
export default {
  name: "index",
  data() {
    return {
      query: "",
      tableData: [],
      pageInfo: {
        total: 0,
        pageNum: 1,
        pageSize: 5
      }
    };
  },
  created() {
    this.search();
  },
  methods: {
    search() {
      this.axios
        .post("/api/user", null, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          params: {
            username: this.query,
            pageNum: this.pageInfo.pageNum,
            pageSize: this.pageInfo.pageSize
          }
        })
        .then(res => {
          /* eslint-disable */
          this.tableData.splice(0, this.tableData.length);
          console.log(res.data);
          this.pageInfo.total = res.data.total;
          this.pageInfo.pageSize = res.data.pageSize;
          this.pageInfo.pageNum = res.data.pageNum;
          _.each(res.data.list, item => {
            this.tableData.splice(this.tableData.length - 1, 0, item);
          });
        });
    },
    handleCurrentChange() {
      alert(this.pageInfo.pageNum);
      this.search();
    }
  }
};
</script>

<style scoped>
</style>