import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PersonPhoto from "@components/PersonPage/PersonPhoto";
import PersonInfo from "@components/PersonPage/PersonInfo";
import PersonLinkBack from "@components/PersonPage/PersonLinkBack";
import UiLoading from "@ui/UiLoading";
import { getApiResource } from "@utils/network";
import { getPeopleImage } from "@services/getPeopleData";
import { API_PERSON } from "@constants/api";

import styles from "./PersonPage.module.css";

const PersonFilms = React.lazy(() =>
  import("@components/PersonPage/PersonFilms")
);

const PersonPage = ({ match, setErrorApi }) => {
  const [personId, setPersonId] = React.useState(null);
  const [personInfo, setPersonInfo] = React.useState(null);
  const [personName, setPersonName] = React.useState(null);
  const [personPhoto, setPersonPhoto] = React.useState(null);
  const [personFilms, setPersonFilms] = React.useState(null);
  const [personFavorite, setPersonFavorite] = React.useState(false);

  const favorites = useSelector((state) => state.favorites);

  React.useEffect(() => {
    (async () => {
      const id = match.params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      setPersonFavorite(!!favorites[id]);
      if (res) {
        setPersonInfo([
          {
            title: "Height",
            data: res.height,
          },
          {
            title: "Mass",
            data: res.mass,
          },
          {
            title: "Skin Color",
            data: res.skin_color,
          },
          {
            title: "Hair Color",
            data: res.hair_color,
          },
          {
            title: "Eye Color",
            data: res.eye_color,
          },
          {
            title: "Birth Year",
            data: res.birth_year,
          },
          {
            title: "Gender",
            data: res.gender,
          },
        ]);
        setPersonId(id);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));
        res.films.length && setPersonFilms(res.films);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>
        <div className={styles.container}>
          <PersonPhoto
            id={personId}
            photo={personPhoto}
            name={personName}
            isFavorite={personFavorite}
            setIsFavorite={setPersonFavorite}
          />
          {personInfo && <PersonInfo info={personInfo} />}
          {personFilms && (
            <React.Suspense fallback={<UiLoading />}>
              <PersonFilms films={personFilms} />
            </React.Suspense>
          )}
        </div>
      </div>
    </>
  );
};

PersonPage.propTypes = {
  match: PropTypes.object,
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PersonPage);
