export default function PageNavigation({page, setPage}) {

    return (
        <div className="page-nav-button">
            <button
                onClick={() => {
                    setPage((currentPage) => currentPage - 1);
                }}
                disabled={page === 0}
                >
                Previous Page
                </button>
                <button
                onClick={() => {
                    setPage((currentPage) => currentPage + 1);
                }}
                //disabled={PAGE_LENGTH * page >= totalCount}
                >
                Next Page
            </button>
        </div>
    )
}