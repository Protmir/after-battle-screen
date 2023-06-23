import './styles.scss';
import { Player } from '../Player';
import { userData } from './userData';

export const Table = ({ title, isRed = false }: {title: string, isRed?: boolean}) => (
    <div className="table-wrapper">
        <h2 className={`table-title ${isRed ? 'red' : 'blue'}`}>
            {title}
        </h2>
        <table className="table">
            <thead>
                <tr>
                    <th className="table-avatar__column">
                        <p>Avatar</p>
                    </th>
                    <th className="table-full__column">
                        <p>Nickname</p>
                    </th>
                    <th className="table-points__column">
                        <p>Points</p>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    userData.sort((a, b) => b.point - a.point).map(player => (
                        <Player {...player} />
                    ))
                }
            </tbody>
        </table>
    </div>
);
