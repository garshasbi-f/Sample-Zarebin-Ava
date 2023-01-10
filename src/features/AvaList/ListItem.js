// import React from "react";
// import classes from "./ListItem.module.css";

// const ListItem = ({ items }) => {
//   return (
//     <div className={classes.card}>
//       <div>
//         <img src={items.cover.small} alt="" />
//       </div>

//       <div className={classes["card__info"]}>
//         <h5>{items.name.persian}</h5>
//         <h6>
//           <a href="#">
//             {items.type == "SONG"
//               ? items.artist[0].persian
//               : items.praiseName[0].persian}
//           </a>
//         </h6>
//         <h6>
//           <a href={items.chosenTrack.pageUrl}>{items.chosenTrack.source}</a>
//         </h6>
//       </div>

//       <div>
//         <audio controls>
//           <source src={items.chosenTrack.urls[5]} />
//         </audio>
//       </div>
//     </div>
//   );
// };

// export default ListItem;

//-----------------------------------------------------------------------------


import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";


export default function MediaControlCard({ items }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", direction: "rtl" , margin: 1 , padding: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 , borderRadius: 2 , marginLeft: 2 }}
        image={items.cover.small}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {items.name.persian}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {items.type == "SONG"
              ? items.artist[0].persian
              : items.praiseName[0].persian}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <audio controls>
            <source src={items.chosenTrack.urls[5]} />
          </audio>
        </Box>
      </Box>
    </Card>
  );
}
