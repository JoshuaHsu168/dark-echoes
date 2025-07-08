import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode.</p>
        </section>
      );
    }

    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>Episode #: {selectedEpisode.id}</p>
        <p>Description: {selectedEpisode.description}</p>
      </section>
    );
  }

  function Season() {
    return (
      <section className="season">
        <h2>Season 1</h2>
        <ul className="season">
          {episodes.map((episode) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              E{episode.id}: {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Season />
        <EpisodeDetails />
      </main>
    </>
  );
}
