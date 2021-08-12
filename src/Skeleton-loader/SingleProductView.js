import React from 'react'
import ContentLoader from 'react-content-loader'

const AmazonLoader = props => {
  return (
    <ContentLoader
      height={640}
      width={1260}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="710" y="40" rx="0" ry="0" width="95" height="10" />
      <rect x="710" y="320" rx="0" ry="0" width="95" height="30" />
      <rect x="710" y="80" rx="0" ry="0" width="1370" height="225" />
      <rect x="70" y="40" rx="0" ry="0" width="470" height="325" />
      <rect x="710" y="63" rx="0" ry="0" width="72" height="4" />
      <rect x="710" y="5" rx="5" ry="5" width="75" height="20" />
     
    </ContentLoader>
  )
}

AmazonLoader.metadata = {
  name: 'Caio Davi',
  github: 'caio-davi',
  description: 'Gmail Style',
  filename: 'Gmail',
}

export default AmazonLoader