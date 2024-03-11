import {
  requireNativeComponent,
  UIManager,
  Platform,
  type ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-roomplan' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type RoomplanProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'RoomplanView';

export const RoomplanView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<RoomplanProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
