import React from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";
import UiInput from "@ui/UiInput";
import { getApiResource } from "@utils/network";
import { API_SEARCH } from "@constants/api";
import { getPeopleId, getPeopleImage } from "@services/getPeopleData";

import styles from "./SearchPage.module.css";

const SearchPage = ({ setErrorApi }) => {
  const [inputSearchValue, setInputSearchValue] = React.useState("");
  const [people, setPeople] = React.useState([]);

  const getResponse = async (params) => {
    const res = await getApiResource(API_SEARCH + params);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  React.useEffect(() => {
    getResponse("");
  }, []);

  const debouncedGetResponse = React.useCallback(
    debounce((value) => getResponse(value), 300),
    []
  );

  const handleInputChange = (value) => {
    setInputSearchValue(value);
    debouncedGetResponse(value);
  };

  return (
    <>
      <h1 className="header__text">Search</h1>
      <UiInput
        type="text"
        value={inputSearchValue}
        onChange={handleInputChange}
        placeholder="Input character's name"
        classes={styles.input__search}
      />
      <SearchPageInfo people={people} />
    </>
  );
};

SearchPage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
