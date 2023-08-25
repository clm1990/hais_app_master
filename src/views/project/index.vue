<template>
  <div class="project">
    <div class="project_header">
      <div class="project_header_name">
        <div class="project_header_name_info">{{ this.projectName }}</div>
      </div>
    </div>
    <div class="project_body">
      <div class="project_body_content">
        <div class="project_body_left">
          <div class="project_body_img">
            <img
              src="../../assets/image/project/主机.jpg"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div class="project_body_right">
          <div class="project_body_CH">
            <div class="CH_header CH_ELE">
              <i
                class="el-icon-s-management"
                style="color: #409eff; font-size: 18px"
              ></i>
              主机参数
              <el-divider></el-divider>
              <div class="CH_ELE_info">
                <div class="CH_ELE_info_view">
                  <el-descriptions
                    :column="1"
                    size="medium"
                    :contentStyle="{
                      'line-height': '3rem',
                      'font-size': '16px',
                    }"
                    :labelStyle="{ 'line-height': '3rem', 'font-size': '16px' }"
                  >
                    <el-descriptions-item label="制冷温度设定值">
                      {{ CH.length >= 31 ? CH[19].paramValue : "0" }}
                      ℃</el-descriptions-item
                    >
                    <el-descriptions-item label="制热温度设定值">
                      {{ CH.length >= 31 ? CH[20].paramValue : "0" }}
                      ℃</el-descriptions-item
                    >
                    <el-descriptions-item label="蒸发器出水温度">
                      {{ CH.length >= 31 ? CH[10].paramValue : "0" }}
                      ℃</el-descriptions-item
                    >
                  </el-descriptions>
                </div>
                <div class="CH_ELE_info_ctrl">
                  <el-descriptions :column="1" :colon="false" size="medium">
                    <el-descriptions-item
                      :contentStyle="{
                        'margin-top': '0.5rem',
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('CH_COLD_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('CH_HOT_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('CH_TEMP_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
                <div class="CH_ELE_info_view">
                  <el-descriptions
                    :column="1"
                    size="medium"
                    :contentStyle="{
                      'line-height': '3rem',
                      'font-size': '16px',
                    }"
                    :labelStyle="{ 'line-height': '3rem', 'font-size': '16px' }"
                  >
                    <el-descriptions-item label="制冷温度设定">
                      {{ CH.length >= 31 ? CH[28].paramValue : "0" }}
                      ℃
                    </el-descriptions-item>
                    <el-descriptions-item label="制热温度设定">
                      {{ CH.length >= 31 ? CH[29].paramValue : "0" }}
                      ℃
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
                <div class="CH_ELE_info_ctrl">
                  <el-descriptions :column="1" :colon="false" size="medium">
                    <el-descriptions-item
                      :contentStyle="{
                        'margin-top': '0.5rem',
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        @click="CHCtrlHandle('CH_CTRL_COLD')"
                        >设置</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        @click="CHCtrlHandle('CH_CTRL_HOT')"
                        >设置</el-button
                      >
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
              </div>
            </div>
          </div>
          <div class="project_body_ELE">
            <div class="ELE_header CH_ELE">
              <i
                class="el-icon-s-order"
                style="color: #409eff; font-size: 18px"
              ></i>
              电量参数
              <el-divider></el-divider>
              <div class="CH_ELE_info">
                <div class="CH_ELE_info_view">
                  <el-descriptions
                    :column="1"
                    size="medium"
                    :contentStyle="{
                      'line-height': '3rem',
                      'font-size': '16px',
                    }"
                    :labelStyle="{ 'line-height': '3rem', 'font-size': '16px' }"
                  >
                    <el-descriptions-item label="A项电压">
                      {{ ELE.length >= 13 ? ELE[4].paramValue : "1" }}
                      V</el-descriptions-item
                    >
                    <el-descriptions-item label="B项电压">
                      {{ ELE.length >= 13 ? ELE[5].paramValue : "0" }}
                      V</el-descriptions-item
                    >
                    <el-descriptions-item label="C项电压">
                      {{ ELE.length >= 13 ? ELE[6].paramValue : "0" }}
                      V</el-descriptions-item
                    >
                    <el-descriptions-item label="实时功率">
                      {{ ELE.length >= 13 ? ELE[2].paramValue : "0" }}
                      KW</el-descriptions-item
                    >
                  </el-descriptions>
                </div>
                <div class="CH_ELE_info_ctrl">
                  <el-descriptions :column="1" :colon="false" size="medium">
                    <el-descriptions-item
                      :contentStyle="{
                        'margin-top': '0.5rem',
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('ELE_AV_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('ELE_BV_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('ELE_CV_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('ELE_PT_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
                <div class="CH_ELE_info_view">
                  <el-descriptions
                    :column="1"
                    size="medium"
                    :contentStyle="{
                      'line-height': '3rem',
                      'font-size': '16px',
                    }"
                    :labelStyle="{ 'line-height': '3rem', 'font-size': '16px' }"
                  >
                    <el-descriptions-item label="A项电流">
                      {{ ELE.length >= 13 ? ELE[7].paramValue : "0" }}
                      A</el-descriptions-item
                    >
                    <el-descriptions-item label="B项电流">
                      {{ ELE.length >= 13 ? ELE[8].paramValue : "0" }}
                      A</el-descriptions-item
                    >
                    <el-descriptions-item label="C项电流">
                      {{ ELE.length >= 13 ? ELE[9].paramValue : "0" }}
                      A</el-descriptions-item
                    >
                    <el-descriptions-item label="总用电量">
                      {{ ELE.length >= 13 ? ELE[12].paramValue : "0" }}
                      KWh</el-descriptions-item
                    >
                  </el-descriptions>
                </div>
                <div class="CH_ELE_info_ctrl">
                  <el-descriptions :column="1" :colon="false" size="medium">
                    <el-descriptions-item
                      :contentStyle="{
                        'margin-top': '0.5rem',
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('ELE_AA_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('ELE_BA_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('ELE_CA_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                    <el-descriptions-item
                      :contentStyle="{
                        height: '3rem',
                        'font-size': '16px',
                      }"
                    >
                      <el-button
                        type="primary"
                        size="mini"
                        plain
                        @click="devHisAnalysis('ELE_TOTAL_HIS')"
                        >分析</el-button
                      >
                    </el-descriptions-item>
                  </el-descriptions>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <template>
        <div class="his_dialog_info">
          <el-dialog
            :visible.sync="analysisDialogVisible"
            :DEVHisParam="DEVHisParam"
            :DEVHisData="DEVHisData"
            :title="DEVHisParam.virDevParamName"
            @open="openHis()"
            @close="closeHis()"
            width="75%"
          >
            <el-divider></el-divider>

            <div class="his_dialog_input">
              采样时间段：
              <el-date-picker
                v-model="hisTime"
                size="small"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
              >
              </el-date-picker
              >&nbsp;&nbsp; 采样时间间隔：
              <el-select
                v-model="hisTimeDiff"
                placeholder="请选择"
                size="small"
              >
                <el-option
                  v-for="item in hisTimeDiffOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option> </el-select
              >&nbsp;&nbsp;
              <el-button
                type="primary"
                icon="el-icon-search"
                size="small"
                @click="getHisDataByCond()"
                >查询</el-button
              >
            </div>
            <div class="his_dialog_data">
              <div class="his_dialog_table">
                <el-table
                  :data="DEVHisData"
                  border
                  style="width: 100%"
                  height="450px"
                  :cell-style="{
                    textAlign: 'center',
                  }"
                  :header-cell-style="{
                    textAlign: 'center',
                  }"
                >
                  <el-table-column prop="updateTime" label="时间">
                  </el-table-column>
                  <el-table-column prop="updateValue" label="数值">
                  </el-table-column>
                </el-table>
              </div>
              <div class="his_dialog_list">
                <div ref="echart" style="height: 450px"></div>
              </div>
            </div>
          </el-dialog>
        </div>
        <el-dialog
          :visible.sync="ctrlDialogVisible"
          :CHCtrlParam="CHCtrlParam"
          center
          width="25%"
          :show-close="false"
        >
          <div class="set_dialog_info">
            {{ CHCtrlParam.virDevParamName }} :&nbsp;<el-input
              placeholder="请输入内容"
              style="width: 50%"
              size="small"
              v-model="ctrlValue"
              >{{ ctrlValue }}</el-input
            >
          </div>
          <div class="set_dialog_info">
            <el-button
              type="primary"
              @click="ctrlDialogVisible = false"
              size="small"
              >取 消</el-button
            >
            <el-button type="primary" @click="sendCtrlMsg()" size="small"
              >确 定</el-button
            >
          </div>
        </el-dialog>
      </template>
    </div>
  </div>
