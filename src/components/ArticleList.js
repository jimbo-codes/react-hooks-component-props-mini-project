import Article from './Article';

function ArticleList(props) {
    console.log(props);
//      function render(){
//         // for(let post of props.posts){
//         //     console.log(post);
//         //     Article(post);
//         // }
//         console.log(props.posts)
//         return <p>{props.posts}</p>
//         //{posts:{title,date,preview}}
// //         return props.posts.map((props)=>{
// // <div>
// //             <h3>{props.posts.[].title}</h3>
// //             <small>{props.posts.date}</small>
// //             <p>{props.posts.preview}</p>
// //         </div>
// //         });
//     }
    return (
        <main>
            {props.posts.map(({id,title,date,preview}) => {
                return Article({id, title,date,preview});
            }

            )
            
            }
        </main>
    )
    }

   
    
    export default ArticleList