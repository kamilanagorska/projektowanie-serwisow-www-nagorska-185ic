import quotes from './QuotesDatabase'

function Generator() {
    const random = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[random]
    let text = randomQuote.quote
    let author = randomQuote.author
    if(author === ""){
        author = 'Unknown'
    }
    return(
        <div className="text-center fontyy">
            <p style={{fontSize: '20px'}}>
                {text}
            </p> 
            <p>
                -{author}-
            </p>
        </div>
    )

}
export default Generator;