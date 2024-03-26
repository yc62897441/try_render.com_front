export const cartPageFormConfig = {
    email: {
        label: 'email',
        type: 'email',
        required: true,
    },
    tel: {
        label: '手機',
        type: 'tel',
        required: true,
        pattern: '[0-9]{4}-[0-9]{3}-[0-9]{3}',
        patternDemo: ' Format: 0900-001-001',
    },
    city: {
        label: '居住縣市',
        type: 'select',
        selectList: [
            { label: '台北市', value: 0 },
            { label: '新北市', value: 1 },
            { label: '桃園市', value: 2 },
            { label: '新竹縣', value: 3 },
            { label: '新竹市', value: 4 },
            { label: '基隆市', value: 5 },
            { label: '宜蘭市', value: 6 },
        ],
        required: true,
    },
    // district: {
    //     label: '行政區',
    //     type: 'select',
    //     selectList: [
    //         { label: '大安區', value: 0 },
    //         { label: '信義區', value: 1 },
    //     ],
    //     required: true,
    // },
    // address: {
    //     label: '地址',
    //     type: 'test',
    //     required: true,
    // },
    startDate: {
        label: '起日',
        type: 'date',
        required: true,
    },
    // startTime: {
    //     label: '起時',
    //     type: 'time',
    //     required: true,
    // },
    // endDate: {
    //     label: '迄日',
    //     type: 'date',
    //     required: true,
    // },
    // endTime: {
    //     label: '迄時',
    //     type: 'time',
    //     required: true,
    // },
    elseInfo: {
        label: '其他',
        type: 'textarea',
    },
}
