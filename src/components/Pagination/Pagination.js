import React from 'react'
import './pagination.css'

const Pagination = ({ page, setPage, items }) => {
    let anchors = [];
    let n = Math.ceil(items.length / 6);
    for (let index = 0; index < n; index++) {
        let classes = (page === index + 1) ? "active" : "";
        anchors.push(<a href="#" onClick={() => setPage(index + 1)} className={classes}>
            {index + 1}
        </a>)
    }
    return (
        <div class="center">
            <div class="pagination">
                <a href="#">&laquo;</a>
                {
                    anchors
                }


                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}

export default Pagination