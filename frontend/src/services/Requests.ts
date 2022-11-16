import { Api } from "../providers";
import { Music } from "../schemas";
import { Search } from "react-router-dom";

const getBestSolution = (
    uri: string,
    numberOfSongs: number,
    numberOfMusicGroup: number,
    valence: number,
    acousticness: number,
    danceability: number,
    energy: number,
    instrumentalness: number,
    liveness: number,
    speechiness: number,
    customBand: boolean,
    nameCustomBand: string,
    artistCustomBand: string) => Api.get<Music[]>(`search/${uri}/${numberOfSongs}/${numberOfMusicGroup}/${valence}/${acousticness}/${danceability}/${energy}/${instrumentalness}/${liveness}/${speechiness}/${customBand}/${nameCustomBand}/${artistCustomBand}`)

export const Requests = {
    getBestSolution
}