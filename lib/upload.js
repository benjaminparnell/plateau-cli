const got = require('got')
const FormData = require('form-data')
const Conf = require('conf')
const pkg = require('../package.json')

function upload (fileStream, cb) {
  const config = new Conf()
  const form = new FormData()
  form.append('file', fileStream)
  const headers = {
    'X-API-KEY': config.get('apiKey'),
    'user-agent': `${pkg.name}/${pkg.version}`
  }

  return got.post(config.get('url'), {
    headers: form.getHeaders(headers),
    body: form
  })
}

module.exports = upload
