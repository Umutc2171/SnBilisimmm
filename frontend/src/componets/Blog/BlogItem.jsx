import "./BlogItem.css"

const BlogItem = () => {
  return (
    <li className="blog-item">
    <a href="/Hizmetlerimiz/Kamera" className="blog-image">
        <img src="/img/Blog/kamera/kamera.png" alt="Kamera"/>
    </a>
    <div className="blog-info">
        <div className="blog-info-top">
        </div>
        <div className="blog-info-center">
            <a href="/Hizmetlerimiz/Kamera">Kamera Sistemlerimiz</a>
        </div>
        <div className="blog-info-bottom">
            <a href="/Hizmetlerimiz/Kamera">Daha Fazlası</a>
        </div>
        
    </div>
 
    <a href="/Hizmetlerimiz/İp-Kamera" className="blog-image">
        <img src="" alt="İp Kamera"/>
    </a>
    <div className="blog-info">
        <div className="blog-info-top">
        </div>
        <div className="blog-info-center">
            <a href="/Hizmetlerimiz/İp-Kamera">İp Kamera Hizmetlerimiz</a>
        </div>
        <div className="blog-info-bottom">
            <a href="/Hizmetlerimiz/İp-Kamera">Daha Fazlası</a>
        </div>       
    </div>

</li>



  )
}

export default BlogItem