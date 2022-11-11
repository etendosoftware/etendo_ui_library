import {ImageType} from './utilsTypes'

export const addImageStyle = (image:ImageType,disabled?:boolean| undefined) =>
{
  let result = []
  if(image.imgWidth)
  {
    result.push({width: image.imgWidth})
  }
  if(image.imgHeight)
  {
    result.push({height: image.imgHeight})
  }
  if(image.imgMarginRight)
  {
    result.push({marginRight: image.imgMarginRight})
  }
  if(disabled)
  {
    result.push({opacity: 0.5})
  }
  return result
}


export const getImageStyle = (
  image: ImageType,
  disabled: boolean | undefined,
) => {
  let result = [];
  if (image.imgWidth) {
    result.push({width: image.imgWidth});
  }
  if (image.imgHeight) {
    result.push({height: image.imgHeight});
  }
  if (image.imgMarginRight) {
    result.push({marginRight: image.imgMarginRight});
  }
  if (disabled) {
    result.push({opacity: 0.5});
  }
  return result;
};
