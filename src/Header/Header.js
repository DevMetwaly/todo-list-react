import React from 'react';
import './Header.css';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Header(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-centered plate"></div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-centered Header">
                    <div className="row">
                        <div className="col-lg-3"></div>
                        <div className="col-lg-4" style={{textAlign:'right'}}>
                            Todo List
                        </div>
                        <div className="col-lg-1">
                            <CircularProgress
                            variant="static"
                            value={props.progress}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}