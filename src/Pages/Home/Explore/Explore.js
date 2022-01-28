import React, { useEffect, useState } from "react";
import "./Explore.css";
const renderData = (data) => {
    return (
        <ul>
            {data.map((todo, index) => {
                return <li key={index}>{todo.title}</li>;
            })}
        </ul>
    );
};

function PaginationComponent() {
    const [data, setData] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }

    const handleLoadMore = () => {
        setitemsPerPage(itemsPerPage + 5);
    };

    return (
        <>
            <h1>Todo List</h1> <br />
            {renderData(currentItems)}
            <ul className="pageNumbers">
                <li>
                    <button
                        onClick={handlePrevbtn}
                        disabled={currentPage == pages[0] ? true : false}
                    >
                        Prev
                    </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}

                <li>
                    <button
                        onClick={handleNextbtn}
                        disabled={currentPage == pages[pages.length - 1] ? true : false}
                    >
                        Next
                    </button>
                </li>
            </ul>
            <button onClick={handleLoadMore} className="loadmore">
                Load More
            </button>
        </>
    );
}

export default PaginationComponent;















// import React from 'react';
// import ReactPaginate from "react-paginate";
// import { useEffect, useState } from "react";

// const Explore = () => {
//     const [packages, setPackages] = useState([]);

//     const [pageCount, setpageCount] = useState(0);

//     let limit = 10;

//     useEffect(() => {
//         const getComments = async () => {
//             const res = await fetch(
//                 'https://jsonplaceholder.typicode.com/photos'
//             );
//             const data = await res.json();
//             const total = res.headers.get("x-total-count");
//             setpageCount(Math.ceil(total / limit));
//             // console.log(Math.ceil(total/12));
//             setPackages(data);
//         };

//         getComments();
//     }, [limit]);

//     const fetchComments = async (currentPage) => {
//         const res = await fetch(
//             `https://jsonplaceholder.typicode.com/photos${currentPage}&_limit=${limit}`
//         );
//         const data = await res.json();
//         return data;
//     };

//     const handlePageClick = async (data) => {
//         console.log(data.selected);

//         let currentPage = data.selected + 1;

//         const commentsFormServer = await fetchComments(currentPage);

//         setPackages(commentsFormServer);
//         // scroll to the top
//         //window.scrollTo(0, 0)
//     }
//     return (
//         <div>
//             <h1>Coming soon</h1>
//             <div className="container">
//                 <div className="row m-2">
//                     {packages.map((pack) => {
//                         return (
//                             <div key={pack.id} className="col-sm-6 col-md-4 v my-2">
//                                 <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
//                                     <div className="card-body">
//                                         <h5 className="card-title text-center h2">{pack.albumId} </h5>
//                                         <h6 className="card-subtitle mb-2 text-muted text-center">
//                                             {pack.title}
//                                         </h6>
//                                         <p className="card-text">{pack.url}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>

//                 <ReactPaginate
//                     previousLabel={"previous"}
//                     nextLabel={"next"}
//                     breakLabel={"..."}
//                     pageCount={pageCount}
//                     marginPagesDisplayed={1}
//                     pageRangeDisplayed={1}
//                     onPageChange={handlePageClick}
//                     containerClassName={"pagination justify-content-center"}
//                     pageClassName={"page-item"}
//                     pageLinkClassName={"page-link"}
//                     previousClassName={"page-item"}
//                     previousLinkClassName={"page-link"}
//                     nextClassName={"page-item"}
//                     nextLinkClassName={"page-link"}
//                     breakClassName={"page-item"}
//                     breakLinkClassName={"page-link"}
//                     activeClassName={"active"}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Explore;