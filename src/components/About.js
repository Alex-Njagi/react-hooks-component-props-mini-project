export function About ({blogData: {image, about}}) {
    return (
        <aside>
            <img 
                src={image}
                defaultValue="https://via.placeholder.com/215"
                alt="blog logo"
            />
            <p>{about}</p>
        </aside>
    )
}