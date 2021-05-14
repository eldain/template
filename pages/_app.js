import withTwindApp from '@twind/next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default withTwindApp(MyApp)


// TODO: Uncomment and update tracking code when applicable
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import * as Fathom from 'fathom-client'
// import withTwindApp from '@twind/next/app'

// const domains = ['www.example.com']

// function App({ Component, pageProps }) {
//   const router = useRouter()

//   useEffect(() => {
//     // Initialize Fathom when the app loads
//     // Example: yourdomain.com
//     //  - Do not include https://
//     //  - This must be an exact match of your domain.
//     //  - If you're using www. for your domain, make sure you include that here.
//     Fathom.load('YOUR_FATHOM_TRACKING_CODE', {
//       includedDomains: domains,
//     })

//     function onRouteChangeComplete() {
//       Fathom.trackPageview()
//     }
//     // Record a pageview when route changes
//     router.events.on('routeChangeComplete', onRouteChangeComplete)

//     // Unassign event listener
//     return () => {
//       router.events.off('routeChangeComplete', onRouteChangeComplete)
//     }
//   }, [])

//   return <Component {...pageProps} />
// }

// export default withTwindApp(App)