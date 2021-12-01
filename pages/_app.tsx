import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store, wrapper} from "@/redux/store";
import {parseCookies} from "nookies";
import {UserApi} from "@/utils/api";
import {setUserData} from "@/redux/slices/user";

function App({Component, pageProps}: AppProps) {
    return (

        <Component {...pageProps} />
    )
}

App.getInitialProps = wrapper.getInitialAppProps(store => async ({
                                                                   ctx,
                                                                   Component
}) => {
    try {
        const {_token} = parseCookies(ctx)
        const data = await UserApi.getMe(_token)
        store.dispatch(setUserData(data))
    } catch (err) {
        console.log(err)
    }
    return {
        pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {})
    }
}
})
export default wrapper.withRedux(App)
