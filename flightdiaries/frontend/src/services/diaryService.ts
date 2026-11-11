import axios from "axios";
import { type DiaryEntry, type NewEntry } from "../types";

const getAll = () => {
  return axios
    .get<DiaryEntry[]>("/api/diaries")
    .then((response) => response.data);
};

const newDiaryEntry = (entry: NewEntry) => {
  return axios
    .post<NewEntry>("/api/diaries", entry)
    .then((response) => response.data);
};

export default { getAll, newDiaryEntry };
