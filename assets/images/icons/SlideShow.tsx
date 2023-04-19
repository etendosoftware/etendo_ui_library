import React from 'react';
import {ImageStyle, ViewStyle} from 'react-native';
import {Svg, Path, G, Defs, ClipPath, Rect} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const SlideShow = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 41}
      height={style?.height || 40}
      viewBox="0 0 41 40"
      fill="none"
      style={style}
    >
      <G clip-path="url(#clip0_236_161)">
        <Path
          d="M20.0528 28.5465C17.5707 28.5465 15.0889 28.5465 12.6074 28.5465C10.3203 28.5465 8.03324 28.5637 5.74618 28.5652C4.70747 28.5652 3.66719 28.5652 2.62847 28.53C1.66797 28.4949 1.02425 27.8034 1.01408 26.8304C0.999999 25.3615 1 23.8918 1 22.4221C1 20.1468 1.01017 17.8707 1.01017 15.5954C1.01017 13.32 1 11.0439 1 8.76783C1 6.46617 1.00391 4.16452 1.01173 1.86286C1.01173 0.81241 1.54439 0.137398 2.59484 0.0568353C3.72037 -0.029203 4.8553 0.0091268 5.98631 0.0067803C8.71764 0.00208731 11.449 0.00208731 14.1803 0.0067803C16.885 0.0067803 19.5903 0.00886264 22.296 0.0130342C25.0018 0.0172058 27.7071 0.0146004 30.4118 0.00521444C32.6621 0.00521444 34.9124 -0.00651805 37.1627 0.00521444C38.2734 0.0122539 38.9312 0.496416 39.1017 1.43345C39.176 1.83783 39.1431 2.26255 39.1431 2.67866C39.1431 6.73602 39.1431 10.7931 39.1431 14.85C39.1431 18.8296 39.1384 22.809 39.1291 26.7882C39.1291 27.8151 38.4916 28.4956 37.4763 28.5293C36.3594 28.566 35.2417 28.5488 34.124 28.5512C32.6691 28.5512 31.2135 28.5512 29.7579 28.5512L25.431 28.5574C23.936 28.5574 22.4418 28.5574 20.9484 28.5574H20.0528V28.5465ZM4.42433 25.1214H35.711C35.7212 24.9986 35.7345 24.9094 35.7352 24.8202C35.7407 22.9352 35.7485 21.0494 35.7477 19.1644C35.7477 16.4729 35.7384 13.7815 35.736 11.0901C35.736 8.68491 35.7274 6.27975 35.7438 3.87459C35.7438 3.50384 35.6289 3.42563 35.2808 3.42563C25.1434 3.43397 15.0055 3.43658 4.86703 3.43345C4.72859 3.43345 4.59015 3.44596 4.42511 3.45457L4.42433 25.1214Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M20.0763 34.2641C16.958 34.2641 13.8393 34.2641 10.72 34.2641C8.9656 34.2641 7.2112 34.2704 5.45758 34.2406C5.04985 34.2388 4.65879 34.0786 4.36692 33.7939C4.07505 33.5092 3.90522 33.1222 3.89325 32.7146C3.86118 31.715 4.43217 30.9712 5.36451 30.8937C6.08802 30.8335 6.81934 30.8492 7.54754 30.8492C12.3328 30.8492 17.1184 30.8518 21.9042 30.857C26.0528 30.857 30.2014 30.857 34.35 30.857C35.0071 30.857 35.5835 31.0259 35.9762 31.6C36.1481 31.8394 36.2527 32.1206 36.2791 32.4141C36.3055 32.7077 36.2528 33.0029 36.1263 33.2692C35.8635 33.8683 35.3817 34.2375 34.6973 34.2445C33.0605 34.2628 31.4232 34.2732 29.7853 34.2758C28.3044 34.2805 26.8232 34.2805 25.3418 34.2758C23.886 34.2758 22.4306 34.2724 20.9758 34.2657H20.0763V34.2641Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M20.0739 39.9974H8.56354C7.75165 39.9974 7.07743 39.5586 6.81618 38.8601C6.57762 38.225 6.78255 37.4686 7.32224 36.9829C7.7321 36.6137 8.23894 36.5785 8.75048 36.5785C13.8768 36.5754 19.0036 36.5754 24.131 36.5785C26.5641 36.5785 28.9974 36.5785 31.431 36.5785C31.9284 36.5785 32.4212 36.6223 32.8201 36.9806C33.3606 37.4655 33.5671 38.2219 33.3301 38.8578C33.1994 39.1937 32.9703 39.4823 32.6727 39.6857C32.3751 39.8891 32.0229 39.9977 31.6625 39.9974C29.1392 40.0044 26.6159 39.9974 24.0927 39.9974H20.0739Z"
          fill={fill ? fill : '#202452'}
        />
        <Path
          d="M16.149 14.2751C16.149 13.4407 16.149 12.6064 16.149 11.7721C16.149 11.0768 16.1412 10.3807 16.1615 9.68531C16.1725 9.32707 16.2835 8.98918 16.5768 8.74671C16.896 8.48624 17.2652 8.47764 17.6257 8.61686C17.9185 8.73996 18.2021 8.88372 18.4744 9.04706C18.9734 9.32551 19.4662 9.61648 19.9605 9.90118C20.7161 10.3345 21.4722 10.7678 22.2288 11.2011C23.1825 11.7471 24.1362 12.2928 25.0899 12.8382C25.3653 12.9947 25.6437 13.1511 25.9097 13.3239C26.2124 13.5226 26.447 13.7854 26.4971 14.1609C26.5542 14.5879 26.3469 14.9102 26.0278 15.1542C25.7968 15.3195 25.556 15.4704 25.3066 15.6063C24.6629 15.9794 24.0168 16.3462 23.3707 16.7162C22.6282 17.1407 21.8857 17.5659 21.1431 17.9919C20.4165 18.408 19.6914 18.8273 18.9648 19.2434C18.5948 19.4553 18.2257 19.6681 17.8494 19.8691C17.585 20.019 17.2758 20.0698 16.9773 20.0122C16.5675 19.927 16.3305 19.6485 16.2327 19.2598C16.1809 19.0423 16.1546 18.8194 16.1545 18.5957C16.1474 17.8175 16.1545 17.0392 16.1545 16.2618C16.1545 15.599 16.1545 14.9368 16.1545 14.2751H16.149Z"
          fill={fill ? fill : '#202452'}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_236_161">
          <Rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.39856)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
