/* eslint-disable react/prop-types */
import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Comment } from '../Comment';
import { Avatar } from '../Avatar';

import styles from './styles.module.css'

export const Post = ({ author, content, publishedAt }) => {
    const [comments, setComments] = useState([
        'Post muito bacana, hein!!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleNewCommentChange = () => {
        setNewCommentText(event.target.value)
    }

    const handleCreateNewComment = () => {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar srcImg={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    Publicado {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe um feedback</strong>

                <textarea 
                    name="comment"
                    placeholder='Deixe um comentario'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}
            </div>
        </article>
    )
}

