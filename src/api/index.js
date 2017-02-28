const __baseUrl = 'https://musicafe.co/api/'
const _baseUrl = 'http://192.168.1.123:8081/api/'

export default {
  getPlaylist(id) {
    return _baseUrl + 'get/playlist/xiami?id=' + id;
  }
}
