const LinksSocialMedia = {
  github: 'mariannemorais',
  youtube: 'UCcrPJiLjShbtl6x5mhdxNLg',
  facebook: 'marianne.fernandesdemorais',
  instagram: '_moraismarianne',
  twitter: '_mariannemf'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

// i = i + 1
// i++

// ser humano 12345678910
//um computador 0123456789

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.jason())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.scr = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
