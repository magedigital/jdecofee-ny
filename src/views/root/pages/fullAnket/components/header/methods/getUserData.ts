import I from '../types.ts';

import { fullAnketFields } from '../static/fields.tsx';

const getUserData: I['getUserData'] = function () {
    const { extra } = this.state;
    const { authUser } = this.props;
    const data: Partial<Record<string, string>> = {};

    if (authUser) {
        (Object.keys(fullAnketFields) as (keyof typeof fullAnketFields)[]).forEach((name) => {
            // const field = fullAnketFields[name];

            data[name] = (authUser[name as keyof typeof authUser] ??
                extra?.extended[name as never]) as string;
        });
    }

    return data;
};

export default getUserData;
