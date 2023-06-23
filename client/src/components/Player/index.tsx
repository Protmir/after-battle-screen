import { useState } from 'react';
import { Avatar } from '../Avatar';
import { StyledTooltip } from '../Tooltip/StyledTooltip';
import { Statistics } from '../Statistics';
import { PlayerModel } from '../../types/PlayerModel';

export const Player = ({
    name,
    isDead = false,
    point,
    stats,
}: PlayerModel) => {
    const requestState = useState(false);

    return (
        <tr>
            <td>
                <Avatar nickname={name} isDead={isDead} />
            </td>
            <td className="table-name__data">
                <StyledTooltip
                    enterTouchDelay={0}
                    title={<Statistics requestState={requestState} {...stats} />}
                >
                    <p>{name}</p>
                </StyledTooltip>
            </td>
            <td className="table-points__data">
                <p>{point}</p>
            </td>
        </tr>
    );
};
