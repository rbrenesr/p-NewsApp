export const HeaderComp = () => {
  return (
    <header className="blog-header py-3 mb-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-8 text-center pb-2">
          <h2 className="blog-header-logo text-dark">
            Todo sobre Programación
          </h2>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <button
            type="button"
            className="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Invitame un café
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Invitame un café !!
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Gracias por el apoyo</p>
                  <a
                    target="_blank"
                    href="https://www.paypal.com/paypalme/rbrenesrcr?country.x=CR&locale.x=es_XC"
                  >
                    {" "}
                    PayPal{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
