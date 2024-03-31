import { cityList, cityDistrictList } from '../cityAndDistrict'

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
        selectList: cityList,
        required: true,
    },
    district: {
        label: '行政區',
        type: 'selectDistrict',
        selectList: cityDistrictList,
        required: true,
    },
    address: {
        label: '地址',
        type: 'text',
        required: true,
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
