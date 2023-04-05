import React, {CSSProperties} from 'react';
import {ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: CSSProperties;
  fill?: string;
}
export const EditNotesIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 30}
      height={style?.height || 32}
      viewBox="0 0 30 32"
      fill="none"
      style={style as ViewStyle}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.2404 23.3332C25.973 25.615 23.6413 27.8936 21.3651 30.1422C21.0219 30.4206 20.5627 30.5618 20.1567 30.6802C18.7039 31.1044 17.2443 31.5075 15.7791 31.8875C14.5285 32.2119 13.7471 31.4193 14.1056 30.1991C14.5512 28.6824 15.0101 27.169 15.5286 25.6639C15.5914 25.3596 15.7765 25.0502 16.078 24.8239C18.2472 22.5874 20.5035 20.3632 22.766 18.1844C23.8579 17.0752 25.1775 16.7382 26.6394 17.1753C28.0698 17.6141 28.9307 18.6233 29.2356 20.0772C29.2837 20.3558 29.2925 20.5436 29.3099 20.6945C29.2712 21.762 28.9439 22.6346 28.2404 23.3332ZM22.4619 21.8612C22.391 21.9311 22.3372 22.0885 22.2308 22.1945C21.0844 23.3358 19.9476 24.4876 18.7698 25.5967C18.1761 26.1558 17.6999 26.7442 17.5451 27.5643C17.4626 28.0015 17.2946 28.4229 17.1489 28.9057C18.5471 28.5468 19.9473 28.457 20.8091 27.1839C20.9168 27.0258 21.006 26.9419 21.1053 26.8441C22.1763 25.7884 23.2864 24.7326 24.3878 23.652C23.7292 23.051 23.1531 22.4869 22.4619 21.8612ZM26.7285 20.4398C26.5938 19.9297 26.2363 19.6003 25.7008 19.5171C25.149 19.4314 24.7272 19.666 24.4017 20.1025C24.9918 20.6788 25.5687 21.2422 26.171 21.8304C26.6277 21.4594 26.8798 21.0124 26.7285 20.4398ZM24.7451 13.9168C23.9336 13.917 23.4205 13.3848 23.4718 12.5114C23.4081 10.1093 23.4282 7.70682 23.4015 5.30487C23.3962 4.83204 23.3223 4.34506 23.1249 3.8972C22.7201 2.89976 21.7792 2.55998 20.6915 2.55914C16.8525 2.55748 13.0135 2.55831 9.21763 2.55831C7.97912 2.55831 6.78384 2.54166 5.58847 2.56247C3.84535 2.49886 2.79384 3.52512 2.79333 5.2341C2.79131 12.4131 2.79106 19.592 2.79359 26.771C2.79417 28.4522 3.85151 29.4836 5.56547 29.4875C6.8874 29.4904 8.20934 29.4806 9.53102 29.493C10.1465 29.4988 10.5825 29.8324 10.7687 30.4302C10.9241 30.8465 10.76 31.4308 10.3225 31.7207C10.0887 31.8642 9.78021 31.9718 9.50338 31.9764C8.05546 32.0006 6.60603 32.0138 5.15853 31.9778C2.47993 31.9114 0.295834 29.7529 0.271311 27.1C0.245441 23.4506 0.262716 19.6852 0.262716 15.9889C0.261536 15.9889 0.260272 15.9889 0.259092 15.9889C0.259092 12.3396 0.249317 8.70152 0.262547 5.06342C0.271311 2.65364 1.90083 0.614954 4.18842 0.132965C4.61103 0.0438777 5.05159 0.000749334 5.48406 0C10.5605 0.0322214 15.6371 -0.00940831 20.7136 0.0405473C23.7239 0.0705207 25.9071 2.11412 25.9628 5.09572C25.9703 7.56711 25.9517 10.039 26.0016 12.5106C25.9797 13.3801 25.4488 13.9166 24.7451 13.9168ZM14.4321 19.9885C13.1402 19.9986 11.848 19.9912 10.556 19.9911C9.2499 19.9909 7.94372 19.9972 6.63771 19.9882C5.99929 19.9837 5.54094 19.6823 5.36768 19.0857C5.2208 18.6124 5.3885 18.0372 5.82704 17.7612C6.06291 17.6128 6.37125 17.5045 6.70471 17.5025C9.24586 17.5575 11.8441 17.4855 14.4423 17.4944C15.2045 17.497 15.8075 18.026 15.7607 18.7456C15.7724 19.4383 15.214 19.9824 14.4321 19.9885ZM19.4784 9.99512C17.355 9.99171 15.2315 9.9937 13.1081 9.99354C10.9565 9.99329 8.80496 9.99512 6.65339 9.99204C6.11886 9.99129 5.69945 9.77848 5.45381 9.29191C5.23294 8.85472 5.27726 8.4281 5.60583 8.03095C5.84162 7.61215 6.27274 7.54721 6.76395 7.55554C9.05608 7.49468 11.3483 7.49259 13.6814 7.49259C15.5951 7.49268 17.5499 7.50891 19.5045 7.49526C20.5665 7.50009 21.1907 8.43118 20.7342 9.32813C20.4758 9.846 20.0273 9.99595 19.4784 9.99512ZM20.7342 14.3578C20.4757 14.8749 20.0272 14.9949 19.4783 14.994C17.3549 14.9906 15.2314 14.9927 13.108 14.9924C10.9564 14.9923 8.80487 14.9941 6.65339 14.991C6.11886 14.9902 5.69945 14.7774 5.45372 14.2909C5.23294 13.8536 5.27726 13.427 5.60583 13.0298C5.8417 12.6111 6.27274 12.4892 6.76395 12.49C9.05617 12.4936 11.3483 12.4916 13.6822 12.4916C15.5952 12.4916 17.5499 12.5378 19.5045 12.4942C20.5665 12.4991 21.1907 13.4302 20.7342 14.3578Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
