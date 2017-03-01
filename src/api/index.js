
const _baseUrl =
  process.env.NODE_ENV === 'production' ?
  '//musicapi.applinzi.com/api/' : '//192.168.1.123:8081/api/'

export default {
  getPlaylist(id) {
    return _baseUrl + 'get/playlist/xiami?id=' + id;
  }
}
