<template>
  <div class="app_content">
    <div class="app_content_projectinfo">
      <div class="app_projectinfo">
        <div class="projectinfo">
          <div class="project_pic total"></div>
          <div class="project_des">
            <div class="project_des_info">
              项目总数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                onLineData.totalProjectNum
              }}
            </div>
          </div>
        </div>
        <div class="projectinfo">
          <div class="project_pic online"></div>
          <div class="project_des">
            <div class="project_des_info">
              项目在线数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                onLineData.onLineProjectNum
              }}
            </div>
          </div>
        </div>
        <div class="projectinfo">
          <div class="project_pic percent"></div>
          <div class="project_des">
            <div class="project_des_info">
              项目在线率&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                onLineData.onLineProjectPercent
              }}%
            </div>
          </div>
        </div>
        <div class="projectinfo">
          <div class="project_pic outline"></div>
          <div class="project_des">
            <div class="project_des_info">
              项目离线数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{
                onLineData.leaveLineProjectNum
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app_content_projectlist">
      <div class="projectlist_des">
        <i class="el-icon-s-unfold" style="color: #409eff"></i> 项目列表
        <el-divider></el-divider>
      </div>
      <div class="projectlist_search">
        <div class="projectlist_search_info">
          项目名称&nbsp;
          <el-input
            placeholder="请输入内容"
            v-model="searchProject.projectName"
            size="mini"
            style="width: 200px"
            clearable
          >
          </el-input>
        </div>
        <div class="projectlist_search_info">
          项目地区&nbsp;
          <el-input
            placeholder="请输入内容"
            v-model="searchProject.projectAddress"
            size="mini"
            style="width: 200px"
            clearable
          >
          </el-input>
        </div>
        <div class="projectlist_search_info">
          <el-button
            type="primary"
            icon="el-icon-search"
            size="mini"
            @click="getProjectByCond()"
            >搜索</el-button
          >
        </div>
      </div>
      <div class="projectlist_content">
        <el-table
          :data="tableData"
          border
          height="100%"
          max-height="100%"
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
          <el-table-column
            prop="projectName"
            label="项目名称"
            min-width="15%"
          ></el-table-column>
          <el-table-column
            prop="projectAddress"
            label="项目地区"
            min-width="11%"
          ></el-table-column>
          <el-table-column
            prop="projectStartTime"
            label="项目上线时间"
            min-width="11%"
          >
          </el-table-column>
          <el-table-column prop="projectState" label="项目状态" min-width="9%">
            <template slot-scope="scope">
              <el-tag
                size="small"
                :type="scope.row.projectState == '1' ? 'primary' : 'danger'"
                >{{ scope.row.projectState == 0 ? "离线" : "在线" }}</el-tag
              >
            </template>
          </el-table-column>
          <!--el-table-column prop="chtype" label="空调类型" width="180">
          </el-table-column-->

          <el-table-column prop="chRunState" label="空调状态" min-width="9%">
            <template slot-scope="scope">
              <el-tag
                size="small"
                :type="scope.row.chRunState == '0' ? 'danger' : 'primary'"
                >{{ scope.row.chRunState == 0 ? "关机" : "开机" }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="chMode"
            label="空调模式"
            min-width="9%"
            :formatter="stateFormat"
          >
          </el-table-column>
          <el-table-column
            prop="chTempColdSet"
            label="制冷温度设定(℃)"
            min-width="9%"
          >
          </el-table-column>
          <el-table-column
            prop="chTempHeatSet"
            label="制热温度设定(℃)"
            min-width="9%"
          >
          </el-table-column>
          <el-table-column
            prop="chiWaterSupplyTemp"
            label="出水温度(℃)"
            min-width="9%"
          >
          </el-table-column>
          <!--el-table-column prop="dayenergy" label="今日能耗(KWh)" width="180">
          </el-table-column-->
          <el-table-column prop="projectview" label="项目查看" min-width="9%">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
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
import {
  getProjectInfo,
  getProjectOnLineInfo,
  getProjectInfoByCond,
} from "../../api/home";
export default {
  name: "Home",
  data() {
    return {
      searchProject: {
        projectName: "",
        projectAddress: "",
      },
      tableData: [],
      onLineData: {
        totalProjectNum: 0,
        onLineProjectNum: 0,
        leaveLineProjectNum: 0,
        onLineProjectPercent: 0,
      },
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
      return row.chMode == "0" ? "制冷" : "制热";
    },
    handleClick(row) {
      //this.$router.push("project")

      const routeUrl = this.$router.resolve({
        path: "/project",
        query: { projectId: row.projectId, projectName: row.projectName },
      });
      window.open(routeUrl.href, "_blank");
    },

    getProjectByCond() {
      getProjectInfoByCond(
        9999,
        1,
        this.searchProject.projectName,
        this.searchProject.projectAddress
      ).then((response) => {
        this.tableData = response.data.data.list;
      });
    },
  },
  mounted() {
    getProjectInfo().then((response) => {
      // 处理成功情况
      this.tableData = response.data.data.list;
    });

    getProjectOnLineInfo().then((response) => {
      this.onLineData = response.data.data;
    });
  },
};
</script>

<style scoped>
.app_content {
  height: 100%;
}
.app_content_projectinfo {
  height: 10%;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f6;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.app_projectinfo {
  margin: 0 10px;
  height: 80%;
  display: flex;
  justify-content: space-between;
}
.projectinfo {
  background-color: white;
  width: 24.5%;
  border-radius: 5px;
  overflow: hidden;
}

.project_pic {
  background-repeat: no-repeat;
  height: 100%;
  width: 16%;
  float: left;
}
.project_des {
  float: right;
  height: 100%;
  width: 75%;
  display: flex;
  align-items: center;
}

.project_des_info {
  width: 100%;
  display: table-cell;
  font-size: 22px;
  font-weight: 500;
  color: rgb(41, 41, 41);
}
.total {
  background-image: url(../../assets/image/home/项目总数.png);
  background-size: contain;
}
.online {
  background-image: url(../../assets/image/home/在线项目数.png);
  background-size: contain;
}
.percent {
  background-image: url(../../assets/image/home/项目在线率.png);
  background-size: contain;
}
.outline {
  background-image: url(../../assets/image/home/离线项目数.png);
  background-size: contain;
}

.app_content_projectlist {
  height: 90%;
  width: 100%;
}

.projectlist_search {
  height: 7%;
  overflow: hidden;
}

.projectlist_search_info {
  margin: 0px 10px;
  font-size: 14px;
  float: left;
  font-weight: 700;
}

.projectlist_des {
  height: 7%;
  padding-top: 20px;
  padding-left: 10px;
  font-weight: 500;
  overflow: hidden;
}
.el-divider--horizontal {
  margin: 10px 0 0 !important;
}

.projectlist_content {
  height: 78%;
  margin: 0 10px;
  overflow: hidden;
}
</style>