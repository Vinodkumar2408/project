const Articleslist = ({articles}) => {
    return ( 
        <div>

            {
                articles && articles.map((article)=>{
                    return (
                        <div>
                            <h1>{article.title}</h1>
                            <p>{article.body}</p>
                        </div>
                    )

                })
            }

        </div>
    );
}
export default Articleslist