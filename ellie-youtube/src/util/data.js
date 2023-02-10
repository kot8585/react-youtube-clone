import {format, register} from 'timeago.js'
import koLocale from 'timeago.js/lib/lang/ko'

register('ko', koLocale);

//와 default도 지정하구 값도 지정해줬어... 역시 고수다..
export function formatAgo(date, lang = 'en_US') {
  return format(date, lang);
}