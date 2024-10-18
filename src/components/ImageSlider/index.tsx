import React, { useState } from 'react';
import './ImageSlider.less';
import { IImageProduct } from '../../constant/interface.ts';

interface IListImageProps {
  listUrl: IImageProduct[];
}

const ImageSlider: React.FC<IListImageProps> = ({ ...props }: IListImageProps) => {
  const { listUrl } = props;
  const [activeImage, setActiveImage] = useState<IImageProduct>(listUrl[0] ?? {
    url: '',
    id: -1
  });

  const handleImageClick = (item: IImageProduct, index: number) => {
    setActiveImage(item);
    const imgElements = document.querySelectorAll('.image-slider__item');
    if (imgElements[index]) {
      imgElements[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };


  return (
    <div className="image-slider__container">
      <div className="image-slider__main-image-container">
        <img
          className="image-slider__main-image"
          loading={'lazy'}
          src={activeImage.url ?? ''}
          alt={activeImage.url ?? ''}
        />
      </div>
      <div className="image-slider__sub-image-container">
        <div className="image-slider__list-image">
          {listUrl.map((item, index) => (
            <div className={`${activeImage.id === item.id ? 'image-slider__item--active' : ''}`}>
              <img
                src={item.url}
                key={index}
                alt={item.url}
                onClick={() => handleImageClick(item, index)}
                className="image-slider__item image-slider__sub-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
