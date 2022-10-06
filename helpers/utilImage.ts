import {ImageType} from "../components/input/Input.types"

export const getImageStyle = (image:ImageType,disabled:boolean| undefined) =>
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
  if(image.imgHeight)
  {
    result.push({height: image.imgHeight})
  }
  if(disabled)
  {
    result.push({opacity: 0.5})
  }
  return result
}