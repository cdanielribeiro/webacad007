function back() {
  return `<a href="/">voltar</a><br>\n`;
}

function createLink(filename) {
  return `<a href="/${filename}">${filename}</a><br>\n`;
}

module.exports = {
  back: back,
  createLink: createLink,
};
