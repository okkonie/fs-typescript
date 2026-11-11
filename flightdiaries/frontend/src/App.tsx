import { useEffect, useState } from "react";
import { type DiaryEntry, type NewEntry } from "./types";
import diaryService from "./services/diaryService";
import axios from "axios";

function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);
  const [date, setDate] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("");
  const [weather, setWeather] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");

  useEffect(() => {
    diaryService.getAll().then((diaries) => setDiaries(diaries));
  }, []);

  const newDiary = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newEntry: NewEntry = {
      date: date,
      visibility: visibility,
      weather: weather,
    };

    try {
      diaryService
        .newDiaryEntry(newEntry)
        .then((addedDiary) => setDiaries(diaries.concat(addedDiary)));

      setDate("");
      setVisibility("");
      setWeather("");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data);
        setTimeout(() => {
          setError("");
        }, 5000);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h1>Flight diaries</h1>
      <div>
        <h2>add new</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={newDiary}>
          <input
            value={date}
            onChange={(event) => setDate(event?.target.value)}
            placeholder="date"
          />
          <br />
          <input
            value={visibility}
            onChange={(event) => setVisibility(event?.target.value)}
            placeholder="visibility"
          />
          <br />
          <input
            value={weather}
            onChange={(event) => setWeather(event?.target.value)}
            placeholder="weather"
          />
          <br />
          <button type="submit">add</button>
        </form>
      </div>

      <h2>diaries</h2>
      <div>
        {diaries.map((d) => (
          <div key={d.id}>
            <p>
              date: {d.date}
              <br />
              visibility: {d.visibility}
              <br />
              weather: {d.weather}
              <br />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
