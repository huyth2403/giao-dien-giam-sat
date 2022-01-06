export const data = [["0h", 116], ["0h30p", 129], ["1h", 135],
    ["1h30p", 86], ["2h", 73], ["2h30p", 85], ["3h", 73],
    ["3h30p", 68], ["4h", 92], ["4h30p", 130], ["5h", 245],
    ["5h30p", 139], ["6h", 115], ["6h30p", 111], ["7h", 309],
    ["7h30p", 206], ["8h", 137], ["8h30p", 128], ["9h", 85],
    ["9h30p", 94], ["10h", 71], ["10h30p", 106], ["11h", 84],
    ["11h30p", 93], ["12h", 85], ["12h30p", 73], ["13h", 83],
    ["13h30", 125], ["14h", 107], ["14h30p", 82], ["15h", 44],
    ["15h30p", 72], ["16h", 106], ["16h30p", 107], ["17h", 66],
    ["17h30p", 91], ["18h", 92], ["18h30p", 113], ["19h", 107],
    ["19h30p", 131], ["20h", 111], ["20h30p", 64], ["21h", 69],
    ["21h30p", 88], ["22h", 77], ["22h30p", 83], ["23h", 111],
    ["23h30", 57]];
export const dateList = data.map(function (item) {
    return item[0];
});
export const valueList = data.map(function (item) {
    return item[1];
});
export const option = {
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
            max: dateList.length - 1
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
            data: dateList,
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
            data: valueList,
            xAxisIndex: 1,
            yAxisIndex: 1
        }
    ]
};