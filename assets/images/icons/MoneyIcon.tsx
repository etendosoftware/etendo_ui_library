import React from 'react';
import {ImageStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}
export const MoneyIcon = ({style, fill}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width || 34}
      height={style?.height || 32}
      viewBox="0 0 34 32"
      fill="none"
      style={style}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5317 21.7833C33.5546 23.5912 32.7211 24.7615 31.1933 25.5956C29.454 26.5539 27.5434 26.9617 25.5725 27.172C23.6579 27.3335 21.6724 27.2895 19.7453 26.9085C19.405 26.8413 19.2877 27.0022 19.1449 27.2278C17.8659 29.2483 16.062 30.6505 13.7449 31.4525C9.07413 33.069 3.60695 30.9909 1.35425 26.7369C-1.36673 21.5984 0.84271 15.5607 6.33656 13.2083C8.51005 12.2776 10.7734 12.148 13.0769 12.7368C13.1737 12.7616 13.2711 12.7848 13.3687 12.8069C13.3813 12.8097 13.3967 12.8016 13.4565 12.7961C13.4565 12.6511 13.4565 12.5031 13.4565 12.3551C13.4565 10.064 13.5407 7.76991 13.4328 5.48276C13.3529 3.63385 14.2607 2.46571 15.8232 1.61869C17.5162 0.701004 19.3697 0.293611 21.2799 0.139512C23.7458 -0.139428 26.1898 -0.0113358 28.5888 0.625693C29.9078 0.975926 31.1922 1.47041 32.2107 2.3434C33.0781 3.06342 33.5189 3.95044 33.5442 5.07957C33.4954 10.6475 33.4613 16.2161 33.5317 21.7833ZM20.6288 25.1841C22.6894 25.4701 24.7535 25.4449 26.7984 25.0911C28.0707 24.8715 29.3019 24.5259 30.4072 23.856C31.5753 23.1713 31.8807 22.2908 31.4681 21.0492C28.0577 22.8328 24.386 23.0459 20.6302 22.657C20.5658 23.0948 20.5209 23.4796 20.4499 23.8599C20.3762 24.2543 20.2773 24.6444 20.2022 25.0873C20.348 25.1281 20.4881 25.1407 20.6288 25.1841ZM10.4004 14.268C5.86032 14.2589 2.15249 17.8174 2.14613 22.1897C2.13982 26.5572 5.8327 30.1064 10.3917 30.1145C14.9343 30.1225 18.6491 26.5977 18.6528 22.1985C18.6564 17.8369 14.9521 14.2771 10.4004 14.268ZM15.4032 8.85005C15.3514 9.43714 15.5819 9.91745 16.072 10.2094C16.7777 10.6298 17.4996 11.0803 18.2806 11.3199C21.7367 12.3801 25.2299 12.3609 28.6865 11.3358C29.5322 11.0857 30.3441 10.7348 30.9851 10.129C31.2205 9.90648 31.4575 9.60031 31.509 9.30277C31.5951 8.80616 31.5418 8.2858 31.5418 7.81953C26.1272 10.14 20.8078 10.1534 15.4089 7.79966C15.4089 8.13504 15.4345 8.49485 15.4032 8.85005ZM31.3513 4.24388C31.0539 3.91306 30.719 3.58703 30.3363 3.35789C29.0506 2.62505 27.6089 2.25283 26.1224 2.05633C23.4509 1.70317 20.8175 1.82394 18.2419 2.6562C17.3585 2.90891 16.5155 3.28181 15.8491 3.93067C15.2735 4.49112 15.233 5.05013 15.8353 5.55722C16.3374 5.97987 16.9179 6.35417 17.5263 6.61586C19.4191 7.43015 21.4423 7.63879 23.4967 7.65717C25.5469 7.63626 27.5614 7.4078 29.4657 6.61703C30.1848 6.31841 30.8719 5.96023 31.3404 5.32054C31.6012 4.96448 31.6494 4.57528 31.3513 4.24388ZM31.493 12.2596C26.1464 14.5758 20.8059 14.5789 15.409 12.2307C15.409 12.5723 15.3791 12.9591 15.4225 13.3382C15.4422 13.5103 15.5707 13.7091 15.7128 13.8236C16.3533 14.3394 17.0068 14.8417 17.6756 15.3233C17.9783 15.5414 18.3051 15.8031 18.6593 15.8738C21.0514 16.5654 23.4961 16.649 25.9607 16.377C27.4325 16.1828 28.875 15.8704 30.1616 15.1315C31.7386 14.2258 31.6229 13.9008 31.493 12.2596ZM31.4681 16.6542C27.753 18.5343 23.795 18.6637 19.7646 18.0976C19.9951 18.9111 20.2075 19.7407 20.4521 20.4806C20.488 20.5952 20.6673 20.7288 20.7965 20.7471C22.6832 21.0132 24.5724 21.0053 26.4556 20.7176C27.877 20.5003 29.2559 20.1461 30.4799 19.3789C31.5456 18.711 31.8675 17.8073 31.4681 16.6542ZM12.7956 26.4957C12.3763 26.6591 11.9028 26.6942 11.3826 26.8028C11.3826 27.1537 11.3826 27.5389 11.3826 27.9564C10.7267 27.9564 10.1006 27.9564 9.41889 27.9564C9.41889 27.5605 9.41889 27.1658 9.41889 26.7306C8.66292 26.7306 7.96095 26.7306 7.22491 26.7306C7.22491 26.09 7.22491 25.4907 7.22491 24.8418C7.71406 24.8418 8.1871 24.8418 8.66018 24.8418C9.62874 24.8417 10.5974 24.8662 11.5659 24.8402C12.2292 24.8365 12.6197 24.4901 12.609 23.9314C12.5985 23.3915 12.2203 23.0785 11.5633 23.0743C10.9561 23.0705 10.3489 23.0761 9.7417 23.0726C8.18385 23.0635 6.97854 22.0653 6.81351 20.6507C6.66139 19.2633 7.58824 18.0631 9.14392 17.7487C9.18944 17.6939 9.27281 17.6713 9.40843 17.6372C9.40843 17.251 9.40843 16.8886 9.40843 16.4309C10.0749 16.4309 10.6892 16.4309 11.3552 16.4309C11.3552 16.8162 11.3552 17.2103 11.3552 17.6517C11.9598 17.6517 12.5149 17.6517 13.0993 17.6517C13.0993 18.3014 13.0993 18.9034 13.0993 19.5598C12.414 19.5598 11.739 19.5597 11.0641 19.5598C10.6014 19.5599 10.1467 19.5537 9.67624 19.5782C9.11475 19.5728 8.76772 19.9051 8.76179 20.3538C8.75561 20.8442 9.11202 21.1627 9.69693 21.17C10.4022 21.1784 11.0564 21.1564 11.7352 21.1779C13.181 21.2239 14.2955 22.1706 14.5594 23.5526C14.7842 24.7304 14.0426 26.0096 12.7956 26.4957Z"
        fill={fill ? fill : '#202452'}
      />
    </Svg>
  );
};
