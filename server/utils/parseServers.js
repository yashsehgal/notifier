/**
 * Returns the list of server Auth URLs in the Server Object passed to it.
 *
 * @param {[{name: String, hostURL: String, authURL: String}]} object Server List object
 */
function parseServers(object) {
  let serverURLs = [];
  for (let i = 0; i < object.length; i++) {
    serverURLs.push({name: object[i].name, url: object[i].authURL});
  }

  return serverURLs;
}

exports.parseServers = parseServers;
