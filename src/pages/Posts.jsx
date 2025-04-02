import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Posts() {

    const [postsList, setPostsList] = useState([{
        id: '',
        title: '',
        slug: '',
        content: '',
        image: '',
        tags: ['']
    }])

    useEffect(() => {

        fetch('http://localhost:3000/api/v1/posts')
            .then(res => res.json())
            .then(data => setPostsList(data))
            .catch(err => console.error(err))

    }, [])

    return (
        <>
            <main>

                <div className="p-5 mb-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Boolean Blog</h1>
                        <p className="col-md-8 fs-4">
                            Using a series of utilities, you can create this jumbotron, just
                            like the one in previous versions of Bootstrap. Check out the
                            examples below for how you can remix and restyle it to your liking.
                        </p>
                    </div>
                </div>

                <div className="container">
                    <div className="row row-cols-md-3 row-cols-lg-5 gap-4">
                        {
                            postsList.map((post) => {
                                return (
                                    <div key={`post-${post.id}`} className="card mb-3" >
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={`http://localhost:3000${post.image}`} className="img-fluid rounded-start" alt={post.title} />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{post.title}</h5>
                                                    <p className="card-text">{post.content.substring(0, 30) + '....'}</p>
                                                    <Link to={`/post/${post.slug}`}>
                                                        <button className="btn btn-primary">
                                                            Guarda
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

            </main>
        </>
    )
}