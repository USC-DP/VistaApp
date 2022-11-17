import { useTranslation } from "react-i18next";
import { SafeAreaView, Text } from "react-native";
import { ScreenProps as Props } from "../types";

export default function SignUp({ navigation }: Props) {
    const { t } = useTranslation();

    return (
        <SafeAreaView>
            <Text>{t('common:helloworld')}</Text>
        </SafeAreaView>
    );
 
}