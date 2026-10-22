import { anketRequests } from '@/src/api/requests/anket.ts';
import checkAuth from '@/src/utils/checkAuth.ts';

import I from '../types.ts';

const uploadFile: I['uploadFile'] = async function ({ file, name }) {
    await anketRequests.upload({ file, name });
    await checkAuth({});
};

export default uploadFile;
