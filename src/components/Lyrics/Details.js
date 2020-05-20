import React from "react";
import Paper from "@material-ui/core/Paper";

const Details = ({ track, lyrics }) => {
  const {
    track_name,
    artist_name,
    album_id,
    primary_genres,
    explicit,
    updated_time,
  } = track;
  const { music_genre_list } = primary_genres;
  const { music_genre_name } =
    music_genre_list.length && music_genre_list[0].music_genre;
  const release_date =
    typeof updated_time === "string"
      ? new Date(updated_time).toDateString()
      : "Invalid Date";
  const lyricsParagraphs = lyrics.split("\n");
  lyricsParagraphs.splice(lyricsParagraphs.length - 3, 3);

  return (
    <Paper className="paper defaultPaper">
      <strong className="title">{`${track_name} - ${artist_name}`}</strong>
      <br />
      {lyricsParagraphs.map((lyricsParagraph, index) =>
        lyricsParagraph === "" || lyricsParagraph === "..." ? (
          <br key={index} />
        ) : (
          <p key={index}>{lyricsParagraph}</p>
        )
      )}
      <ul>
        <li>
          <strong>Album ID:</strong>
          <span>{album_id}</span>
        </li>
        <li>
          {music_genre_name && (
            <li>
              <strong>Song Genre: </strong>
              <span>{music_genre_name}</span>
            </li>
          )}
        </li>
        <li>
          <strong>Explicit words: </strong>
          <span>{explicit === 0 ? "Yes" : "No"}</span>
        </li>
        {release_date !== "Invalid Date" && (
          <li>
            <strong>Release Date: </strong>
            <span>{release_date}</span>
          </li>
        )}
      </ul>
    </Paper>
  );
};

Details.displayName = "Details";

export default Details;
