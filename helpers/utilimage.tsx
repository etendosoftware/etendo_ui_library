import { ImageType } from "../components/button/Button.types"

export const addImageStyle = (image:ImageType) =>
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
  return result
}