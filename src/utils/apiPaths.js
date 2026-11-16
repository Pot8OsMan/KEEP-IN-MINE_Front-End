export const API_PATHS = {
    AUTH: {
        REGISTER: '/auth/register',
        LOGIN: '/auth/login',
        ME: '/auth/me',

        LOGOUT: '/auth/logout',
    },
    GOAL: {
        LIST: '/goalList',
        CREATE: '/transactions',
        GET_BY_ID: (id) => `/goal/${id}`,
        UPDATE: (id) => `/updateGoal/${id}`,
        DELETE: (id) => `/removeGoal/${id}`,
    },
};

export default API_PATHS;