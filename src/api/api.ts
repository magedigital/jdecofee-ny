const routes = {
    CONTENT: '/content',
};

export const API = {
    CHEQUE: {
        SEND_FORM: '/CheckRegistration',
        ORDER: '/AddCheckPrize',
    },
    AUTH: {
        LOGIN: '/Login',
        LOGOUT: '/Logout',
        REGISTRATION: '/Registration',
        GET_USER: '/GetParticipantInfo',
        GET_INFO: '/GetCabinetInfo',
        BOT_REGISTRATION: '/AddEmailToChatBot',
        BOT_LOGIN: '/LoginWithChatBot',
    },
    CONTENT: {
        MAIN: routes.CONTENT + '/main/',
        FAQ: routes.CONTENT + '/faq/',
        PRODUCTS: routes.CONTENT + '/about/',
        PROFILE: routes.CONTENT + '/profile/',
        FIVEKA: routes.CONTENT + '/5ka/',
    },
    FAQ: {
        SEND_FORM: '/SendQuestion',
    },
    WINNERS: {
        GET_LIST: '/GetWinnerList',
    },
    ANKET: {
        SEND: '/SendParticipantInfo',
        UPLOAD: '/UploadParticipantFile',
        GET_AKT: '/GetAct',
        RESET_AKT: '/ResetParticipantInfoStatus',
        SEND_AKT: '/SendParticipantAct',
    },
    RAFFLE: {
        START: '/WelcomeRaffle',
        GAME: '/PlayGame',
    },
    CODE: {
        REG: '/CodeRegistration',
    },
    ORDER: {
        SEND: '/AddUserPrize',
    },
};
