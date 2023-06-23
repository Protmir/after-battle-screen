import './styles.scss';
import avatar from '../../assets/avatar.png';

export const Avatar = ({ src = avatar, isDead, nickname }: {src?: string, isDead: boolean, nickname: string}) => (
    <div className={isDead ? 'avatar-wrapper dead' : 'avatar-wrapper'}>
        <img src={src} alt={nickname} />
    </div>
);
