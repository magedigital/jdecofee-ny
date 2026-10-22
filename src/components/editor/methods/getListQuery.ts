import I from '../types.ts';

const getListQuery: I['getListQuery'] = function () {
    const query: FilterQueryT[] = [
        { name: 'skip', value: this.listCurrentStep.toString() },
        { name: 'limit', value: this.listStep.toString() },
    ];

    return query;
};

export default getListQuery;
