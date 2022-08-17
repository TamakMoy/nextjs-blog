import styles from './alert.module.scss';

interface AlertProps {
    type: 'success' | 'error';
}

export const Alert = ({ type }: AlertProps) => {
    return <div className={styles[type]}>
        {type}
    </div>
};
