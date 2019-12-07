import React,{usestate,useEffect} from 'react'
import Style from './style'
export default () => {
    return(<>
    <div className="container">
        <div className="wrap">
            <div className="button" tabindex="1">
                <span className="ion-ionic"/>
            </div>
            <div className="button" tabindex="2">
                <span className="ion-plus-circled"/>
            </div>
            <div className="button" tabindex="3">
/            </div>
            <div class="button" tabindex="3">
                <span className="ion-power"/>
            </div>
            <hr />
            <h3>Click Effect</h3>
        </div>
    <Style/>
    </div>

    </>);
};

