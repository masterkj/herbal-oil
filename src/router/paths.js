
/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */

//  import lazyLoading from './lazyLoading'

const lazyLoading = (view) => import(`@/views/${view}`)

export default [
    {
      path: '',
      name: 'Home',
      component: () => lazyLoading('Home')
    },
  ]
