/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReactECharts from "echarts-for-react";
import { option } from "./data";

const nhietDo = {
  title: {
    show: true,
    text: 'Nhiệt độ'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['Max', 'Min', 'Avg']
  },
  xAxis: [
    {
      type: 'category',
      data: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '°C',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    {
      type: 'value',
      name: '',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: ''
      }
    }
  ],
  series: [
    {
      name: 'Max',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: 'Min',
      type: 'bar',
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Avg',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};
const doAm = {
  title: {
    show: true,
    text: 'Độ ẩm'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  toolbox: {
    show: false,
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: false }
    }
  },
  legend: {
    data: ['Max', 'Min', 'Avg']
  },
  xAxis: [
    {
      type: 'category',
      data: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '%',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} %'
      }
    },
    {
      type: 'value',
      name: '',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: ''
      }
    }
  ],
  series: [
    {
      name: 'Max',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: 'Min',
      type: 'bar',
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: 'Avg',
      type: 'line',
      yAxisIndex: 1,
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};

function Notifications() {

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Biểu đồ đánh giá theo tuần
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <ReactECharts
                  option={option}
                  notMerge={true}
                  lazyUpdate={true}
                  theme={"theme_name"}
                  style={{height: '80vh', width: '100%'}}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Notifications;
