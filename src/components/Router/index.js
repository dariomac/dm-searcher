import { routesMap } from './router.module';

export { routeReducer, routeMiddleware, enhancer, pageReducer, initialDispatch } from './router.module';

export { updateRouterSaga } from './router.sagas';

export const actions = Object.keys(routesMap);
