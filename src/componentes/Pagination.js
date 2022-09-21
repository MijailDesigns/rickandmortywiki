import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, SetPageNumber}) => {

    let pageChange = (event) => {
        SetPageNumber(event.selected + 1);
    };

    // const [width, setWidth] = useState(window.innerWidth);
    // const updateDimensions = () => {
    //     setWidth(window.innerWidth);
    // };

    // useEffect(() => {
    //     window.addEventListener("resize", updateDimensions);
    //     return () => window.removeEventListener("resize", updateDimensions);
    // }, []);

  return (
    <>
        <ReactPaginate 
            className="pagination justify-content-center my-4 gap-4"
            //para cambiar el nombre de los botones
            nextLabel="Next"
            previousLabel="Prev"
            onPageChange={pageChange}
            //aca recibo la info de cuentas paginas existen, debo pasarla para que funcione
            pageCount={info?.pages}
            //si estamos en la pgina 1 y pulsamos prev se mantendra en la pagina 1
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            previousClassName="btn btn-dark fs-5 prev"
            nextClassName="btn btn-dark fs-5 next"
            pageClassName="page-item"
            pageLinkClassName="page-link link-dark"
            activeClassName="active"
            // marginPagesDisplayed={width < 576 ? 1 : 2}
            // pageRangeDisplayed={width < 576 ? 1 : 2}


            // x className="pagination justify-content-center my-4 gap-4"
            // x nextLabel="Next"
            // x forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            // x previousLabel="Prev"
            // previousClassName="btn btn-primary fs-5 prev"
            // nextClassName="btn btn-primary fs-5 next"
            // activeClassName="active"
            // marginPagesDisplayed={width < 576 ? 1 : 2}
            // pageRangeDisplayed={width < 576 ? 1 : 2}
            // x pageCount={info?.pages}
            // x onPageChange={pageChange}
            // pageClassName="page-item"
            // pageLinkClassName="page-link"
        />
    </>
  )
}

export default Pagination