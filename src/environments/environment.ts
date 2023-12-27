const url = 'https://api.veterinarian.tube';
const webUrl = 'https://veterinarian.tube/';
const tubeUrl = 'https://video.veterinarian.tube/'
// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: false,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.veterinarian.tube'
};
