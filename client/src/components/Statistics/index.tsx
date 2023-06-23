import './styles.scss';
import { StatisticsModel } from '../../types/PlayerModel';

export const Statistics = ({ requestState, deaths, kills }: StatisticsModel) => {
    const [isRequestSend, setIsRequestSend] = requestState;
    const ratioKillToDeaths = deaths > 0 ? kills / deaths : kills;

    const handleClick = () => {
        setIsRequestSend(true);
    };

    return (
        <div className="statistics-root">
            <div className="statistics-wrapper">
                <p>K</p>
                <p>D</p>
                <p>K/D</p>
                <p>{kills}</p>
                <p>{deaths}</p>
                <p>{ratioKillToDeaths.toFixed(2)}</p>
            </div>
            <button
                className="statistics-friend__button"
                type="button"
                onClick={handleClick}
            >
                {
                    isRequestSend ? 'Request was send' : 'Add friend +'
                }
            </button>
        </div>
    );
};