</template>

<script>
import {
  getVirDevInfo,
  getVirDevParamHisInfo,
  ctrlVirDevParamValue,
} from "../../api/project/index.js";
import { getCurrentAndPrevTime, timeFormat } from "../../utils/dateFormat.js";
export default {
  name: "Project",
  data() {
    return {
      analysisDialogVisible: false,
      ctrlDialogVisible: false,
      projectId: "",
      projectName: "",
      CHCtrlParam: {
        virDevId: "",
        virDevParamName: "",
        virDevParamSeq: 0,
      },
      DEVHisParam: {
        virDevId: "",
        virDevParamName: "",
        virDevParamSeq: 0,
      },
      DEVHisData: [],
      CH: [],
      ELE: [],
      hisTime: [],
      hisTimeDiff: "5",
      ctrlValue: 0,
      hisTimeDiffOptions: [
        {
          value: "5",
          label: "5分钟",
        },
        {
          value: "10",
          label: "10分钟",
        },
        {
          value: "60",
          label: "1小时",
        },
        {
          value: "1440",
          label: "1天",
        },
      ],
    };
  },
  methods: {
    rowStyle() {
      return "color: #409eff";
    },
    CHCtrlHandle(model) {
      this.ctrlDialogVisible = true;
      switch (model) {
        case "CH_CTRL_COLD":
          this.CHCtrlParam = {
            virDevId: this.CH[28].virDevID,
            virDevParamName: this.CH[28].paramName,
            virDevParamSeq: this.CH[28].paramSeq,
          };
          break;
        case "CH_CTRL_HOT":
          this.CHCtrlParam = {
            virDevId: this.CH[29].virDevID,
            virDevParamName: this.CH[29].paramName,
            virDevParamSeq: this.CH[29].paramSeq,
          };
          break;
        default:
          this.CHCtrlParam = {};
      }
    },

    sendCtrlMsg() {
      this.ctrlDialogVisible = false;
      //发送控制请求

      ctrlVirDevParamValue(
        this.projectId,
        this.CHCtrlParam.virDevId,
        this.CHCtrlParam.virDevParamSeq,
        this.ctrlValue
      ).then((response) => {
        if (response.data.code == 0) {
          this.openSucess(response.data.message);
        } else {
          this.openWarn(response.data.message);
        }
      });
    },

    devHisAnalysis(model) {
      let seq, type;

      switch (model) {
        case "CH_COLD_HIS":
          (seq = 19), (type = 0);
          break;
        case "CH_HOT_HIS":
          (seq = 20), (type = 0);
          break;
        case "CH_TEMP_HIS":
          (seq = 10), (type = 0);
          break;
        case "ELE_AV_HIS":
          (seq = 4), (type = 1);
          break;
        case "ELE_BV_HIS":
          (seq = 5), (type = 1);
          break;
        case "ELE_CV_HIS":
          (seq = 6), (type = 1);
          break;
        case "ELE_PT_HIS":
          (seq = 2), (type = 1);
          break;
        case "ELE_AA_HIS":
          (seq = 7), (type = 1);
          break;
        case "ELE_BA_HIS":
          (seq = 8), (type = 1);
          break;
        case "ELE_CA_HIS":
          (seq = 9), (type = 1);
          break;
        case "ELE_TOTAL_HIS":
          (seq = 12), (type = 1);
          break;
        default:
          seq = -1;
      }

      if (seq != -1) {
        if (type == 0) {
          this.DEVHisParam = {
            virDevId: this.CH[seq].virDevID,
            virDevParamName: this.CH[seq].paramName,
            virDevParamSeq: this.CH[seq].paramSeq,
          };
        } else if (type == 1) {
          this.DEVHisParam = {
            virDevId: this.ELE[seq].virDevID,
            virDevParamName: this.ELE[seq].paramName,
            virDevParamSeq: this.ELE[seq].paramSeq,
          };
        }
      } else {
        this.DEVHisParam = {};
      }
      //todo 发送历史数据请求

      const arrTime = getCurrentAndPrevTime();
      this.hisTime = arrTime;
      this.hisTimeDiff = "5";

      getVirDevParamHisInfo(
        this.projectId,
        this.DEVHisParam.virDevId,
        this.DEVHisParam.virDevParamSeq,
        arrTime[0],
        arrTime[1],
        this.hisTimeDiff
      ).then((response) => {
        this.DEVHisData = [];
        if (response.data.code == 0) {
          // 处理成功情况
          for (let i = 0; i < response.data.data.length; i++) {
            this.DEVHisData.push({
              updateTime: response.data.data[i].updateTime,
              updateValue: response.data.data[i].paramValue,
            });
          }
          this.analysisDialogVisible = true;
        } else {
          this.openWarn(response.data.message);
        }
      });
    },

    getHisDataByCond() {
      const startTime = timeFormat(this.hisTime[0]);
      const endTime = timeFormat(this.hisTime[1]);

      getVirDevParamHisInfo(
        this.projectId,
        this.DEVHisParam.virDevId,
        this.DEVHisParam.virDevParamSeq,
        startTime,
        endTime,
        this.hisTimeDiff
      ).then((response) => {
        this.DEVHisData = [];
        // 处理成功情况
        for (let i = 0; i < response.data.data.length; i++) {
          this.DEVHisData.push({
            updateTime: response.data.data[i].updateTime,
            updateValue: response.data.data[i].paramValue,
          });
        }

        this.getLoadEcharts();
      });
    },

    openHis() {
      this.$nextTick(() => {
        this.getLoadEcharts();
      });
    },

    closeHis() {
      this.DEVHisData = [];
    },

    getLoadEcharts() {
      let myChart = this.$echarts.getInstanceByDom(this.$refs.echart);
      if (myChart == null) {
        myChart = this.$echarts.init(this.$refs.echart);
      }

      let x = [],
        y = [];
      for (let i = 0; i < this.DEVHisData.length; i++) {
        x.push(this.DEVHisData[i].updateTime);
        y.push(this.DEVHisData[i].updateValue);
      }

      const option = {
        xAxis: {
          type: "category",
          data: x,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: y,
            type: "line",
          },
        ],
        tooltip: {
          trigger: "axis",
        },
      };

      myChart.setOption(option);
    },

    openSucess(message) {
      this.$message({
        message,
        type: "success",
      });
    },

    openWarn(message) {
      this.$message({
        message,
        type: "warning",
      });
    },

    openFail(message) {
      this.$message({
        message,
        type: "error",
      });
    },
  },
  mounted() {
    this.projectId = this.$route.query.projectId;
    this.projectName = this.$route.query.projectName;
    getVirDevInfo(this.projectId).then((response) => {
      // 处理成功情况
      this.CH = response.data.data.CH;
      this.ELE = response.data.data.ELE;
    });
  },
};
</script>

