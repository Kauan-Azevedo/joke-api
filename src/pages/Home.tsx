import { Navigation } from '../components/Navigation';
import { useJoke } from '../hooks/useJoke';

export const Home = () => {
  const { jokeText, isLoading, refetch } = useJoke();

  return (
    <div>
      <Navigation />
      <h1>Piada do Dia</h1>

      {isLoading ? (
        <div>
          <div className="spinner"></div>
          <p className="loading-text">Carregando nova piada...</p>
        </div>
      ) : (
        <p>{jokeText}</p>
      )}

      <button onClick={() => refetch()} disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Carregar outra'}
      </button>
    </div>
  );
};
