import React from 'react';

import Prize from '../components/prize/Prize.tsx';

// import Prize from '../components/prize/Prize.tsx';
import I from '../types.ts';

const renderPrizes: I['renderPrizes'] = function () {
    // const { authUser } = this.props;
    const { prizes } = this.state;

    if (!prizes || !prizes.length) {
        return;
    }

    return (
        <div
            className={this.getClass(
                'profile__prizes _FULL_W _COL _COL_H_CENTER',
                prizes && '_init',
            )}
        >
            <h3 className="profile__prizesTitle _TITLE _TITLE_MED">мои призы</h3>
            <div className="profile__prizesContent _FULL_W">
                <div className="profile__prizesCards">
                    {(prizes || []).map((prize, key) => (
                        <div className="profile__prizesCard" key={key}>
                            <Prize prize={prize} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default renderPrizes;
