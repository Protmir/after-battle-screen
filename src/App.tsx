import './App.scss';
import { Table } from './components/Table';

export const App = () => (
    <div className="main-root">
        <h1>
            <span className="main-title__red">Team 2 </span>
            <span className="main-title__gold">WIN</span>
        </h1>
        <div className="main-wrapper__table">
            <Table title="Team 1" />
            <Table title="Team 2" isRed />
        </div>
    </div>
);
