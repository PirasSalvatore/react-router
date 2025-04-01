import { NavLink } from "react-router-dom";

export default function Home() {

    return (
        <>
            <main>
                <div class="p-5 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="display-5 fw-bold">Boolean Blog</h1>
                        <p class="col-md-8 fs-4">
                            Using a series of utilities, you can create this jumbotron, just
                            like the one in previous versions of Bootstrap. Check out the
                            examples below for how you can remix and restyle it to your liking.
                        </p>
                        <NavLink class="btn btn-primary btn-lg" to='/posts'>
                            Guarda i tuoi Post
                        </NavLink>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h1> guarda quanto è bello il nostro blog</h1>
                                </div>
                                <div className="card-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui aliquam temporibus eaque nobis maiores, dignissimos incidunt at, quia autem cupiditate a, laborum quam beatae fugit possimus doloribus libero dicta!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}