import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "../Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  // const article=[
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "Lauren Boebert's son Tyler arrested, leaving congresswoman 'heartbroken'",
  //         "description": "The congresswoman's son, 18, has been charged with multiple felonies over his alleged role in car break-ins.",
  //         "url": "https://www.bbc.co.uk/news/world-us-canada-68437436",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4481/production/_132773571_gettyimages-2008847897.jpg",
  //         "publishedAt": "2024-03-01T09:37:17.1643742Z",
  //         "content": "Lauren Boebert has said she is heartbroken over her teenage son's arrest but that he will take responsibility for his actions and should be held accountable. \r\nThe Colorado representative's son is ac… [+1604 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "Putin warns West against sending troops to Ukraine",
  //         "description": "In his annual address, Russia's president says the consequences of such a move would be tragic.",
  //         "url": "https://www.bbc.co.uk/news/world-europe-68435163",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11663/production/_132776217_putin_getty.jpg",
  //         "publishedAt": "2024-03-01T09:37:14.2900875Z",
  //         "content": "Russian President Vladimir Putin has warned Western countries against sending troops to Ukraine.\r\nThe consequences of such a decision would be \"tragic\", he said.\r\nIn his annual state of the nation ad… [+3672 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "US says falling trade with China could be positive",
  //         "description": "US Trade Representative Katherine Tai says steep drop in trade with China \"isn't necessarily negative\".",
  //         "url": "https://www.bbc.co.uk/news/business-68441427",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13DEB/production/_132778318_katherinetaimc13bbc.jpg",
  //         "publishedAt": "2024-03-01T08:07:17.3235621Z",
  //         "content": "The steep drop in trade with China could be a positive development, the United States' top trade official has told the BBC.\r\nKatherine Tai said it \"isn't necessarily negative. It could be a positive … [+4883 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "Anant Ambani: World's rich in India for tycoon pre-wedding gala",
  //         "description": "Mark Zuckerberg and Rihanna are among guests at a pre-wedding party for billionaire Mukesh Ambani's son.",
  //         "url": "https://www.bbc.co.uk/news/world-asia-india-68443536",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CEFB/production/_132778925_gettyimages-1250221913-594x594.jpg",
  //         "publishedAt": "2024-03-01T06:37:21.2273285Z",
  //         "content": "Some of the world's most influential people have arrived in India's Gujarat state to attend a wedding party thrown by Asia's richest man.\r\nMark Zuckerberg, Rihanna and Bill Gates are among the guests… [+2986 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "Vietnam: Leaked Communist Party document warns of 'hostile forces'",
  //         "description": "Issued by the secretive Communist Party, the document reveals their fear of losing control, says the BBC's Jonathan Head.",
  //         "url": "https://www.bbc.co.uk/news/world-asia-68443392",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4193/production/_132778761_gettyimages-1658892930.jpg",
  //         "publishedAt": "2024-03-01T05:07:15.7116109Z",
  //         "content": "If countries can be said to go in and out of fashion, then Vietnam is certainly having its moment in the spotlight.\r\nOnce better known for sitting quietly in the strategic shadows, its leaders almost… [+7419 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "More than a billion people obese worldwide, research suggests",
  //         "description": "Researchers say there is an urgent need to change how the condition is tackled as it rises worldwide.",
  //         "url": "https://www.bbc.co.uk/news/health-68436642",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CC2B/production/_132776225_child_eating_fry_getty.jpg",
  //         "publishedAt": "2024-03-01T02:52:17.1333587Z",
  //         "content": "More than a billion people are living with obesity around the world, global estimates published in The Lancet show.\r\nThis includes about 880 million adults and 159 million children, according to 2022… [+3328 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "Former Canadian Prime Minister Brian Mulroney dies at 84",
  //         "description": "Brian Mulroney steered Canada through several tumultuous reforms in the late 80s and early 90s.",
  //         "url": "https://www.bbc.co.uk/news/world-us-canada-68443314",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BA47/production/_132778674_gettyimages-515240866.jpg",
  //         "publishedAt": "2024-03-01T02:52:15.2275808Z",
  //         "content": "Former Canadian Prime Minister Brian Mulroney, who led his country from 1984 to 1993, has died at the age of 84.\r\nThe conservative leader, the 18th prime minister in Canada's history, passed away \"pe… [+4004 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "Poison seller tied to suicide forum tracked down by BBC",
  //         "description": "Ukrainian Leonid Zakutenko sells a type of chemical online thought to be linked to at least 130 UK deaths.",
  //         "url": "https://www.bbc.co.uk/news/uk-68347415",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D139/production/_132716535_zakutenko-3.jpg",
  //         "publishedAt": "2024-03-01T01:37:17.3990277Z",
  //         "content": "Media caption, Watch: BBC doorsteps Leonid Zakutenko\r\nA Ukrainian man selling a poison thought to be linked to at least 130 UK deaths has been identified by the BBC.\r\nLeonid Zakutenko advertised his … [+5923 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "Alexei Navalny: 'No hearse for body' as family prepares funeral",
  //         "description": "Alexei Navalny's team say undertakers have been warned not to provide a vehicle to carry his body.",
  //         "url": "https://www.bbc.co.uk/news/world-europe-68435167",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/11B59/production/_132773527_4fc7b0906ddf8a365ba2d50fc800391f673d212e0_148_5444_30645444x3064.jpg",
  //         "publishedAt": "2024-02-29T21:22:15.3557514Z",
  //         "content": "With hours to go until Alexei Navalny's funeral, his team has said they continue to face difficulties in organising the farewell ceremony.\r\nHis spokeswoman Kira Yarmysh said they had been unable to f… [+3599 chars]"
  //     },
  //     {
  //         "source": {
  //             "id": "bbc-news",
  //             "name": "BBC News"
  //         },
  //         "author": "BBC News",
  //         "title": "Israel-Gaza war: More than 100 reported killed in crowd near Gaza aid convoy, Hamas-run health ministry says",
  //         "description": "There are conflicting reports about how many Palestinians were shot by Israeli forces or run over by aid lorries.",
  //         "url": "https://www.bbc.co.uk/news/world-middle-east-68434443",
  //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2933/production/_132774501_mediaitem132774494.jpg",
  //         "publishedAt": "2024-02-29T20:07:16.4818573Z",
  //         "content": "More than 110 Palestinians are reported to have been killed while trying to get desperately needed aid in north Gaza.\r\nCrowds of waiting civilians descended on a convoy of lorries after it passed thr… [+7253 chars]"
  //     }
  // ]
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const loadpage = async () => {
    page === 1 ? props.progressbar(30) : props.progressbar(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pagesize}&page=${page}`;
    let data = await fetch(url);
    let parserdata = await data.json();
    page === 1 ? props.progressbar(60) : props.progressbar(0);
    page === 1 ? props.progressbar(80) : props.progressbar(0);
    if (parserdata["status"] === "ok") {
      if (page === 1) {
        setarticles(parserdata["articles"]);
      } else {
        setarticles(articles.concat(parserdata["articles"]));
      }

    } else {
        setarticles([]);
        settotalResults(0);
    }
    page === 1 ? props.progressbar(100) : props.progressbar(0);
    setpage(page + 1);
    settotalResults(parserdata["totalResults"]);
  };
  const fetchMoreData = async () => {
    loadpage();
  };
  useEffect(() => {
    document.title = `${props.category}-NewsMonkey`;
    loadpage();
  }, []);
  let defaultimage =
    "https://imgs.search.brave.com/mgID5Uw3yQNrUvHRTTM6mnHIJ_ddQ72hjsus1DqLJK4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTMzMjQy/NTYvMjMzODkvaS80/NTAvZGVwb3NpdHBo/b3Rvc18yMzM4OTg0/MzAtc3RvY2stcGhv/dG8tY3JvcHBlZC1p/bWFnZS1qb3VybmFs/aXN0LWhvbGRpbmct/bmV3c3BhcGVyLmpw/Zw";
  return (
    <>
      <h1 className="text-center" style={{ marginTop: "70px" }}>
        News Monkey.Com
      </h1>
      <p className="text-muted text-center">Read latest news everyday</p>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element["url"]}>
                  <NewsItem
                    title={
                      element.title ? element["title"] : "Title is unavailable"
                    }
                    description={
                      element.description
                        ? element["description"].slice(0, 70)
                        : "Description is unavailable"
                    }
                    newsurl={element.url ? element.url : ""}
                    imagesource={
                      element["urlToImage"]
                        ? element["urlToImage"]
                        : defaultimage
                    }
                    publishedAt={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
