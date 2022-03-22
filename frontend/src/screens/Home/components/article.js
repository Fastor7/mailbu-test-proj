export const ArticleSmall = ({ item }) => {
  return (
    <div className="snippets_text">
      <div className="snippet-container">
        <div className="snippet-title">{item.title}</div>
        <div className="snippet-author">{item.auther}</div>
      </div>
    </div>
  );
};

export const ArticleMediumSmall = ({ article }) => {
  return (
    <div className="article-item-2">
      <div className="article-container">
        <div className="card-title">{article.title}</div>
        <div className="card-author">{article.auther} </div>
      </div>
    </div>
  );
};

export const ArticleMedium = ({ articleimage }) => {
  return (
    <div className="article-image mobile-article">
      <div className="article-image-container">
        <div className="row">
          <img src={articleimage.image} alt="article-img"></img>
        </div>
        <div className="row article-text">
          <div className="article-title">{articleimage.title}</div>
          <div className="article-author"> {articleimage.auther}</div>
        </div>
      </div>
    </div>
  );
};

export const ArticleBig = ({ banner }) => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-img">
          <img src={banner.image} alt="banner-img"></img>
        </div>

        <div className="banner-title">{banner.title}</div>
        <div className="banner-author">{banner.auther}</div>
      </div>
    </div>
  );
};
