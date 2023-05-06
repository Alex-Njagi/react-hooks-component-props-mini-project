import { Article } from "./Article";

export function ArticleList ({posts}) {
    return (
        <main>
            {posts.map((post)=>(
                <Article 
                    key={post.id}
                    post={post}
                />
            ))}
        </main>
    )
}