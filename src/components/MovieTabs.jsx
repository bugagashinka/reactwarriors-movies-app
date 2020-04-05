import React from "react";
import * as filters from "../utils/filters";
import classNames from "classnames";

const MovieTabs = ({ makeActive, onChange }) => {
  let tabsModel = {
    [filters.POPULARITY_DESC_FILTER]: "Popularity",
    [filters.RELEASE_DESC_FILTER]: "Release date",
    [filters.REVENUE_DESC_FILTER]: "Revenue"
  };

  const checkIsActive = tabKey => classNames("btn", "nav-link", { active: tabKey === makeActive });

  const tabItemList = Object.keys(tabsModel).map(key => {
    return (
      <li className="nav-item" key={key}>
        <div className={checkIsActive(key)} onClick={onChange(key)}>
          {tabsModel[key]}
        </div>
      </li>
    );
  });
  return <ul className="tabs nav nav-pills">{tabItemList}</ul>;
};

export default MovieTabs;
