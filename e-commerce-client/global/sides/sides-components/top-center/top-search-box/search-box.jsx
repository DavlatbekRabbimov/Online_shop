import React from 'react';
import {FiSearch} from "react-icons/fi";
import {useSearchBox} from "../../../../provider/serach-box-provider.jsx";

export const SearchBox = () => {

    const { searchTerm, setSearchTerm } = useSearchBox();

  return (
      <div id={`search-box`}
           className={`search-box-container`}>
          <div className={`search-box-icon-container`}>
              <FiSearch className={`search-box-icon`}/>
          </div>

          <input id={`search-box-input`}
                 type={`text`}
                 className={`search-box-input`}
                 maxLength={32}
                 placeholder={`Search Box`}
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
          />
      </div>
  );
}
