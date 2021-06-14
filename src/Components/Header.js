import React from 'react';

const Header= (props) => {
    const {search,onInput,onSearch} = props;

    // const APP_ID= "508120d1";
    // const APP_KEY="902a2b39b2cda3a2fcb53f7abb63f51a";
    return (
        <div className="jumbotron">
           
            <h1 className="display-1">
            <i class="material-icons brand-icon">
              fastfood
            </i>
                Recipe Finder
            </h1>
            
            <div class="input-group w-50 mx-auto"> 
            
                <input type="text" class="form-control" placeholder="Search your Recipe..." 
                    value={search}
                    onChange={onInput}
                />
                <div class="input-group-append">
                    <button className="btn btn-dark" onClick={onSearch}>
                        Search Recipe
                    </button>
                </div>
            
            </div>
        </div>
    )
}

export default Header;

