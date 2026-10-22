import React from 'react';

import Default from '@/src/components/default/Default.tsx';

import RulesI from './types.ts';

class Rules extends Default<RulesI['props'], RulesI['state']> implements RulesI {
    parent: RulesI['parent'];

    constructor(props: RulesI['props']) {
        super(props);
        this.state = {};

        this.parent = React.createRef();
    }

    render() {
        return (
            <div ref={this.parent} className="indexRules _SECTION" data-ancor="rules">
                <div className="indexRules__inner _INNER">
                    <p className="indexRules__title">с 04 ноября 2026 по 09 февраля 2027</p>
                    <div className="indexRules__steps">
                        <div className="indexRules__stepsItem">
                            <div className="indexRules__step">
                                <div className="indexRules__stepHead">
                                    <img
                                        className="indexRules__stepThumb"
                                        src={require('@/src/media/step1.png')}
                                    />
                                </div>
                                <div className="indexRules__stepContent">
                                    <p className="indexRules__stepTitle">Покупайте</p>
                                    <p className="indexRules__stepText">
                                        от 3-х <a href="#">акционных продуктов</a> в чеке
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="indexRules__stepsItem">
                            <div className="indexRules__step">
                                <div className="indexRules__stepHead">
                                    <img
                                        className="indexRules__stepThumb"
                                        src={require('@/src/media/step2.png')}
                                    />
                                </div>
                                <div className="indexRules__stepContent">
                                    <p className="indexRules__stepTitle">регистрируйте чеки</p>
                                    <p className="indexRules__stepText">в <span>Личном кабинете</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="indexRules__stepsItem">
                            <div className="indexRules__step">
                                <div className="indexRules__stepHead">
                                    <img
                                        className="indexRules__stepThumb"
                                        src={require('@/src/media/step3.png')}
                                    />
                                </div>
                                <div className="indexRules__stepContent">
                                    <p className="indexRules__stepTitle">Участвуйте</p>
                                    <p className="indexRules__stepText">в розыгрыше призов</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Rules;
