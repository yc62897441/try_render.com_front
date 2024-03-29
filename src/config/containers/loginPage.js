// 登入表格 config
export const loginConfig = {
    account: {
        label: '帳號',
        type: 'text',
        required: true,
    },
    password: {
        label: '密碼',
        type: 'password',
        autoComplete: true,
        required: true,
    },
}

// 註冊表格 config
export const registerConfig = {
    account: {
        label: '帳號',
        type: 'text',
        required: true,
    },
    password: {
        label: '密碼',
        type: 'password',
        autoComplete: false,
        required: true,
    },
    passwordCheck: {
        label: '密碼確認',
        type: 'password',
        autoComplete: false,
        required: true,
    },
}

// 忘記密碼表格 config
export const forgetPasswordConfig = {
    account: {
        label: '帳號',
        type: 'text',
        required: true,
    },
    email: {
        label: 'email',
        type: 'email',
        required: true,
    },
}

// loginPage 所有的 APIs
export const loginApiConfig = {
    login: {
        path: '/auth/signin',
        method: 'post',
    },
    register: {
        path: '/auth/register',
        method: 'post',
    },
    forgetPassword: {
        path: '/auth/forgetPassword',
        method: 'post',
    },
}
