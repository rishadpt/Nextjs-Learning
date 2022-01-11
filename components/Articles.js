import ArticleStyle from '../styles/Article.module.css'

 const Articles = ({articles}) => {
    return (
        <div className={ArticleStyle.grid}>
            {articles.map((article) => (<h3>{article.title}</h3>
            ))}
        </div>
    )
}

export default Articles