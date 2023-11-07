import Button from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface PageErrorProps {
  className?: string;
}

// Сделать кнопку для возврата на главную
const PageError = ({ className }: PageErrorProps) => {
  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <div>Ошибка!</div>
      <div>
        <Button onClick={() => location.reload()}>Обновить страницу</Button>
      </div>
    </div>
  );
};

export default PageError;
