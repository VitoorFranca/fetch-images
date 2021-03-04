import React from 'react'

function Images(props){

    const key = `20465368-34b81ff71bd7c7d396501f033`
    const url = `https://pixabay.com/api/?key=${key}&q=${props.search}&image_type=photo&orientation=vertical&per_page=50`

    const [imgs, setImgs] = React.useState([])

    React.useEffect(()=>{
        async function getPhoto() {
            const response = await fetch(url)
            const data = await response.json()
            const images = data.hits
            return images
        }

        getPhoto().then(imgs => {
            setImgs(imgs)
            })
    }, [props.search])

    const formatImg = img => img.replace("_640", "_340")

    function notFound(){
        setTimeout(() =>{
            document.getElementById('loading') && document.getElementById('loading').setAttribute('src', 'notFound.png')
        }, 10000)
    }

    return (
        <>{imgs.length ? (
            imgs.map(img =>{
                return (
                    <div className="post" key={img.id}>
                        <div className="userInfo">
                            <img className="userImageProfile" 
                            src={img.userImageURL ? img.userImageURL : 'https://pixabay.com/static/img/profile_image_dummy.svg'} 
                            alt="User Image"
                            /> 
                            <span className="userName">{img.user}</span>
                        </div>
                        <a href={img.pageURL}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="image" 
                                src={formatImg(img.webformatURL)}
                            />
                        </a>
                        <div className="postFooter">
                            <span className="like" >
                                <img src="joiaIcon.png" alt="Like Icon"/><span className="spanLikes" style={{margin: "5px 0 0 5px"}}>{img.likes}</span>
                            </span>
                            <span className="favorite" >
                                <img src="favoriteIcon.png" alt="Favorite Icon"/><span className="spanFav" style={{margin: "5px 0 0 5px"}}>{img.favorites}</span>
                            </span>
                        </div>
                    </div>
                )
                })
        ) : (
            <img onLoad={notFound()} id="loading" src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/animated-loading-c397-1.gif" alt="Loading"/>
        )
    }
        </>
    )
}

export default Images