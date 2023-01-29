import { useEffect, useState } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';

function useRemoteConfig() {
    const [banner, setBanner] = useState({
        bigText: '',
        smallText: '',
    });
    useEffect(() => {
        remoteConfig()
            .setConfigSettings({
                minimumFetchIntervalMillis: 3000,
            })
            .then(() => remoteConfig().fetchAndActivate())
            .then(() => {
                const bigText = remoteConfig().getString('banner_bigText');
                const smallText = remoteConfig().getString('banner_smallText');
                setBanner({
                    ...banner,
                    bigText,
                    smallText,
                });
            })
            .catch(() => {
                setBanner({
                    bigText: 'Bienvenido',
                    smallText: '',
                });
            });
    }, []);
    return { ...banner };
}
export default useRemoteConfig;
