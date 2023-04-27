require('dotenv').config()

const { instance } = require("../libs");

class TranslateService {
  constructor() {}

  async detectLanguage(text) {
    const params = `q=${text}`;
    const result = await instance.post(`/v2/detect?${params}`).then(response => {
      return response.data.data.detections[0][0].language;
    })
    .catch(err => {
      console.log("[/detect_error]", err.response)
      throw Error(err.response.status);
    })

    return result;
  }

  async translate(source, target, text) {
    let language = source;
    if (source === "auto") {
      language = await this.detectLanguage(text);
    }
    const result = await instance.post(`/v2?q=${text}&source=${language}&target=${target}`)
      .then(result => {
        return result.data.data.translations[0].translatedText;
      })
      .catch(err => {
        console.log("[/translate_error]", err.response)
        throw Error(err.response.status)
      })

    return result;
  }

  async languages() {
    const result = await instance.get('/v2/languages').then(response => {
      return response.data
    }).catch(error => {
      throw Error(error.response.status)
    })

    return result;
  }
}

module.exports = {
  TranslateService,
};
