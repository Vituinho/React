
import { ThumbsDownIcon } from 'lucide-react';
import { DefaultButton } from '../DefaultButton';
import styles from './styles.module.css'
import { ToastContentProps } from 'react-toastify';

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
    return(
        <>
            <div className={styles.container}>
                <p>{data}</p>

                <div className={styles.buttonsContainer}>
                    <DefaultButton
                        onClick={() => closeToast(true)}
                        icon={<ThumbsDownIcon/>}
                        aria-label='Confirmar ação e fechar'
                        title='Confirmar ação e fechar'
                    />
                    <DefaultButton
                        onClick={() => closeToast(false)}
                        icon={<ThumbsDownIcon/>}
                        color='red'
                        aria-label='Confirmar ação e fechar'
                        title='Confirmar ação e fechar'
                    />
                </div>
            </div>
        </>
    ); 
}