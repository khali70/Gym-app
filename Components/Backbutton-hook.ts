import {useEffect} from 'react';
import {BackHandler} from 'react-native';
/**
 * @param handler BackButton event handler
 * @example
 * ```js
 * useBackButton(()=>{
 *  if(shouldBeHandledHere){
 *  // handel it
 *  return true;
 * }
 *  // let the default thing happen
 *  return true;
 * })
 * ```
 */
export function useBackHandler(handler: () => boolean) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);

    return () => BackHandler.removeEventListener('hardwareBackPress', handler);
  }, [handler]);
}
