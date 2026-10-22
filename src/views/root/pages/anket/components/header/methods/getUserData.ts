import Phone from '@/src/services/phone/Phone.service.ts';

import I from '../types.ts';

const getUserData: I['getUserData'] = function () {
    const { authUser } = this.props;

    return {
        firstName: authUser.first_name!,
        lastName: authUser.last_name!,
        phone: new Phone().format(authUser.phone),
        mailing: authUser.mailing ? '1' : undefined,
    };
};

export default getUserData;
