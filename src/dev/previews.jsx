import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import MovieDetailsPage from "@/pages/movie-details/MovieDetailsPage.jsx";

const ComponentPreviews = () => {
    return (
      <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/MovieDetailsPage">
          <MovieDetailsPage />
        </ComponentPreview>
      </Previews>
    );
}

export default ComponentPreviews