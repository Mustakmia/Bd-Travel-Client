import React from 'react';
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const Explore = () => {
    const [packages, setPackages] = useState([]);

    const [pageCount, setpageCount] = useState(0);

    let limit = 10;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/photos'
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            // console.log(Math.ceil(total/12));
            setPackages(data);
        };

        getComments();
    }, [limit]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/photos${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setPackages(commentsFormServer);
        // scroll to the top
        //window.scrollTo(0, 0)
    }
    return (
        <div>
            <h1>Coming soon</h1>
            <div className="container">
                <div className="row m-2">
                    {packages.map((pack) => {
                        return (
                            <div key={pack.id} className="col-sm-6 col-md-4 v my-2">
                                <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center h2">{pack.albumId} </h5>
                                        <h6 className="card-subtitle mb-2 text-muted text-center">
                                            {pack.title}
                                        </h6>
                                        <p className="card-text">{pack.url}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
};

export default Explore;