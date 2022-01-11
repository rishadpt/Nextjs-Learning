import ArticleListStyle from '../styles/Header.module.css'
import Link from 'next/link'

const ArticlesItem = ({articles}) => {
    return (
        <Link href="/article/[id]" as={`/article/${articles.id}`}>
        <a className={ArticleListStyle.card}>
            <h3>{articles.title} &rarr;</h3>
            <p>{articles.body}</p>
            </a>
            </Link>
        )
  
}

export default ArticlesItem