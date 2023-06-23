import { PropsWithChildren } from 'react';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import './styles.scss';

export const StyledTooltip = ({
    className,
    children,
    placement = 'right',
    ...props
}: PropsWithChildren<TooltipProps>) => (
    <Tooltip {...props} placement={placement} classes={{ popper: className }}>
        {children}
    </Tooltip>
);
