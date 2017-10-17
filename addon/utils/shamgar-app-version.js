import config from "ember-get-config";

const {
  APP: {
    version
  }
} = config;


const versionRegExp = /\d+[.]\d+[.]\d+/;

export default function shamgarAppVersion() {
  return version.match(versionRegExp)[0].trim();
}
