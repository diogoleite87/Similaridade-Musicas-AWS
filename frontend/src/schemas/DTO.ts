export interface SearchDTO {
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
    artistCustomBand: string
}