<style scoped>
.project {
  width: 100%;
  height: 100%;
}

.project_header {
  width: 100%;
  height: 6%;
  background-color: #409eff;
}

.project_header_name {
  height: 100%;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}

.project_header_name_info {
  text-align: center;
  font-size: 20px;
  color: white;
  font-weight: 600;
  padding: 0 10px;
}

.project_body {
  background-color: #f5f5f6;
  width: 100%;
  height: 94%;
  overflow: hidden;
  position: relative;
}

.project_body_content {
  height: 99%;
  width: 100%;
  background-color: white;
  position: absolute;
  bottom: 0;
  display: flex;
}

.project_body_left {
  height: 100%;
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project_body_img {
  height: 80%;
  width: 80%;
}

.project_body_right {
  height: 100%;
  width: 45%;
}

.project_body_CH {
  height: 50%;
  width: 100%;
  overflow: hidden;
}

.project_body_ELE {
  height: 50%;
  width: 100%;
  overflow: hidden;
}

.CH_ELE {
  width: 100%;
  padding-left: 10px;

  font-size: 16px;
  font-weight: 600;
}

.CH_header {
  padding-top: 15%;
}

.ELE_header {
  padding-top: 10px;
}

.CH_ELE_info {
  width: 90%;
  display: flex;
}

.CH_ELE_info_view {
  width: 35%;
}

.CH_ELE_info_ctrl {
  width: 15%;
}

.his_dialog_info .el-divider--horizontal {
  height: 1px;
  width: 100%;
  margin: 0;
}

.his_dialog_info /deep/ .el-dialog__body {
  padding: 0px;
  height: 55vh;
  overflow: hidden;
}

.his_dialog_info /deep/ .el-dialog__header {
  padding-left: 5px;
  padding-bottom: 5px;
}

.his_dialog_input {
  margin: 10px;
}

.his_dialog_data {
  margin: 10px;
  width: 100%;
  display: flex;
}

.his_dialog_table {
  width: 30%;
}

.his_dialog_list {
  width: 70%;
}

.el-divider--horizontal {
  margin: 10px 0;
  height: 1px;
  width: 90%;
}

.set_dialog_info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
</style>