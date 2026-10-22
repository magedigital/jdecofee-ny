declare global {
    interface Window {
        widthValue: number;
        heightValue: number;
        mediaM: number;
        widthPrevValue: number;
        heightPrevValue: number;
        socAuthUrls: Record<string, string>;
        userAuthorized?: boolean;
        daDataToken: string;
        isVisible: boolean;
        visibillityHandlers: Record<string, (b: boolean) => void>;
        JWT?: string;
        getAppRoot?: () => HTMLElement;
        activateGameApp?: () => void;
        deactivateGameApp?: () => void;
        isBot: boolean;
        getJWT: () => string | undefined;
        saveJWT: (t: string) => void;
        ymId: number;
        ym?: (key: number, name: string, text?: string) => void;
        Telegram?: {
            WebApp?: { close: () => void };
        };
        gameJsName: string;
        gameCssName: string;
        reachGoal?: (s: string) => void;
        _tmr?: any;
        utms?: string[];
        fivepost?: any;
        profileDataPromise?: Promise<void>;
        advcake_data?: any[];
    }

    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_SEO: string;
            REACT_APP_API: string;
            REACT_APP_ENV: 'local' | 'prod';
        }
    }

    type ObjT = Record<any, unknown>;

    type ResponseT<T = {}> = {
        accessToken?: string;
    } & T;

    type ResponseErrorT = {
        accessToken?: string;
        message?: string;
        error?: ErrorT;
    };

    type ErrorT = {
        text: string;
        name?: string;
    };

    type FilterQueryT = {
        name: string;
        value: string;
    };

    type ListenerT<T = MouseEvent | TouchEvent> = (
        event: string,
        listener: (event: T) => void,
        options?: {
            passive?: boolean;
            once?: boolean;
            capture?: boolean;
        },
    ) => void;

    type CustomListenerT = (
        event: string,
        listener: (event: CustomEvent) => void,
        options?: {
            passive?: boolean;
            once?: boolean;
            capture?: boolean;
        },
    ) => void;

    type MetaModelDataT = {
        _id: string;
        cDate: number;
    };

    type FileT = {
        size?: number;
        name?: string;
        width?: number;
        height?: number;
        fullSrc?: string;
    };
}

export type {};
