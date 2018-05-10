import React  from 'react';
import Rest from './rest';
import Python from './python';

const Innovatie = () => {
    return (
        <div id="tabs">
            <div className="container">
                <h6 className="section-title h1">Innovatie</h6>
                <div className="row">
                    <div className="col-xs-12 ">
                        <nav>
                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-rest-tab" data-toggle="tab" href="#nav-rest" role="tab" aria-controls="nav-rest" aria-selected="true">.NET RESTful API</a>
                                <a className="nav-item nav-link" id="nav-python-tab" data-toggle="tab" href="#nav-python" role="tab" aria-controls="nav-python" aria-selected="false">Python Fundamentals</a>
                                </div>
                        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-rest" role="tabpanel" aria-labelledby="nav-rest-tab">
                                <Rest />
                            </div>
                            <div className="tab-pane fade" id="nav-python" role="tabpanel" aria-labelledby="nav-python-tab">
                                <Python />
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

export default Innovatie;