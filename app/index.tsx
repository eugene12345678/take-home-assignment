import React, { useState } from 'react';
import { Share2, Settings, ChevronRight } from 'lucide-react';

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState('collections');
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    minHeight: '100vh',
    padding: '1rem'
  };
  
  const phoneFrameStyle = {
    width: '390px',
    maxWidth: '100%',
    backgroundColor: '#000',
    borderRadius: '3rem',
    overflow: 'hidden',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '12px solid #1f2937', 
    position: 'relative',
    height: '745px',
    animation: 'pulse 2s infinite ease-in-out'
  };
  
  
  const notchStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2rem',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 10
  };
  
  const notchDetailStyle = {
    height: '1.75rem',
    width: '8rem',
    backgroundColor: '#000',
    borderBottomLeftRadius: '1rem',
    borderBottomRightRadius: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  
  const selfieHoleStyle = {
    width: '0.75rem',
    height: '0.75rem',
    backgroundColor: '#333',
    borderRadius: '50%',
    marginRight: '0.25rem'
  };
  
  // Button styles  to match image
  const powerButtonStyle = {
    position: 'absolute',
    top: '5rem',
    right: '-14px',
    width: '3px',
    height: '2.5rem',
    backgroundColor: '#4b5563',
    borderTopLeftRadius: '2px',
    borderBottomLeftRadius: '2px'
  };
  
  const volumeUpButtonStyle = {
    position: 'absolute',
    top: '2.5rem',
    left: '-14px',
    width: '3px',
    height: '1.5rem',
    backgroundColor: '#4b5563',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
  };
  
  const volumeDownButtonStyle = {
    position: 'absolute',
    top: '5rem',
    left: '-14px',
    width: '3px',
    height: '2.5rem',
    backgroundColor: '#4b5563',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
  };
  
  const muteButtonStyle = {
    position: 'absolute',
    top: '9rem',
    left: '-14px',
    width: '3px',
    height: '1rem',
    backgroundColor: '#4b5563',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px'
  };
  
  const headerSectionStyle = {
    position: 'relative',
    marginTop: '1.5rem',
    paddingTop: '0.5rem',
    paddingBottom: '1rem'
  };
  
  const headerBgStyle = {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#6b21a8', 
    backgroundImage: 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 10%, rgba(0, 0, 0, 0.9) 70%)',
    opacity: 0.9
  };
  
  const headerGradientStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom right, rgba(107, 33, 168, 0.7), rgba(0, 0, 0, 0.7))'
  };
  
  const headerContentStyle = {
    padding: '0.75rem',
    position: 'relative'
  };
  
  const headerTopStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '0.75rem'
  };
  
  const profileImageStyle = {
    height: '3.5rem',
    width: '3.5rem',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    border: '2px solid #fbbf24' 
  };
  
  const buttonGroupStyle = {
    display: 'flex',
    gap: '0.75rem'
  };
  
  const iconButtonStyle = {
    padding: '0.5rem',
    borderRadius: '9999px',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: '#fff'
  };
  
  const profileNameStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };
  
  const editProfileStyle = {
    color: '#9ca3af', 
    fontSize: '0.75rem',
    borderBottom: '1px solid #4b5563', 
    marginLeft: '8rem'
  };
  
  const locationStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: '0.25rem'
  };
  
  const bioStyle = {
    color: '#d1d5db', 
    marginTop: '0.5rem',
    fontSize: '0.875rem'
  };
  
  const statsStyle = {
    marginTop: '0.75rem',
    fontSize: '0.875rem',
    color: '#9ca3af' 
  };
  
  const statItemStyle = {
    display: 'flex',
    alignItems: 'center'
  };
  
  const statLabelStyle = {
    fontSize: '0.75rem'
  };
  
  const bottomFrameStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1.5rem',
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  
  const homeIndicatorStyle = {
    height: '0.25rem',
    width: '8rem',
    backgroundColor: '#4b5563',
    borderRadius: '9999px'
  };
  
  const tabsContainerStyle = {
    display: 'flex',
    borderBottom: '2px solid #1f2937' 
  };
  
  const tabStyle = (isActive) => ({
    flex: 1,
    padding: '0.75rem 1rem',
    textAlign: 'center',
    color: isActive ? '#10b981' : '#9ca3af', 
    borderBottom: isActive ? '2px solid #10b981' : 'none', 
    backgroundColor: isActive ? 'rgba(16, 185, 129, 0.1)' : 'transparent'
  });
  
  const tabContentStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  
  const contentAreaStyle = {
    padding: '0.5rem',
    flex: 1,
    overflowY: 'auto',
    height: 'auto',
    backgroundColor: '#000'
  };
  
  const collectionsRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
    marginBottom: '0.5rem'
  };
  
  const collectionCardStyle = {
    flex: 1,
    backgroundColor: '#1f2937', 
    borderRadius: '0.375rem',
    overflow: 'hidden',
    minHeight: 'unset', 
    height: '165px'
  };
  
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '0.125rem',
    padding: '0.125rem',
    height:'70%'
  };
  
  const imageContainerStyle = {
    borderRadius: '0.25rem',
    overflow: 'hidden',
    height: 'auto', 
    minHeight: 'unset'
  };
  
  const imageStyle = {
    width: '100%',
    height: '5.0rem',
    objectFit: 'cover'
  };
  
  const wideImageStyle = {
    width: '100%',
    height: '5.0rem',
    objectFit: 'cover'
  };
  
  const collectionFooterStyle = {
    padding: '1.0rem',
    
    borderTop: '0.5px solid #374151', 
  };
  
  const labelStyle = {
    color: '#d1d5db', 
    fontSize: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '0.1rem'
  };
  
  const manageTagsContentStyle = {
    padding: '0.75rem',
    color: '#fff',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#000'
  };
  
  const tagDescriptionStyle = {
    color: '#9ca3af', 
    fontSize: '0.75rem',
    marginBottom: '0.75rem'
  };
  
  const tagOptionsStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };
  
  const tagOptionStyle = {
    backgroundColor: 'rgba(31, 41, 55, 0.5)',
    borderRadius: '0.375rem',
    padding: '0.5rem'
  };
  
  const tagOptionHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  
  const tagOptionTitleStyle = {
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.875rem'
  };
  
  const tagOptionDescStyle = {
    color: '#9ca3af', 
    fontSize: '0.7rem',
    marginTop: '0.125rem'
  };
  
  const footerStyle = {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    color: '#6b7280', 
    paddingBottom: '0.5rem'
  };
  
  const footerItemStyle = {
    fontSize: '1.5rem'
  };
  
  return (
    <div style={containerStyle}>
      <div style={phoneFrameStyle}>
        {/* Phone frame details */}
        <div style={notchStyle}>
          <div style={notchDetailStyle}>
            <div style={selfieHoleStyle}></div>
          </div>
        </div>
        
        {/* Side buttons - outside the phone */}
        <div style={powerButtonStyle}></div>
        <div style={volumeUpButtonStyle}></div>
        <div style={volumeDownButtonStyle}></div>
        <div style={muteButtonStyle}></div>
        
        {/* Header Section */}
        <div style={headerSectionStyle}>
          <div style={headerBgStyle}>
            {/* Animated background effect */}
            <div style={headerGradientStyle}></div>
          </div>
          <div style={headerContentStyle}>
            <div style={headerTopStyle}>
              <div style={profileImageStyle}>
                <img src="https://s3-alpha-sig.figma.com/img/1d55/10ef/4581788b4553fc6eb7aabc0c92a25606?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZinT-GNW~2lKOsYn1DnJcmm3CDMUFN8yqtcHG40WZFd9MrCI-m~ibXcciv0TKTUdSM7ACuNCnpkwvJPqS5FfocZTsCc84xzkC2wRKF6i~G8K-vEps7dIRRc1u8J4ZaaDGYHNKZ8OIr5CNJqQeHozgl1yrcdpQAED2lXJmLIGP0MHTWZSQPRIWfoSCf3CekNXvNHRP2a4El32l3O9KoIU0E-kM3FnRZFcP0HWms80qmA421SZhXeZJ-UgSrgjFj8IUiyNS6iZ2NuMufaC4ArfHsD4tg0XgQQmPH~aOk3mBl02M5bjvOn-kgfYG7nEfkOyq-SwWa8xgPP~-sxQrcSw-Q__" alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <div style={buttonGroupStyle}>
                <button style={iconButtonStyle}>
                  <Share2 size={16} />
                </button>
                <button style={iconButtonStyle}>
                  <Settings size={16} />
                </button>
              </div>
            </div>
            
            <div style={{color: '#fff'}}>
              <div style={profileNameStyle}>
                <h2 style={{fontWeight: 'bold', fontSize: '1rem'}}>@theo_from_hsr</h2>
                <span style={{color: '#10b981'}}>✓</span>
                <span style={editProfileStyle}>EDIT PROFILE</span>
              </div>
              <div style={locationStyle}>
                <span style={{color: '#fff'}}>🇮🇳 INDIA</span>
              </div>
              <p style={bioStyle}>18 y/o with high ambitions, want to build cool stuff!</p>
              
              <div style={statsStyle}>
                <span style={statItemStyle}>
                  <span style={{marginRight: '0.25rem'}}>👥</span> 2
                </span>
                <span style={statLabelStyle}>FOLLOWING</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom phone frame details */}
        <div style={bottomFrameStyle}>
          <div style={homeIndicatorStyle}></div>
        </div>
        
        {/* Tabs */}
        <div style={tabsContainerStyle}>
          <button 
            onClick={() => setActiveTab('collections')} 
            style={tabStyle(activeTab === 'collections')}
          >
            <div style={tabContentStyle}>
              <span style={{marginRight: '0.5rem'}}>📁</span>
              <span style={{fontSize: '0.875rem', fontWeight: '500'}}>COLLECTIONS</span>
            </div>
          </button>
          <button 
            onClick={() => setActiveTab('manageTags')} 
            style={tabStyle(activeTab === 'manageTags')}
          >
            <div style={tabContentStyle}>
              <span style={{marginRight: '0.5rem'}}>🏷️</span>
              <span style={{fontSize: '0.875rem', fontWeight: '500'}}>MANAGE TAGS</span>
            </div>
          </button>
        </div>
        
        {/* Content Area */}
        {activeTab === 'collections' && (
          <div style={contentAreaStyle}>
            <div style={collectionsRowStyle}>
              {/* First collection - 4 images */}
              <div style={collectionCardStyle}>
                <div style={gridStyle}>
                  <div style={imageContainerStyle}>
                    <img src="https://s3-alpha-sig.figma.com/img/e548/6e78/1db950be6f223b1c99781e4d60dcc1a2?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HMQcFIl5p1K1-gSiKmcZvrPlnZfXE9i-nsc07rvYepcnHf4gc~eulDLd6XiiGBx4UybTGpy0VhHmWNuzZI-R7QFiI5rHx6l3L809ttDd7S8pCamsph-KX2gLIh1yBIlydL~XmU9IK5-gOkA3aVXX8g1l9zoNmFLQQPHiYU3PZmI5cbnk2qo4xUZBsrDU2Y2mlB0jLtTO830d3sHDvpF-vKHh6rr9IXpwAgUOIO7Bx8eLmZJn7s~isThW5EKeClP2gvZ3ty3WduoO0eRxdop9W5MiidV1VazGI3BAHNfAqmmsbUlSfRfc4rLNPO~1qELLFkpN92HohZHKCFAnjwNGGQ__" alt="Collection item" style={imageStyle} />
                  </div>
                  <div style={imageContainerStyle}>
                    <img src="https://s3-alpha-sig.figma.com/img/0fc7/0789/0f30881ee244b7046bfd1e518853b02e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a3K4FsFlZC~7CYOAbR2Jjibm-zuSy6-AfzackfufuMLjMjw77i3Jq~EbtdMJQ4lVrhnP4C0JwQchSgfPdarYNx8ez2pxGzNMNwuIlwIzmEExK8tPOjPJ0TE3UF-SvZNGZiWwJv2zMHaIgdULEFgIQ07pvJS1liW7ZhKxU3NQgZ3S9amx8YX2X1sewCI3u~~LFZ7C08gZ3JGXxIEZiSoR6v5PzOv8HiJzIFRLKXW0SpkpFkAVnJAe3LRKS8F7~zuK8q7WztjQ0WDqkhrltdgxsnB3ePkwcXdPlNrfph8jvm~EqSs25UiD2NH~wtlOWmRpsO8VxF1wRUGnfkNp8vk5rw__" alt="Collection item" style={imageStyle} />
                  </div>
                  <div style={imageContainerStyle}>
                    <img src="https://s3-alpha-sig.figma.com/img/1bc6/e7bb/75854cdf784d3dd39593613e6af8b562?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rng0v4ovJ6szh9Ma7O0hjmTKBjl6oqx9Eo2fvMY2suTq3DwyFb1hbyug98k3FoZX~1FlE5V0w-e3LDfoS7o4iboKQ2EuxaG7ephQyYIhbmzDNib3rGGrLHbhfPoWBIsxziyJp2V2mz31vF7ZV-M8esRrfw2Q0nf~LoNa7HmO0L-IA2uX0EEgkygL-tAimASLcyastcgu9CSopFjzPhG4gxT3alf2s2Kr-73BVSCY0I769g58u~Uz5NUuBztiUAf--cRxwwt2qgXZQ02TEU0rLKwcEB5XU21sasQzU3KgZWsQez0j0MzSDJESm6XdeFPKkNOk3RZrxd36RApy~WtyBA__" alt="Collection item" style={imageStyle} />
                  </div>
                  <div style={imageContainerStyle}>
                    <img src="https://s3-alpha-sig.figma.com/img/9f49/dab7/77d40a186e36b06fe901739125c8bbf5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FiyCzezXGZsBkS5T4pvp~wNmLwC8M-VNysrDNSglHeJjovtrh99MLaCvcsIrzSzmSjrJhQnoylp7CwscMgOyMRYEfIRpcf1DdUNYyAdQkebZZrneAQSXS2p8edWdjXxxbcDPCuAJTQ96ZkWzxHpp9TiWB1C1qV7X1JKktxe9zit~lysPHI08A0yLHLtDjk1TJRG5-9~NIukL03oSygXsqRU0FT3owh9oFf79G2tflcd4UX8IVX8MYzwVDzWHw-8puwm1bm5e1DFC0AQg67N6BXeK0lwQG-SRWRSWDKpJneWyTFvX9~kWngnwyXItMwUB~I~kpaU3HzYCc3ulXnXEPw__" alt="Collection item" style={imageStyle} />
                  </div>
                </div>
                <div style={collectionFooterStyle}>
                  <div style={labelStyle}>
                    <span style={{marginRight: '0.40rem'}}>❤️</span>
                    <span>LIKED (32)</span>
                  </div>
                </div>
              </div>
              
              {/* Second collection - 2 images */}
              <div style={collectionCardStyle}>
                <div style={gridStyle}>
                  <div style={imageContainerStyle}>
                    <img src="https://s3-alpha-sig.figma.com/img/0fc7/0789/0f30881ee244b7046bfd1e518853b02e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a3K4FsFlZC~7CYOAbR2Jjibm-zuSy6-AfzackfufuMLjMjw77i3Jq~EbtdMJQ4lVrhnP4C0JwQchSgfPdarYNx8ez2pxGzNMNwuIlwIzmEExK8tPOjPJ0TE3UF-SvZNGZiWwJv2zMHaIgdULEFgIQ07pvJS1liW7ZhKxU3NQgZ3S9amx8YX2X1sewCI3u~~LFZ7C08gZ3JGXxIEZiSoR6v5PzOv8HiJzIFRLKXW0SpkpFkAVnJAe3LRKS8F7~zuK8q7WztjQ0WDqkhrltdgxsnB3ePkwcXdPlNrfph8jvm~EqSs25UiD2NH~wtlOWmRpsO8VxF1wRUGnfkNp8vk5rw__" alt="Collection item" style={{ ...imageStyle, height: '7rem' }} />
                  </div>
                  <div style={imageContainerStyle}>
                    <img src="https://s3-alpha-sig.figma.com/img/9f49/dab7/77d40a186e36b06fe901739125c8bbf5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FiyCzezXGZsBkS5T4pvp~wNmLwC8M-VNysrDNSglHeJjovtrh99MLaCvcsIrzSzmSjrJhQnoylp7CwscMgOyMRYEfIRpcf1DdUNYyAdQkebZZrneAQSXS2p8edWdjXxxbcDPCuAJTQ96ZkWzxHpp9TiWB1C1qV7X1JKktxe9zit~lysPHI08A0yLHLtDjk1TJRG5-9~NIukL03oSygXsqRU0FT3owh9oFf79G2tflcd4UX8IVX8MYzwVDzWHw-8puwm1bm5e1DFC0AQg67N6BXeK0lwQG-SRWRSWDKpJneWyTFvX9~kWngnwyXItMwUB~I~kpaU3HzYCc3ulXnXEPw__" alt="Collection item" style={{ ...imageStyle, height: '7rem' }} />
                  </div>
                </div>
                <div style={collectionFooterStyle}>
                  <div style={labelStyle}>
                    <span style={{marginRight: '0.25rem'}}>🔖</span>
                    <span>SAVED (23)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Third collection - 3 images */}
            <div style={{ ...collectionCardStyle, width: '183px', height: '220px'}}>

              <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.125rem', padding: '0.125rem'}}>
                <div style={imageContainerStyle}>
                  <img src="https://s3-alpha-sig.figma.com/img/95f8/81ca/8dec050b22b9af55bb45f6986e4968df?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=REw873kmfGiLbT0gVTnqxwFedW3Xh1MatsrSsikGt-ZNfJ5TVNTfWkuV7jeXfevvrbgQbu6XWlM9uyJ1QH7dXhsJ2avI8wwQhytSHD5M8t9EYJi6EFOyQdMzcwU4sIt1JCB6efdNKx3gpWAeiBEuRN8QyQ79OKWe0LtHiQAMoUUA~3faI~E~Z8LA781aMqDGiv2cK1BPmYhpM8Zy72AljDTJErsIiDyAWymnS-HisMW027-BL64o1N6n2cEIyU-lBkjR1yJDkxpb-DrOBsAzFp4XhdrOzFG1lSFOD0TApxXEWiMzhUDIQLgSphfNwWAAXvTKaC3IHAEYR4exVWNkNQ__" alt="Collection item" style={imageStyle} />
                </div>
                <div style={imageContainerStyle}>
                  <img src="https://s3-alpha-sig.figma.com/img/95f8/81ca/8dec050b22b9af55bb45f6986e4968df?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=REw873kmfGiLbT0gVTnqxwFedW3Xh1MatsrSsikGt-ZNfJ5TVNTfWkuV7jeXfevvrbgQbu6XWlM9uyJ1QH7dXhsJ2avI8wwQhytSHD5M8t9EYJi6EFOyQdMzcwU4sIt1JCB6efdNKx3gpWAeiBEuRN8QyQ79OKWe0LtHiQAMoUUA~3faI~E~Z8LA781aMqDGiv2cK1BPmYhpM8Zy72AljDTJErsIiDyAWymnS-HisMW027-BL64o1N6n2cEIyU-lBkjR1yJDkxpb-DrOBsAzFp4XhdrOzFG1lSFOD0TApxXEWiMzhUDIQLgSphfNwWAAXvTKaC3IHAEYR4exVWNkNQ__" alt="Collection item" style={imageStyle} />
                </div>
                <div style={{gridColumn: 'span 1', borderRadius: '0.25rem', overflow: 'hidden'}}>
                  <img src="https://s3-alpha-sig.figma.com/img/95f8/81ca/8dec050b22b9af55bb45f6986e4968df?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=REw873kmfGiLbT0gVTnqxwFedW3Xh1MatsrSsikGt-ZNfJ5TVNTfWkuV7jeXfevvrbgQbu6XWlM9uyJ1QH7dXhsJ2avI8wwQhytSHD5M8t9EYJi6EFOyQdMzcwU4sIt1JCB6efdNKx3gpWAeiBEuRN8QyQ79OKWe0LtHiQAMoUUA~3faI~E~Z8LA781aMqDGiv2cK1BPmYhpM8Zy72AljDTJErsIiDyAWymnS-HisMW027-BL64o1N6n2cEIyU-lBkjR1yJDkxpb-DrOBsAzFp4XhdrOzFG1lSFOD0TApxXEWiMzhUDIQLgSphfNwWAAXvTKaC3IHAEYR4exVWNkNQ__" alt="Collection item" style={wideImageStyle} />
                </div>
              </div>
              <div style={{marginTop: '0rem', 
                          borderTop: '1px solid #374151',
                          padding: '0.5rem' }}>
                <div style={labelStyle}>
                  <span style={{marginRight: '0.25rem'}}>📄</span>
                  <span>FILES (3)</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'manageTags' && (
          <div style={manageTagsContentStyle}>
            <div>
              <p style={tagDescriptionStyle}>
                our recommendations work best when you let us know these things:
              </p>
              
              <div style={tagOptionsStyle}>
                <div style={tagOptionStyle}>
                  <div style={tagOptionHeaderStyle}>
                    <div>
                      <h3 style={tagOptionTitleStyle}>
                        <span style={{marginRight: '0.5rem'}}>✨</span>
                        YOUR DIFFICULTY
                      </h3>
                      <p style={tagOptionDescStyle}>you decide the level of challenge you want!</p>
                    </div>
                    <ChevronRight size={16} style={{color: '#9ca3af'}} />
                  </div>
                </div>
                
                <div style={tagOptionStyle}>
                  <div style={tagOptionHeaderStyle}>
                    <div>
                      <h3 style={tagOptionTitleStyle}>
                        <span style={{marginRight: '0.5rem'}}>✨</span>
                        INTERESTS YOU LIKE
                      </h3>
                      <p style={tagOptionDescStyle}>we'll use these to show you cool builds</p>
                    </div>
                    <ChevronRight size={16} style={{color: '#9ca3af'}} />
                  </div>
                </div>
                
                <div style={tagOptionStyle}>
                  <div style={tagOptionHeaderStyle}>
                    <div>
                      <h3 style={tagOptionTitleStyle}>
                        <span style={{marginRight: '0.5rem'}}>🔧</span>
                        TOOLS USED
                      </h3>
                      <p style={tagOptionDescStyle}>we'll suggest better using these picks</p>
                    </div>
                    <ChevronRight size={16} style={{color: '#9ca3af'}} />
                  </div>
                </div>
              </div>
            </div>
            
            <div style={footerStyle}>
              <span style={{...footerItemStyle, color: '#10b981', fontWeight: '500'}}>glitch</span>
              <span style={{...footerItemStyle, color: '#06b6d4', fontWeight: '500'}}>house</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileApp;