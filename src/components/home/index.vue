<template>
  <div class="app_content">
    <div class="app_content_projectinfo">
      <!--div class="app_projectinfo">
        <div class="projectinfo">
          <div class="project_pic total"></div>
          <div class="project_des">项目总数<br/>6</div>
        </div>
        <div class="projectinfo">
          <div class="project_pic online"></div>
          <div class="project_des">项目在线数</div>
        </div>
        <div class="projectinfo">
          <div class="project_pic percent"></div>
          <div class="project_des">项目在线率</div>
        </div>
        <div class="projectinfo">
          <div class="project_pic outline"></div>
          <div class="project_des">项目离线数</div>
        </div>
      </div-->
    </div>
    <div class="app_content_projectlist">
      <div class="projectlist_des">
        <i class="el-icon-s-unfold" style="color: #409eff"></i> 项目列表
        <el-divider></el-divider>
      </div>
      <div class="projectlist_search">
        <div class="projectlist_search_info">
          项目名称
          <el-input
            placeholder="请输入内容"
            v-model="search"
            size="small"
            style="width: 200px"
            clearable
          >
          </el-input>
        </div>
        <div class="projectlist_search_info">
          项目地区
          <el-input
            placeholder="请输入内容"
            v-model="search"
            size="small"
            style="width: 200px"
            clearable
          >
          </el-input>
        </div>
        <div class="projectlist_search_info">
          <el-button type="primary" icon="el-icon-search" size="mini"
            >搜索</el-button
          >
        </div>
      </div>
      <div class="projectlist_content">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :cell-style="cellStyle"
          :header-cell-style="{
            textAlign: 'center',
            padding: '5px 0',
            color: '#2c3e50',
            backgroundColor: '#f5f5f6',
            fontWeight: '700',
          }"
        >
          <el-table-column prop="name" label="项目名称"></el-table-column>
          <el-table-column
            prop="address"
            label="项目地区"
            width="180"
          ></el-table-column>
          <el-table-column prop="ondate" label="项目上线时间" width="180">
          </el-table-column>
          <el-table-column prop="status" label="项目状态" width="180">
            <template slot-scope="scope">
              <el-tag size="small" :type="scope.row.status == '1' ? 'primary' : 'danger'">{{ scope.row.status == 0 ? '离线':'在线' }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="chtype" label="空调类型" width="180">
          </el-table-column>
          <el-table-column prop="chmodle" label="空调模式" width="180">
          </el-table-column>
          <el-table-column prop="chstatus" label="空调状态" width="180">
          </el-table-column>
          <el-table-column prop="chtempset" label="空调水温设定(℃)" width="180">
          </el-table-column>
          <el-table-column prop="dayenergy" label="今日能耗(KWh)" width="180">
          </el-table-column>
          <el-table-column prop="projectview" label="项目查看" width="100">
              <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
          </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectInfo } from "../../api/home";
export default {
  name: "Home",
  data() {
    return {
      search: "",
      tableData: [],
    };
  },
  methods: {
    cellStyle({ row, column, rowIndex, columnIndex }) {
      let cstyle = "padding: 5px 0; text-align: center; font-size: 13px;";

      if (column.label == "项目状态") {
        if (row.status == "1") {
          cstyle += "color:green;";
        } else {
          cstyle += "color:red;";
        }
      }

      return cstyle;
    },
    stateFormat(row, column, cellValue, index) {
      return row.status == "1" ? "在线" : "离线";
    },
    handleClick(row) {

    },
  },
  mounted() {
    getProjectInfo().then((response) => {
      // 处理成功情况
      const projectlist = response.data.data.list;

      let plist = new Array();
      for (let index = 0; index < projectlist.length; index++) {
        let projectinfo = new Object();
        projectinfo.name = projectlist[index].projectName;
        projectinfo.ondate = projectlist[index].projectStartTime;
        projectinfo.status = projectlist[index].projectState;
        projectinfo.address =  projectlist[index].projectAddress;
        plist.push(projectinfo);
      }
      this.tableData = plist;
    });
  },
};
</script>

<style scoped>
.app_content {
  height: 100%;
}
.app_content_projectinfo {
  height: 20%;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.app_projectinfo {
  margin: 0 10px;
  height: 90%;
  display: flex;
  justify-content: space-between;
}
.projectinfo {
  background-color: white;
  width: 24.6%;
  border-radius: 5px;
  overflow: hidden;
}

.project_pic {
  background-repeat: no-repeat;
  height: 100%;
  width: 35%;
  background-size: cover;
  float: left;
}
.project_des {
  float: right;
  width: 55%;
  font-size: 22px;
  font-weight: 600;
  color: rgb(95, 95, 95);
  line-height: 300%;
}
.total {
  background-image: url(../../assets/image/home/项目总数.png);
}
.online {
  background-image: url(../../assets/image/home/在线项目数.png);
}
.percent {
  background-image: url(../../assets/image/home/项目在线率.png);
}
.outline {
  background-image: url(../../assets/image/home/离线项目数.png);
}

.app_content_projectlist {
  height: 70%;
  width: 100%;
}
.projectlist_search_info {
  margin: 20px 10px;
  font-size: 14px;
  float: left;
  font-weight: 700;
}

.projectlist_des {
  padding-top: 20px;
  padding-left: 10px;
  font-weight: 500;
}
.el-divider--horizontal {
  margin: 10px 0 !important;
}

.projectlist_content {
  margin: 0 10px;
}
</style>