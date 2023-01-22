import { useEffect } from 'react';
import remoteConfig from '@react-native-firebase/remote-config';

function useRemoteConfig() {
    useEffect(() => {
        remoteConfig()
            .setConfigSettings({
                minimumFetchIntervalMillis: 30000,
            })
            .then(() => remoteConfig().fetchAndActivate())
            .then(() => {
                const parameters = remoteConfig().getAll();
                Object.entries(parameters).forEach((elem) => {
                    const [key, entry] = elem;
                    console.log(entry);
                });
            });
    }, []);
}
export default useRemoteConfig;
