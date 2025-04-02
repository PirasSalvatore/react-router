import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Post() {

    const navigate = useNavigate()

    const { slug } = useParams()
    console.log(slug);

    const [post, setPost] = useState({
        title: '',
        slug: '',
        content: '',
        image: '',
        tags: ['']
    })

    useEffect(() => {

        fetch(`http://localhost:3000/api/v1/posts/${slug}`)
            .then(res => res.json())
            .then(data => {
                setPost(data)
                console.log(data);

            })
            .catch(err => console.error(err))


    }, [slug])

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
                    <div className="row">
                        <div className="col-12">

                            <button type="button" className="btn btn-primary" onClick={() => navigate(-1)}>
                                Back
                            </button>


                        </div>

                        <div className="col-4">
                            <img src={`http://localhost:3000${post.image}`} alt="" />
                        </div>

                        <div className="col-8">
                            <h1>{post.title}</h1>
                            <p>
                                {post.content}
                            </p>
                        </div>

                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-primary" onClick={() => navigate(`/post/${post.id - 1}`)}>
                                        Prev
                                    </button>

                                </div>
                                <div className="col-6">

                                    <button type="button" className="btn btn-primary" onClick={() => navigate(`/post/${post.id - 1}`)}>
                                        Next
                                    </button>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </main>
        </>
    )
}