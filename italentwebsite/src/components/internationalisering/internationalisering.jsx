import React  from 'react';
import BusIt from './busit';
import Stage from './stage';

const Internationalisering = () => {
    return (
        <div id="tabs">
            <div className="container">
                <h6 className="section-title h1">Internationalisering</h6>
                <div className="row">
                    <div className="col-xs-12 ">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-stage-tab" data-toggle="tab" href="#nav-stage" role="tab" aria-controls="nav-stage" aria-selected="true">Internationale Stage</a>
                                <a className="nav-item nav-link" id="nav-busit-tab" data-toggle="tab" href="#nav-busit" role="tab" aria-controls="nav-busit" aria-selected="false">BusIT 2017</a>
                            </div>
                        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                            <div className="tab-pane fade " id="nav-busit" role="tabpanel" aria-labelledby="nav-busit-tab">
                                <BusIt />
                            </div>
                            <div className="tab-pane fade show active" id="nav-stage" role="tabpanel" aria-labelledby="nav-stage-tab">
                                <Stage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
};

export default Internationalisering;