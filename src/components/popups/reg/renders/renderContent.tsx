import React from 'react';

import List from '@/src/components/list/List.tsx';

import I from '../types.ts';

import { regSteps } from '../static/steps.ts';

const renderContent: I['renderContent'] = function (this: I) {
    const { currentStep, updateListRenderKey } = this.state;

    return (
        <div className="popup__innerBox">
            <List
                renderKey={[currentStep, updateListRenderKey].join('')}
                items={[{ _id: currentStep }]}
                parentClass="popup__steps"
                itemClass="popup__stepsItem"
                itemStyleProps={[]}
                parentStyleProps={['width']}
                parentRealStyleProps={['width']}
                render={({ item }) => ({
                    item: this.renderStep(item._id),
                })}
                allItems={Object.keys(regSteps)}
                currentItem={currentStep}
                resizeWidth={true}
            />
        </div>
    );
};

export default renderContent;
