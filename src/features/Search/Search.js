// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import classes from "./Search.module.css";
// import {useDispatch } from "react-redux";
// import { setSearchQuery , setDefaultList} from "./SearchSlice";
// import { getAvaList } from "./Action";
// import { setDefaultPage } from "../AvaList/ListSlice";

// const Search = () => {
//   const [query, setQuery] = useState("");
//   const dispatch = useDispatch()

//   const searchInputHadler = (event) => {
//     setQuery(event.target.value)
//   };

//   const searchHandler = (e) => {
//     e.preventDefault()
//     dispatch(setSearchQuery(query));
//     dispatch(setDefaultList());
//     dispatch(getAvaList({query , page:1}));
//     dispatch(setDefaultPage());
//   };

//   return (
//     <div>
//       <form onSubmit={searchHandler} className={classes.searchBar}>
//         <TextField
//           id="searchQuery"
//           label="Search"
//           variant="outlined"
//           type="text"
//           name="search"
//           value={query}
//           placeholder="search...."
//           onChange={searchInputHadler}
//         />

//         <IconButton aria-label="delete" onClick={searchHandler}>
//           <SearchIcon />
//         </IconButton>
//       </form>
//     </div>
//   );
// };

// export default Search;

//------------------------------------------------------------------------------------------

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { useDispatch } from "react-redux";
import { setSearchQuery, setDefaultList } from "./SearchSlice";
import { getAvaList } from "./Action";
import { setDefaultPage } from "../AvaList/ListSlice";
import { Search, SearchIconWrapper, StyledInputBase } from "./Search.styled";

export default function SearchAppBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const searchInputHadler = (event) => {
    setQuery(event.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));
    dispatch(setDefaultList());
    dispatch(getAvaList({ query, page: 1 }));
    dispatch(setDefaultPage());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            ZAREBIN
          </Typography>
          <Search>
            <form onSubmit={searchHandler}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                type="text"
                name="search"
                value={query}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={searchInputHadler}
              />
            </form>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
