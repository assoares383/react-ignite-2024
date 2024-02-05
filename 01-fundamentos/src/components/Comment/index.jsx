/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from '../Avatar/index';

import styles from './styles.module.css'

export const Comment = ({ content, onDeleteComment }) => {
    const [likeCount, setLikeCount] = useState(0)
    
    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1
        })
    }

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

                        <button
                            onClick={handleDeleteComment}
                            title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}