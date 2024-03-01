import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export function GifGrid({category}) {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && ( <p>Cargando...</p> ) 
        }
        
        <div className='card-grid'>
          {
            images.map((image) => (
              <GifItem key={image.id} title={image.title} url={image.url}/>
            ))
          }
        </div>
        
    </>
  )
}
