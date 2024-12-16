import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useJoke = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['joke'],
    queryFn: async () => {
      const res = await axios.get('https://v2.jokeapi.dev/joke/Any');
      return res.data;
    }
  });

  const jokeText = data?.type === 'single' ? data.joke : `${data?.setup} - ${data?.delivery}`;

  return { jokeText, isLoading, refetch };
};
