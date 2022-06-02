import "./Information.css";

function Information() {
  return (
    <div className="infoData">
      
              <div className="col-md-3 col-sm-6 progressImg">
                <div className="progress yellow">
                    <span className="progress-left">
                        <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">50%</div>
                </div>
            </div>
          
       <div className="flexwrap">
        <div className="information">
          <div>Leads Obtenidos</div>
          <div>
            <strong>50/100</strong>
          </div>
        </div>
        <div className="information">
          <div>Cola de llamados</div>
          <div>
            <strong>50/100</strong>
          </div>
        </div>
        <div className="information">
          <div>Matrículas finalizadas</div>
          <div>
            <strong>50/100</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
