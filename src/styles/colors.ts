import { ColorScheme } from './types';

export const assetCosmos = {
  cosmos100: '#fbe0e4',
  cosmos200: '#f7c5ce',
  cosmos300: '#f3aab7',
  cosmos400: '#ef8fa0',
  cosmos500: '#ec768a',
  cosmos600: '#e43f5b',
  cosmos700: '#d21d3d',
  cosmos800: '#a61730',
  cosmos900: '#791123',
};
export const assetLilac = {
  lilac100: '#eddbf0',
  lilac200: '#dbb8e0',
  lilac300: '#d0a2d7',
  lilac400: '#c68dce',
  lilac500: '#bb78c4',
  lilac600: '#b062bb',
  lilac700: '#92449d',
  lilac800: '#713479',
  lilac900: '#4f2555',
};
export const assetLavender = {
  lavender100: '#ddd2f9',
  lavender200: '#bba6f2',
  lavender300: '#a387ee',
  lavender400: '#8f6cea',
  lavender500: '#7a50e6',
  lavender600: '#541fdb',
  lavender700: '#491bc0',
  lavender800: '#381593',
  lavender900: '#270f67',
};
export const assetGrey = {
  white: '#ffffff',
  grey100: '#f3f3f6',
  grey200: '#e7e7ee',
  grey300: '#d9d9e3',
  grey400: '#bbbbcd',
  grey500: '#9595b1',
  grey600: '#5f5f82',
  grey700: '#494964',
  grey800: '#343447',
  grey900: '#09090c',
};
export const pointColors: ColorScheme = {
  ...assetCosmos,
  ...assetLilac,
  ...assetLavender,
  ...assetGrey,
};
export const assetColors = {
  ...pointColors,
};
