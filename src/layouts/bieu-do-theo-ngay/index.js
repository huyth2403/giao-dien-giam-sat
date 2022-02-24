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

import { useEffect, useState } from "react";

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

import { instance } from "../../service/service";


function Notifications() {

  const [data, setData] = useState([])
  const [dataDoAm, setDataDoAm] = useState([])

  const init = () => {
    instance({
      method: 'get',
      url: '/alarm/get-all-heart-beat-current-day?token=Y3ODkwIiwi'
    }).then(resp => {
      const data = resp.data
      if (data?.data?.length > 0) {
        const result = data?.data
        const dataChart = []
        const dataChartDoAm = []
        result.forEach(el => {
          const currentTime = el.createdDate.split('T')[1].split('.')[0].split(':')[0] + ':' + el.createdDate.split('T')[1].split('.')[0].split(':')[1]
          dataChart.push([currentTime, el.temperature])
          dataChartDoAm.push([currentTime, el.humidity])
        })
        setData(dataChart)
        setDataDoAm(dataChartDoAm)
      }
    })
  }

  const getOptionNhietDo = () => {
    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
      return item[1];
    });

    const dateList1 = dataDoAm.map(function (item) {
      return item[0];
    });
    const valueList1 = dataDoAm.map(function (item) {
      return item[1];
    });
    return {
      // Make gradient line here
      visualMap: [
        {
          show: false,
          type: 'continuous',
          seriesIndex: 0,
          min: 0,
          max: 400
        },
        {
          show: false,
          type: 'continuous',
          seriesIndex: 1,
          dimension: 0,
          min: 0,
          max: 100
        }
      ],
      title: [
        {
          left: 'center',
          text: 'Nhiệt độ'
        },
        {
          top: '55%',
          left: 'center',
          text: 'Độ ẩm'
        }
      ],
      tooltip: {
        trigger: 'axis'
      },
      xAxis: [
        {
          data: dateList
        },
        {
          data: dateList1,
          gridIndex: 1
        }
      ],
      yAxis: [
        {},
        {
          gridIndex: 1
        }
      ],
      grid: [
        {
          bottom: '60%'
        },
        {
          top: '60%'
        }
      ],
      series: [
        {
          type: 'line',
          showSymbol: false,
          data: valueList
        },
        {
          type: 'line',
          showSymbol: false,
          data: valueList1,
          xAxisIndex: 1,
          yAxisIndex: 1
        }
      ]
    };
  }

  useEffect(() => {
    init()
  }, [])

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
                  Biểu đồ đánh giá theo ngày
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <ReactECharts
                  option={getOptionNhietDo()}
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
