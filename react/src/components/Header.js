import React from 'react';
import Carousel from './Carousel';

const Header = () => {

    return (
        <div className="header pb-5">
            <div className="container-fluid">

            {/* <!-- Body --> */}
            <div className="header-body pb-0">
                <div className="row align-items-end">
                <div className="col">

                    {/* <!-- Pretitle --> */}
                    <h6 className="header-pretitle text-secondary">
                    Nowości
                    </h6>

                    {/* <!-- Title --> */}
                    <h1 className="header-title">
                    Zobacz najnowsze emisje!
                    </h1>

                </div>
                </div>
                {/* <!-- / .row --> */}
            </div>
                {/* <!-- / .header-body --> */}

            {/* <!-- Footer --> */}

            <Carousel />

            </div>
        </div>
    )
}

export default Header;