export const cloudinaryOgImageUrl = (title: string) => {
  const encodeTitle: string = encodeURIComponent(title.replace('/', '／'))
  return `https://res.cloudinary.com/kamonegi1977/image/upload/l_text:Sawarabi%20Gothic_50_bold:${encodeTitle},co_rgb:333,w_500,c_fit/v1608393336/ogp_iynadb.png`
}
