import {createContext, useContext} from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import Youtube from '../api/youtube';
import YoutubeClient from '../api/youtubeClient';


export const YoutubeApiContext = createContext();

const client = new FakeYoutubeClient();
const youtube = new Youtube(client);
console.log("apicontext", youtube);
console.log('{youtube} ', {youtube});
export function YoutubeApiProvider({children}) {
  // ❓ 왜 {{youtube}}로 전해주어야 하지? {youtube}로 전해주면 왜 안되는거야?
  return <YoutubeApiContext.Provider value={{youtube}}>
      {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}