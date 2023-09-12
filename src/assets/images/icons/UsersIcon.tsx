import React from 'react';
import { ImageStyle } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { DEFAULT_COLOR_THEME } from '../../../styles/colors';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: string;
}

export const UsersIcon = ({
  style,
  fill = DEFAULT_COLOR_THEME,
}: SvgImageProps) => {
  return (
    <Svg
      width={style?.width ?? 38}
      height={style?.height ?? 32}
      viewBox="0 0 38 32"
      fill="none"
      style={style}>
      <Path
        d="M11.6798 17.5855C12.6016 16.9738 13.4536 16.2885 14.4098 15.8118C15.2072 15.4145 16.1137 15.0977 16.9944 15.0307C19.1328 14.8679 21.3019 14.687 23.3695 15.5351C24.4217 15.9607 25.3828 16.5836 26.201 17.3701C26.314 17.4783 26.4308 17.5836 26.5705 17.7138C27.097 16.6962 27.8283 15.9209 28.8363 15.4298C29.0641 15.3178 29.3006 15.1857 29.5456 15.1513C31.7185 14.8402 33.9077 14.5061 35.8011 16.0683C36.3473 16.5031 36.7872 17.0567 37.0874 17.687C37.3876 18.3173 37.5403 19.0077 37.5337 19.7058C37.5557 22.2903 37.5462 24.8748 37.5385 27.4594C37.5337 28.7995 36.6196 29.6964 35.2689 29.7012C33.3229 29.7079 31.3768 29.7012 29.4298 29.7012H28.9148C28.7827 30.0506 28.6965 30.3923 28.5319 30.692C28.0868 31.5094 27.3832 31.988 26.448 31.9909C21.5827 32.003 16.7168 32.003 11.8502 31.9909C10.7656 31.9909 9.82659 31.2022 9.55282 30.1559C9.51645 30.0181 9.48677 29.8793 9.44465 29.7012H8.15239C6.42937 29.7012 4.70635 29.706 2.98332 29.7012C1.63841 29.6936 0.771156 28.8263 0.768285 27.4795C0.762541 24.9269 0.762541 22.3742 0.768285 19.8216C0.778814 17.0638 2.89622 14.9531 5.65018 14.9349C6.03307 14.9349 6.41597 14.9512 6.79886 14.9349C9.01294 14.8191 10.6508 15.7304 11.6798 17.5855ZM19.1041 29.8716C21.4158 29.8716 23.7285 29.8668 26.0412 29.8716C26.4557 29.8716 26.716 29.7759 26.7112 29.2915C26.7007 27.3301 26.7438 25.3669 26.694 23.4084C26.6174 20.3931 24.4436 17.7865 21.5048 17.2486C20.4519 17.0571 19.3492 17.0667 18.2694 17.0667C14.496 17.0667 11.6128 19.9623 11.5984 23.7367C11.5917 25.5382 11.5984 27.3397 11.5984 29.1422C11.5984 29.7816 11.6817 29.8668 12.3077 29.8668L19.1041 29.8716ZM35.3321 27.5742C35.3534 27.4909 35.3687 27.4061 35.378 27.3206C35.378 24.7705 35.4029 22.2204 35.3656 19.6704C35.3445 18.2182 34.1834 17.126 32.7035 17.0686C32.1943 17.0485 31.6831 17.0686 31.172 17.0609C29.1417 17.0188 27.7613 18.8864 28.4218 20.9081C28.5692 21.3599 28.7147 21.8328 28.7339 22.3008C28.7999 23.8602 28.8085 25.4214 28.8373 26.9827C28.8373 27.1674 28.8373 27.3522 28.8373 27.5742H35.3302H35.3321ZM9.47816 27.5465C9.47816 26.125 9.42551 24.7514 9.4973 23.3854C9.53987 22.5126 9.6887 21.6482 9.9405 20.8114C10.3847 19.3679 9.64376 17.6525 8.19259 17.261C7.45648 17.0629 6.65145 17.0791 5.87609 17.0696C4.05734 17.0504 2.92876 18.1953 2.92493 20.0207C2.9211 22.3487 2.9211 24.678 2.92493 27.0085V27.5484L9.47816 27.5465Z"
        fill={fill}
      />
      <Path
        d="M19.1598 0.000163594C19.9784 -0.00414344 20.7898 0.153804 21.547 0.464882C22.3042 0.775959 22.9923 1.234 23.5714 1.81254C24.1506 2.39108 24.6094 3.07864 24.9213 3.83552C25.2332 4.59239 25.392 5.40357 25.3886 6.22218C25.3875 7.87566 24.7297 9.46102 23.5598 10.6295C22.3899 11.798 20.8038 12.4538 19.1503 12.4528C17.4968 12.4518 15.9114 11.794 14.743 10.6241C13.5745 9.45417 12.9186 7.868 12.9196 6.21452C12.9171 5.39555 13.0769 4.58419 13.39 3.82739C13.703 3.07059 14.1629 2.38336 14.7433 1.80546C15.3236 1.22755 16.0127 0.770443 16.7708 0.460571C17.5289 0.150698 18.3409 -0.00578786 19.1598 0.000163594ZM19.135 2.12905C16.9123 2.14341 15.0533 4.00906 15.0504 6.22888C15.0476 8.44871 16.9458 10.3517 19.1752 10.3383C21.4046 10.3249 23.2913 8.41329 23.2616 6.18772C23.2319 3.96215 21.3433 2.11469 19.135 2.12905Z"
        fill={fill}
      />
      <Path
        d="M2.58114 8.54922C2.57387 8.03042 2.6702 7.51538 2.86449 7.03428C3.05878 6.55318 3.34711 6.11569 3.71261 5.74743C4.07811 5.37917 4.51342 5.08754 4.99304 4.88964C5.47267 4.69174 5.98696 4.59153 6.5058 4.59489C7.53913 4.60484 8.52706 5.02095 9.25612 5.75331C9.98517 6.48567 10.3968 7.47546 10.4021 8.50883C10.4074 9.54219 10.0059 10.5361 9.28434 11.2759C8.5628 12.0157 7.57918 12.4419 6.546 12.4624C6.02737 12.4708 5.51226 12.3757 5.03081 12.1827C4.54937 11.9896 4.11124 11.7025 3.74206 11.3382C3.37288 10.9738 3.08007 10.5395 2.88073 10.0606C2.6814 9.58173 2.57955 9.06792 2.58114 8.54922ZM6.52494 6.72473C5.56771 6.71708 4.71769 7.55465 4.7062 8.51954C4.69471 9.48443 5.53899 10.3297 6.50197 10.3383C7.46495 10.3469 8.3121 9.50166 8.32071 8.54156C8.32933 7.58146 7.49079 6.73239 6.52399 6.72473H6.52494Z"
        fill={fill}
      />
      <Path
        d="M27.8609 8.50804C27.8589 7.98898 27.9606 7.47475 28.1599 6.99551C28.3593 6.51626 28.6524 6.08166 29.022 5.71718C29.3915 5.35269 29.8301 5.06568 30.3121 4.87295C30.7941 4.68023 31.3096 4.58569 31.8286 4.59487C34.0303 4.6054 35.7456 6.36001 35.7294 8.57313C35.725 9.08978 35.6188 9.6005 35.4171 10.0761C35.2153 10.5518 34.9218 10.983 34.5534 11.3452C33.8093 12.0768 32.805 12.4827 31.7616 12.4739C30.7182 12.465 29.721 12.0419 28.9895 11.2979C28.258 10.5538 27.852 9.54955 27.8609 8.50612V8.50804ZM33.6043 8.53771C33.61 7.58048 32.7705 6.73046 31.8057 6.72471C30.8408 6.71897 29.9955 7.56229 29.9888 8.51953C29.9821 9.47676 30.8254 10.3287 31.7865 10.3383C32.7476 10.3478 33.5957 9.49686 33.6014 8.53771H33.6043Z"
        fill={fill}
      />
    </Svg>
  );
};
