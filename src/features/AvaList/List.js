import React, { useEffect } from "react";
import classes from "./List.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchResults,
  selectSearchQuery,
  selectIsLoading,
  selectErrorMessage,
} from "../Search/SearchSlice";
import ListItem from "./ListItem";
import { getAvaList } from "../Search/Action";
import { addPage, selectPage } from "./ListSlice";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const List = () => {
  const resultsList = useSelector(selectSearchResults);
  const page = useSelector(selectPage);
  const query = useSelector(selectSearchQuery);
  const isLoading = useSelector(selectIsLoading);
  const errorMessge = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("oooooo")
  //   dispatch(getAvaList({query , page }));
  // }, [page]);

  const addPageHandler = () => {
    dispatch(addPage());
    dispatch(getAvaList({ query, page }));
  };

  let content = <p>search..</p>;

  if (resultsList.length > 0) {
    content = (
      <>
        {resultsList.map((item) => (
          <ListItem items={item} />
        ))}
      </>
    );
  }

  if (errorMessge) {
    content = <p>{errorMessge}</p>;
  }

  if (isLoading) {
    content = (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <div className={classes.cardSList}>
      {content}
      {resultsList.length > 0 && (
        <Button variant="contained" onClick={addPageHandler}>
          ADD PAGE
        </Button>
      )}
    </div>
  );
};

export default List;
