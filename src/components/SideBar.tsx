import { GenreProps } from '../App'
import { Button } from './Button';

import '../styles/sidebar.scss';

interface SideBarProps {
  selectedGenreId: number,
  genres: GenreProps[],
  onChangeGenre: (id: number) => void,
}

export function SideBar({ selectedGenreId, genres, onChangeGenre  }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onChangeGenre(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )  
}
