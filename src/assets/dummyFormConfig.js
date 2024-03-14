export const dummyFormConfig = {
    name: {
        label: '姓名',
        type: 'text',
        required: true,
        readOnly: false,
    },
    email: {
        label: 'email',
        type: 'email',
    },
    tel: {
        label: '手機',
        type: 'tel',
        required: true,
        pattern: '[0-9]{4}-[0-9]{3}-[0-9]{3}',
        patternDemo: ' Format: 0900-001-001',
    },
    gender: {
        label: '性別',
        type: 'ratio',
        ratioList: [
            { label: '女', value: 0 },
            { label: '男', value: 1 },
            { label: '其他', value: 2 },
        ],
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
    },
    preference: {
        label: '偏好',
        type: 'checkbox',
        checkList: [
            { label: '短毛貓', value: 0 },
            { label: '長毛貓', value: 1 },
            { label: '波絲貓', value: 2 },
            { label: '玳瑁貓', value: 3 },
            { label: '虎斑貓', value: 4 },
        ],
    },
    startDate: {
        label: '起日',
        type: 'date',
        required: true,
    },
    startTime: {
        label: '起時',
        type: 'time',
        required: true,
    },
    endDate: {
        label: '迄日',
        type: 'date',
        required: true,
    },
    endTime: {
        label: '迄時',
        type: 'time',
        required: true,
    },
    elseInfo: {
        label: '其他',
        type: 'textarea',
    },
}
