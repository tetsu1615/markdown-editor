import * as marked from "marked"
import * as sanitizedHtml from 'sanitize-html'

const worker: Worker = self as any

worker.addEventListener('message', (event) => {

  const text = event.data
  const html = sanitizedHtml(marked(text), { allowedTags: [...sanitizedHtml.defaults.allowedTags, 'h1', 'h2']})
  worker.postMessage({ html })
})