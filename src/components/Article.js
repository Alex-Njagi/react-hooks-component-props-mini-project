export function Article ({post: {title, date, preview}}) {
    return (
        <article>
            <h3>{title}</h3>
            <small defaultValue= "January 1, 1970">
                {date}
            </small>
            <p>{preview}</p>
        </article>
    )
}