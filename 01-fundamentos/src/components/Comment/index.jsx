import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar/index';

import styles from './styles.module.css'

export const Comment = () => {
    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                srcImg="https://avatars.githubusercontent.com/u/15836394?v=4" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Alexandre Soares</strong>
                            <time title='02 de Fevereiro as 08:30h' dateTime="2024-02-02 08:30:33">Cerca de 1h atras</time>
                        </div>

                        <button title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}