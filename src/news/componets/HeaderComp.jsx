
export const HeaderComp = () => {
  return (
    <header className="blog-header py-3 mb-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-8 text-center pb-2">   
            <h2 className="blog-header-logo text-dark" >Todo sobre Programación</h2>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">      
            <a className="btn btn-sm btn-outline-secondary" href="#">Invitame un café</a>
          </div>
        </div>
      </header>
  )
}
