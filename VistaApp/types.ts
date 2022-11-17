import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
    SignUp: undefined;
};

export type EntranceScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type ScreenProps = NativeStackScreenProps<RootStackParamList>;