import ArticleStyle from '../styles/Article.module.css'
import ArticlesItem from './ArticlesItem'

 const Articles = ({articles}) => {
    return (
        <div className={ArticleStyle.grid}>
            {articles.map((article) => (<ArticlesItem  articles={article}/>
            ))}
        </div>
    )
}

export default Articles